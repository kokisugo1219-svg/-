(function () {
  'use strict';

  const STORAGE_KEY = 'spiLangApp_v1';
  const TANGO_STORAGE_KEY = 'spiLangApp_tango_v1';

  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  function loadTangoStats() {
    try {
      return JSON.parse(localStorage.getItem(TANGO_STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveTangoStats() {
    localStorage.setItem(TANGO_STORAGE_KEY, JSON.stringify(tangoStats));
  }

  let stats = loadStats();
  let selectedCategory = 'all';
  let currentQuiz = [];
  let currentIndex = 0;
  let sessionResults = [];
  let answered = false;

  let tangoStats = loadTangoStats();
  let selectedTangoCategory = 'all';
  let tangoDeck = [];
  let tangoIndex = 0;
  let tangoFlipped = false;

  const screens = {
    home: document.getElementById('screen-home'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result'),
    tango: document.getElementById('screen-tango'),
  };

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function prepareQuestion(q) {
    const correctText = q.choices[q.answerIndex];
    const shuffledChoices = shuffle(q.choices);
    const answerIndex = shuffledChoices.indexOf(correctText);
    return Object.assign({}, q, { choices: shuffledChoices, answerIndex });
  }

  function getCategoryStats(categoryKey) {
    const ids = QUESTIONS.filter((q) => categoryKey === 'all' || q.category === categoryKey).map((q) => q.id);
    let attempts = 0;
    let correct = 0;
    ids.forEach((id) => {
      const s = stats[id];
      if (s) {
        attempts += s.attempts;
        correct += s.correct;
      }
    });
    return { attempts, correct, rate: attempts ? Math.round((correct / attempts) * 100) : null };
  }

  function getWeakQuestions() {
    return QUESTIONS.filter((q) => {
      const s = stats[q.id];
      return s && s.lastCorrect === false;
    });
  }

  function renderHome() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';
    const cats = [{ key: 'all', label: 'すべて' }].concat(
      Object.keys(CATEGORY_LABELS).map((key) => ({ key, label: CATEGORY_LABELS[key] }))
    );
    cats.forEach((c) => {
      const s = getCategoryStats(c.key);
      const card = document.createElement('div');
      card.className = 'cat-card' + (selectedCategory === c.key ? ' selected' : '');
      card.innerHTML =
        '<div class="cat-name">' + c.label + '</div>' +
        '<div class="cat-rate">' + (s.rate !== null ? s.rate + '% 正答率' : '未挑戦') + '</div>' +
        '<div class="cat-count">' + s.attempts + '問 挑戦済み</div>';
      card.addEventListener('click', () => {
        selectedCategory = c.key;
        renderHome();
      });
      grid.appendChild(card);
    });

    const weak = getWeakQuestions();
    document.getElementById('weak-count').textContent = weak.length;
    document.getElementById('review-btn').disabled = weak.length === 0;

    renderTangoHome();
  }

  function getTangoCategories() {
    const set = new Set(TANGO_LIST.map((w) => w.category));
    return Array.from(set);
  }

  function isTangoKnown(id) {
    const s = tangoStats[id];
    return !!(s && s.known);
  }

  function renderTangoHome() {
    const knownCount = TANGO_LIST.filter((w) => isTangoKnown(w.id)).length;
    document.getElementById('tango-total-count').textContent = TANGO_LIST.length;
    document.getElementById('tango-known-count').textContent = knownCount;

    const grid = document.getElementById('tango-category-grid');
    grid.innerHTML = '';
    const cats = [{ key: 'all', label: 'すべて' }].concat(
      getTangoCategories().map((c) => ({ key: c, label: c }))
    );
    cats.forEach((c) => {
      const words = c.key === 'all' ? TANGO_LIST : TANGO_LIST.filter((w) => w.category === c.key);
      const known = words.filter((w) => isTangoKnown(w.id)).length;
      const card = document.createElement('div');
      card.className = 'cat-card' + (selectedTangoCategory === c.key ? ' selected' : '');
      card.innerHTML =
        '<div class="cat-name">' + c.label + '</div>' +
        '<div class="cat-rate">' + known + ' / ' + words.length + '語</div>';
      card.addEventListener('click', () => {
        selectedTangoCategory = c.key;
        renderTangoHome();
      });
      grid.appendChild(card);
    });
  }

  function startTango() {
    let pool = selectedTangoCategory === 'all' ? TANGO_LIST : TANGO_LIST.filter((w) => w.category === selectedTangoCategory);
    if (document.getElementById('tango-unknown-only').checked) {
      pool = pool.filter((w) => !isTangoKnown(w.id));
    }
    if (pool.length === 0) return;
    tangoDeck = shuffle(pool);
    tangoIndex = 0;
    showScreen('tango');
    renderTangoCard();
  }

  function renderTangoCard() {
    tangoFlipped = false;
    const w = tangoDeck[tangoIndex];
    document.getElementById('tango-progress').textContent = (tangoIndex + 1) + ' / ' + tangoDeck.length;
    document.getElementById('tango-progress-bar').style.width = (tangoIndex / tangoDeck.length) * 100 + '%';
    document.getElementById('tango-card-category').textContent = w.category;
    document.getElementById('tango-card-word').textContent = w.word;
    document.getElementById('tango-card-reading').textContent = w.reading;
    document.getElementById('tango-card-meaning').textContent = w.meaning;
    document.getElementById('tango-card-example').textContent = w.example ? '例：' + w.example : '';
    document.getElementById('tango-card').classList.remove('flipped');
    document.getElementById('tango-flip-hint').textContent = 'タップして意味を表示';
    document.getElementById('tango-judge-buttons').classList.remove('show');
  }

  function flipTangoCard() {
    tangoFlipped = !tangoFlipped;
    document.getElementById('tango-card').classList.toggle('flipped', tangoFlipped);
    document.getElementById('tango-judge-buttons').classList.toggle('show', tangoFlipped);
  }

  function judgeTango(known) {
    const w = tangoDeck[tangoIndex];
    tangoStats[w.id] = { known: known };
    saveTangoStats();
    if (tangoIndex < tangoDeck.length - 1) {
      tangoIndex++;
      renderTangoCard();
    } else {
      showScreen('home');
      renderHome();
    }
  }

  document.getElementById('tango-card').addEventListener('click', flipTangoCard);
  document.getElementById('tango-start-btn').addEventListener('click', startTango);
  document.getElementById('tango-known-btn').addEventListener('click', () => judgeTango(true));
  document.getElementById('tango-unknown-btn').addEventListener('click', () => judgeTango(false));
  document.getElementById('tango-home-btn').addEventListener('click', () => {
    showScreen('home');
    renderHome();
  });

  function startQuiz(categoryKey, count, reviewMode) {
    let pool;
    if (reviewMode) {
      pool = getWeakQuestions();
    } else {
      pool = QUESTIONS.filter((q) => categoryKey === 'all' || q.category === categoryKey);
    }
    pool = shuffle(pool);
    if (count !== 'all') {
      pool = pool.slice(0, Math.min(Number(count), pool.length));
    }
    if (pool.length === 0) return;

    currentQuiz = pool.map(prepareQuestion);
    currentIndex = 0;
    sessionResults = [];
    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = currentQuiz[currentIndex];
    document.getElementById('quiz-progress').textContent = (currentIndex + 1) + ' / ' + currentQuiz.length;
    document.getElementById('quiz-progress-bar').style.width = (currentIndex / currentQuiz.length) * 100 + '%';
    document.getElementById('quiz-category-label').textContent = CATEGORY_LABELS[q.category];
    document.getElementById('quiz-instruction').textContent = q.instruction;
    document.getElementById('quiz-prompt').innerHTML = q.promptHTML;

    const choicesEl = document.getElementById('quiz-choices');
    choicesEl.innerHTML = '';
    const labels = ['①', '②', '③', '④', '⑤', '⑥'];
    q.choices.forEach((choiceHTML, idx) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = '<span class="choice-label">' + labels[idx] + '</span><span class="choice-text">' + choiceHTML + '</span>';
      btn.addEventListener('click', () => selectChoice(idx));
      choicesEl.appendChild(btn);
    });

    document.getElementById('explanation-box').classList.remove('show');
    document.getElementById('next-btn').classList.remove('show');
  }

  function selectChoice(idx) {
    if (answered) return;
    answered = true;
    const q = currentQuiz[currentIndex];
    const correct = idx === q.answerIndex;
    sessionResults.push({ id: q.id, category: q.category, correct: correct });
    updateStats(q.id, correct);

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answerIndex) btn.classList.add('correct');
      else if (i === idx) btn.classList.add('wrong');
    });

    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-box').classList.add('show');
    document.getElementById('next-btn').classList.add('show');
    document.getElementById('next-btn').textContent =
      currentIndex === currentQuiz.length - 1 ? '結果を見る' : '次の問題へ';
  }

  function updateStats(id, correct) {
    if (!stats[id]) stats[id] = { attempts: 0, correct: 0, wrong: 0, lastCorrect: null };
    stats[id].attempts++;
    if (correct) stats[id].correct++;
    else stats[id].wrong++;
    stats[id].lastCorrect = correct;
    saveStats();
  }

  function showResult() {
    showScreen('result');
    const total = sessionResults.length;
    const correctCount = sessionResults.filter((r) => r.correct).length;
    document.getElementById('result-score').textContent = correctCount + ' / ' + total;
    document.getElementById('result-rate').textContent = (total ? Math.round((correctCount / total) * 100) : 0) + '%';

    const breakdown = document.getElementById('result-breakdown');
    breakdown.innerHTML = '';
    Object.keys(CATEGORY_LABELS).forEach((cat) => {
      const items = sessionResults.filter((r) => r.category === cat);
      if (items.length === 0) return;
      const c = items.filter((r) => r.correct).length;
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = '<span>' + CATEGORY_LABELS[cat] + '</span><span>' + c + ' / ' + items.length + '</span>';
      breakdown.appendChild(row);
    });

    renderHome();
  }

  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < currentQuiz.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  });

  document.querySelectorAll('.count-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      startQuiz(selectedCategory, btn.dataset.count, false);
    });
  });

  document.getElementById('review-btn').addEventListener('click', () => {
    startQuiz(null, 'all', true);
  });

  document.getElementById('retry-btn').addEventListener('click', () => {
    showScreen('home');
    renderHome();
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('学習記録（正誤・苦手分野・単語帳の暗記状況）をすべて削除します。よろしいですか？')) {
      stats = {};
      tangoStats = {};
      saveStats();
      saveTangoStats();
      renderHome();
    }
  });

  renderHome();
})();
