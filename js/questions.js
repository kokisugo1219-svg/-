/**
 * SPIテストセンター「言語」分野 問題データ
 * category: 'nigo'(二語の関係) | 'imiyoho'(語句の意味・用法) | 'bunpo'(文の並び替え・空欄補充)
 * choices[answerIndex] が正解。表示時に app.js 側でシャッフルする。
 */
const QUESTIONS = [
  // ===================== 二語の関係 (nigo) =====================
  {
    id: 'nigo-001', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '医者 － 聴診器',
    choices: ['大工 － のこぎり', '医者 － 病院', '果物 － りんご', '自動車 － タイヤ', '太陽 － 地球'],
    answerIndex: 0,
    explanation: '「医者は聴診器を使う」という職業と道具の関係。同様に「大工はのこぎりを使う」が同じ関係。'
  },
  {
    id: 'nigo-002', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '自動車 － タイヤ',
    choices: ['本 － ページ', '医者 － 聴診器', '犬 － 動物', '上昇 － 下降', '教師 － 授業'],
    answerIndex: 0,
    explanation: '「自動車はタイヤという部分を持つ」という全体と部分の関係。同様に「本はページという部分を持つ」。'
  },
  {
    id: 'nigo-003', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '地震 － 津波',
    choices: ['過労 － 病気', 'りんご － 果物', '迅速 － 敏速', '光 － 闇', 'パン － 小麦粉'],
    answerIndex: 0,
    explanation: '「地震が津波を引き起こす」という原因と結果の関係。同様に「過労が病気を引き起こす」。'
  },
  {
    id: 'nigo-004', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '歓喜 － 喜び',
    choices: ['迅速 － 敏速', '上昇 － 下降', '医者 － 病院', '果物 － りんご', '自動車 － タイヤ'],
    answerIndex: 0,
    explanation: '「歓喜」と「喜び」はほぼ同じ意味の類義語。同様に「迅速」と「敏速」も類義語の関係。'
  },
  {
    id: 'nigo-005', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '上昇 － 下降',
    choices: ['光 － 闇', '迅速 － 敏速', '大工 － のこぎり', '本 － ページ', '地震 － 津波'],
    answerIndex: 0,
    explanation: '「上昇」と「下降」は意味が反対の対義語。同様に「光」と「闇」も対義語の関係。'
  },
  {
    id: 'nigo-006', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '果物 － りんご',
    choices: ['乗り物 － 自動車', '自動車 － タイヤ', '医者 － 聴診器', '過労 － 病気', '迅速 － 敏速'],
    answerIndex: 0,
    explanation: '「りんご」は「果物」に含まれる一種であるという包含関係。同様に「自動車」は「乗り物」に含まれる。'
  },
  {
    id: 'nigo-007', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: 'パン － 小麦粉',
    choices: ['家具 － 木材', '本 － ページ', '教師 － 授業', '上昇 － 下降', '果物 － りんご'],
    answerIndex: 0,
    explanation: '「パンは小麦粉から作られる」という製品と原料の関係。同様に「家具は木材から作られる」。'
  },
  {
    id: 'nigo-008', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '教師 － 授業',
    choices: ['医者 － 診察', '大工 － のこぎり', '光 － 闇', '果物 － りんご', 'パン － 小麦粉'],
    answerIndex: 0,
    explanation: '「教師の仕事は授業をすること」という職業と仕事内容の関係。同様に「医者の仕事は診察をすること」。'
  },
  {
    id: 'nigo-009', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '倹約 － 節約',
    choices: ['温和 － 穏やか', '拡大 － 縮小', '医者 － 診察', '家具 － 木材', '乗り物 － 自動車'],
    answerIndex: 0,
    explanation: '「倹約」と「節約」はほぼ同じ意味の類義語。同様に「温和」と「穏やか」も類義語。'
  },
  {
    id: 'nigo-010', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '拡大 － 縮小',
    choices: ['温和 － 粗暴', '倹約 － 節約', '大工 － のこぎり', '果物 － りんご', 'パン － 小麦粉'],
    answerIndex: 0,
    explanation: '「拡大」と「縮小」は反対の意味を持つ対義語。同様に「温和」と「粗暴」も対義語。'
  },
  {
    id: 'nigo-011', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '花 － 桜',
    choices: ['楽器 － ピアノ', '自動車 － タイヤ', '医者 － 聴診器', '地震 － 津波', '迅速 － 敏速'],
    answerIndex: 0,
    explanation: '「桜」は「花」の一種であるという包含関係。同様に「ピアノ」は「楽器」の一種。'
  },
  {
    id: 'nigo-012', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '大工 － のこぎり',
    choices: ['画家 － 絵筆', '果物 － りんご', '拡大 － 縮小', 'パン － 小麦粉', '教師 － 授業'],
    answerIndex: 0,
    explanation: '「大工はのこぎりを使う」という職業と道具の関係。同様に「画家は絵筆を使う」。'
  },
  {
    id: 'nigo-013', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '過労 － 病気',
    choices: ['睡眠不足 － 集中力低下', '温和 － 穏やか', '花 － 桜', '大工 － のこぎり', '上昇 － 下降'],
    answerIndex: 0,
    explanation: '「過労が病気を引き起こす」という原因と結果の関係。同様に「睡眠不足が集中力低下を引き起こす」。'
  },
  {
    id: 'nigo-014', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '家具 － 木材',
    choices: ['ガラス － 砂', '花 － 桜', '医者 － 診察', '拡大 － 縮小', '楽器 － ピアノ'],
    answerIndex: 0,
    explanation: '「家具は木材から作られる」という製品と原料の関係。同様に「ガラスは砂から作られる」。'
  },
  {
    id: 'nigo-015', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '温和 － 穏やか',
    choices: ['明白 － 明瞭', '拡大 － 縮小', '花 － 桜', 'パン － 小麦粉', '大工 － のこぎり'],
    answerIndex: 0,
    explanation: '「温和」と「穏やか」はほぼ同じ意味の類義語。同様に「明白」と「明瞭」も類義語。'
  },
  {
    id: 'nigo-016', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '明白 － 曖昧',
    choices: ['積極 － 消極', '明白 － 明瞭', '医者 － 診察', '花 － 桜', '家具 － 木材'],
    answerIndex: 0,
    explanation: '「明白」と「曖昧」は反対の意味を持つ対義語。同様に「積極」と「消極」も対義語。'
  },
  {
    id: 'nigo-017', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '楽器 － ピアノ',
    choices: ['文房具 － 鉛筆', 'パン － 小麦粉', '教師 － 授業', '積極 － 消極', '大工 － のこぎり'],
    answerIndex: 0,
    explanation: '「ピアノ」は「楽器」の一種であるという包含関係。同様に「鉛筆」は「文房具」の一種。'
  },
  {
    id: 'nigo-018', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '画家 － 絵筆',
    choices: ['料理人 － 包丁', '明白 － 曖昧', '花 － 桜', 'ガラス － 砂', '楽器 － ピアノ'],
    answerIndex: 0,
    explanation: '「画家は絵筆を使う」という職業と道具の関係。同様に「料理人は包丁を使う」。'
  },
  {
    id: 'nigo-019', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '睡眠不足 － 集中力低下',
    choices: ['猛勉強 － 合格', '温和 － 穏やか', '文房具 － 鉛筆', '積極 － 消極', '料理人 － 包丁'],
    answerIndex: 0,
    explanation: '「睡眠不足が集中力低下を引き起こす」という原因と結果の関係。同様に「猛勉強が合格を引き起こす」。'
  },
  {
    id: 'nigo-020', category: 'nigo',
    instruction: '最初に示した対の関係を考え、同じ関係の組み合わせを選びなさい。',
    promptHTML: '積極 － 消極',
    choices: ['濃厚 － 淡白', '明白 － 明瞭', '猛勉強 － 合格', '楽器 － ピアノ', 'ガラス － 砂'],
    answerIndex: 0,
    explanation: '「積極」と「消極」は反対の意味を持つ対義語。同様に「濃厚」と「淡白」も対義語。'
  },

  // ===================== 語句の意味 (imiyoho) =====================
  {
    id: 'imi-001', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '杜撰（ずさん）',
    choices: ['いい加減で誤りが多いこと', '几帳面で細部まで行き届いていること', '非常に素早く行動すること', '慎重に時間をかけて行うこと', '華やかで人目を引くこと'],
    answerIndex: 0,
    explanation: '「杜撰」は物事の仕方がいい加減で誤りが多いことを指す。'
  },
  {
    id: 'imi-002', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '未曾有（みぞう）',
    choices: ['これまでに一度も起こったことがないこと', '非常にありふれていること', '将来必ず起こると予測されること', '繰り返し何度も起こること', 'すでに解決済みであること'],
    answerIndex: 0,
    explanation: '「未曾有」は今まで一度も起こったことがない、極めて稀なことを意味する。'
  },
  {
    id: 'imi-003', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '忖度（そんたく）',
    choices: ['他人の心情や意図を推し量ること', '相手に直接意見を尋ねること', '規則に厳格に従うこと', '自分の考えを強く主張すること', '物事を客観的に分析すること'],
    answerIndex: 0,
    explanation: '「忖度」は他人の気持ちや考えを推し量ることを意味する。'
  },
  {
    id: 'imi-004', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '逡巡（しゅんじゅん）',
    choices: ['決心がつかずぐずぐずとためらうこと', '迷わず即座に決断すること', '後悔して深く反省すること', '怒りを抑えきれないこと', '喜びを隠しきれないこと'],
    answerIndex: 0,
    explanation: '「逡巡」は決断できずにためらい、ぐずぐずすることを意味する。'
  },
  {
    id: 'imi-005', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '憂慮（ゆうりょ）',
    choices: ['悪い事態を心配し思い悩むこと', '物事を楽観的に捉えること', '過去の出来事を懐かしむこと', '将来の計画を綿密に立てること', '他人の失敗を責めること'],
    answerIndex: 0,
    explanation: '「憂慮」は悪い結果になるのではと心配し、思い悩むことを意味する。'
  },
  {
    id: 'imi-006', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '顕著（けんちょ）',
    choices: ['特徴などがきわだって目につくさま', 'ほとんど目立たないさま', '徐々に変化していくさま', '一時的で長続きしないさま', '複雑で理解しにくいさま'],
    answerIndex: 0,
    explanation: '「顕著」ははっきりと目立って現れているさまを意味する。'
  },
  {
    id: 'imi-007', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '蓋然性（がいぜんせい）',
    choices: ['ある事柄が実際に起こると考えられる確実さの度合い', '物事の善悪を判断する基準', '議論の際に用いられる根拠の数', '結果がすでに確定していること', '過去の統計データそのもの'],
    answerIndex: 0,
    explanation: '「蓋然性」はある事が実際に起こる確実さの度合い、すなわち確率的な見込みを意味する。'
  },
  {
    id: 'imi-008', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '呵責（かしゃく）',
    choices: ['自らの過ちを厳しく責めさいなむこと', '他人の功績を称賛すること', '規則に基づいて罰を与えること', '失敗を許し寛大に扱うこと', '原因を冷静に分析すること'],
    answerIndex: 0,
    explanation: '「呵責」は自分の過ちを厳しく責めること。「良心の呵責」の形でよく使われる。'
  },
  {
    id: 'imi-009', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '迂遠（うえん）',
    choices: ['遠回りで実際の役に立たないこと', '目的に向かって最短で進むこと', '非常に緻密で正確なこと', '親しみやすく打ち解けていること', '複数の意味を含んでいること'],
    answerIndex: 0,
    explanation: '「迂遠」は遠回りで手間がかかり、実際の役に立たないさまを意味する。'
  },
  {
    id: 'imi-010', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '頓着（とんちゃく）',
    choices: ['ある物事を気にかけてこだわること', '全く興味を示さないこと', '物事を深く追求すること', '即座に判断を下すこと', '感情を表に出さないこと'],
    answerIndex: 0,
    explanation: '「頓着」は物事を気にかけ、こだわること。「無頓着」（気にしない）と混同しないよう注意。'
  },
  {
    id: 'imi-011', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '忽然（こつぜん）',
    choices: ['突然に、あっという間に', 'ゆっくりと時間をかけて', '繰り返し何度も', '予定通りに整然と', '密かに気づかれないように'],
    answerIndex: 0,
    explanation: '「忽然」は物事が突然、あっという間に現れたり消えたりするさまを意味する。'
  },
  {
    id: 'imi-012', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '慟哭（どうこく）',
    choices: ['声をあげて激しく泣き悲しむこと', '静かに涙を流すこと', '怒りのあまり叫ぶこと', '喜びのあまり笑うこと', '深く考え込むこと'],
    answerIndex: 0,
    explanation: '「慟哭」は声をあげて激しく泣き悲しむことを意味する。'
  },
  {
    id: 'imi-013', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '邁進（まいしん）',
    choices: ['目標に向かってひたすら突き進むこと', '立ち止まって慎重に考えること', '目標を見失い迷うこと', '他人に指示を仰ぐこと', '過去を振り返り反省すること'],
    answerIndex: 0,
    explanation: '「邁進」は目標に向かって力強く突き進むことを意味する。'
  },
  {
    id: 'imi-014', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '払拭（ふっしょく）',
    choices: ['好ましくないものをすっかり取り除くこと', '少しずつ改善していくこと', '新たに作り出すこと', '一時的に隠すこと', '繰り返し確認すること'],
    answerIndex: 0,
    explanation: '「払拭」は不安や疑いなど好ましくないものをすっかり取り除くことを意味する。'
  },
  {
    id: 'imi-015', category: 'imiyoho',
    instruction: '次の語句の意味として最も適切なものを選びなさい。',
    promptHTML: '忌憚（きたん）',
    choices: ['遠慮すること', '感情を込めること', '根拠を示すこと', '簡潔にまとめること', '礼儀正しく述べること'],
    answerIndex: 0,
    explanation: '「忌憚」は遠慮すること。「忌憚のない意見」で「遠慮のない率直な意見」の意味になる。'
  },

  // ===================== 語句の用法 (imiyoho) =====================
  {
    id: 'yoho-001', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '彼は大勢の前で話すとき、いつも緊張して<u>あがって</u>しまう。',
    choices: [
      '面接の順番が近づくにつれ、彼女は次第に<u>あがって</u>きた。',
      '二階の部屋に<u>あがって</u>荷物を片付けた。',
      '雨が<u>あがった</u>ので、洗濯物を干した。',
      '練習の成果があって、タイムが大きく<u>あがった</u>。',
      '揚げ物がこんがりと<u>あがった</u>。'
    ],
    answerIndex: 0,
    explanation: '例文の「あがる」は緊張するという意味。選択肢の中で同じ「緊張する」の意味なのは①のみ。'
  },
  {
    id: 'yoho-002', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: 'この薬は風邪によく<u>きく</u>。',
    choices: [
      '医師の指示をよく<u>きいて</u>療養する。',
      'この洗剤は油汚れによく<u>きく</u>。',
      '駅までの道を通行人に<u>きいた</u>。',
      '好きな音楽を<u>きいて</u>リラックスする。',
      '親の言うことを<u>きかない</u>子供。'
    ],
    answerIndex: 1,
    explanation: '例文の「きく」は「効く（効果がある）」の意味。同じ意味なのは②のみ。'
  },
  {
    id: 'yoho-003', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '彼は自分の失敗の責任を<u>とって</u>辞職した。',
    choices: [
      '会議の内容をノートに<u>とる</u>。',
      '栄養をバランスよく<u>とる</u>。',
      '部下のミスの責任を上司が<u>とった</u>。',
      '記念写真を<u>とる</u>。',
      '十分な睡眠を<u>とる</u>。'
    ],
    answerIndex: 2,
    explanation: '例文の「とる」は「責任を負う」の意味。同じ意味なのは③のみ。'
  },
  {
    id: 'yoho-004', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: 'この仕事を終えるには三時間<u>かかる</u>。',
    choices: [
      '橋の建設に五年<u>かかった</u>。',
      '祖父が肺炎に<u>かかって</u>入院した。',
      '壁に立派な絵が<u>かかって</u>いる。',
      '迷惑を<u>かけない</u>よう気をつける。',
      '電話が<u>かかって</u>きた。'
    ],
    answerIndex: 0,
    explanation: '例文の「かかる」は「（時間を）要する」の意味。同じ意味なのは①のみ。'
  },
  {
    id: 'yoho-005', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '卒業して十年の月日が<u>たった</u>。',
    choices: [
      '新しい校舎が来年には<u>たつ</u>予定だ。',
      '引退してから五年が<u>たった</u>。',
      '彼は演壇に<u>たって</u>挨拶をした。',
      '悪い噂が<u>たつ</u>のは早い。',
      '厳しい岐路に<u>たたされる</u>。'
    ],
    answerIndex: 1,
    explanation: '例文の「たつ」は「（時間が）経過する」の意味。同じ意味なのは②のみ。'
  },
  {
    id: 'yoho-006', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '専門医が症状を<u>みて</u>診断を下した。',
    choices: [
      '面白そうな映画を<u>みる</u>。',
      '味を<u>みて</u>から味付けを調整する。',
      '子供の面倒を<u>みる</u>。',
      '医者が入院患者の容体を<u>みる</u>。',
      '将来を<u>みて</u>計画を立てる。'
    ],
    answerIndex: 3,
    explanation: '例文の「みる」は「診察する」の意味。同じ意味なのは④のみ。'
  },
  {
    id: 'yoho-007', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '彼女は疲れたのでソファに深く腰を<u>かけて</u>休憩した。',
    choices: [
      '壁に時計を<u>かける</u>。',
      '電話を友人に<u>かける</u>。',
      '公園のベンチに腰を<u>かけて</u>一休みした。',
      '周囲に迷惑を<u>かける</u>。',
      '玄関の鍵を<u>かけて</u>外出する。'
    ],
    answerIndex: 2,
    explanation: '例文の「かける」は「座る」の意味。同じ意味なのは③のみ。'
  },
  {
    id: 'yoho-008', category: 'imiyoho',
    instruction: '下線部の語句と最も近い意味・用法で使われているものを選びなさい。',
    promptHTML: '長年の努力が実って、彼女はついに一流のピアニストに<u>なった</u>。',
    choices: [
      '台所からいい匂いがしてくるように<u>なった</u>。',
      '天候が悪く<u>なった</u>ので、大会は中止に<u>なった</u>。',
      '苦労の末、彼は一人前の職人に<u>なった</u>。',
      '古い柱時計の鐘が<u>なる</u>。',
      '来月の予定が急遽変更に<u>なった</u>。'
    ],
    answerIndex: 2,
    explanation: '例文の「なる」は「（努力の結果）ある地位・状態に到達する」の意味。同じ意味なのは③のみ。'
  },

  // ===================== 空欄補充 (bunpo) =====================
  {
    id: 'kuuran-001', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '今日は朝から雨が降っていた。（　　）、運動会は中止になった。',
    choices: ['そのため', 'しかし', 'たとえば', 'むしろ', 'あるいは'],
    answerIndex: 0,
    explanation: '前の文が原因、後の文が結果になっているので、順接の「そのため」が適切。'
  },
  {
    id: 'kuuran-002', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '彼は優秀な成績を収めた。（　　）、日々の努力を怠らなかったからだ。',
    choices: ['それは', 'なぜなら', 'つまり', 'しかし', 'または'],
    answerIndex: 1,
    explanation: '後の文で前の文の理由を述べているので、「なぜなら」が適切。'
  },
  {
    id: 'kuuran-003', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: 'この製品は高機能だ。（　　）、価格が高い。',
    choices: ['しかし', 'そのため', 'なぜなら', 'つまり', 'したがって'],
    answerIndex: 0,
    explanation: '「高機能」と「価格が高い」は対比・逆接の関係なので、「しかし」が適切。'
  },
  {
    id: 'kuuran-004', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '台風が接近している。（　　）、明日のイベントは延期になるだろう。',
    choices: ['そのため', 'しかし', 'たとえば', 'むしろ', 'ちなみに'],
    answerIndex: 0,
    explanation: '台風接近が原因で延期という結果につながるので、「そのため」が適切。'
  },
  {
    id: 'kuuran-005', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '彼女は英語だけでなくフランス語も話せる。（　　）、中国語も少し理解できる。',
    choices: ['さらに', 'しかし', 'なぜなら', 'つまり', 'ところが'],
    answerIndex: 0,
    explanation: '前の内容に情報を付け加えているので、添加を表す「さらに」が適切。'
  },
  {
    id: 'kuuran-006', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '資料を確認したところ、数字に誤りがあった。（　　）、再度計算をやり直した。',
    choices: ['そこで', 'しかし', 'たとえば', 'むしろ', 'あるいは'],
    answerIndex: 0,
    explanation: '誤りの発見を受けて取った行動を述べているので、「そこで」が適切。'
  },
  {
    id: 'kuuran-007', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '会議は長引いた。（　　）、結論は出なかった。',
    choices: ['しかし', 'そのため', 'なぜなら', 'つまり', 'したがって'],
    answerIndex: 0,
    explanation: '長引いたにもかかわらず結論が出なかったという逆接の関係なので、「しかし」が適切。'
  },
  {
    id: 'kuuran-008', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '彼は毎日欠かさず練習した。（　　）、大会で優勝することができた。',
    choices: ['その結果', 'しかし', 'ところが', 'むしろ', 'たとえば'],
    answerIndex: 0,
    explanation: '練習の成果として優勝という結果が生まれたので、「その結果」が適切。'
  },
  {
    id: 'kuuran-009', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: 'このレポートは誤字が多い。（　　）、内容自体は優れている。',
    choices: ['しかし', 'そのため', 'なぜなら', 'したがって', 'さらに'],
    answerIndex: 0,
    explanation: '欠点を述べたあとに長所を対比させているので、逆接の「しかし」が適切。'
  },
  {
    id: 'kuuran-010', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '締め切りが迫っている。（　　）急いで作業を進めよう。',
    choices: ['だから', 'しかし', 'たとえば', 'つまり', 'ところが'],
    answerIndex: 0,
    explanation: '締め切りが迫っていることを理由に行動を促しているので、「だから」が適切。'
  },
  {
    id: 'kuuran-011', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '彼の説明は分かりやすかった。（　　）、専門用語が多く難しく感じる人もいた。',
    choices: ['ただし', 'そのため', 'なぜなら', 'したがって', 'さらに'],
    answerIndex: 0,
    explanation: '前の内容に例外・補足を付け加えているので、「ただし」が適切。'
  },
  {
    id: 'kuuran-012', category: 'bunpo',
    instruction: '文中の空欄に入れるのに最も適切な語句を選びなさい。',
    promptHTML: '売り上げが伸び悩んでいる。（　　）、新商品の開発を急ぐ必要がある。',
    choices: ['したがって', 'しかし', 'たとえば', 'ところが', 'ちなみに'],
    answerIndex: 0,
    explanation: '前の状況を受けて結論・対策を述べているので、「したがって」が適切。'
  },

  // ===================== 文の並び替え (bunpo) =====================
  {
    id: 'narabi-001', category: 'bunpo',
    instruction: '次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：朝早く起きて　　イ：健康的な生活を送るために　　ウ：軽い運動をすることにした　　エ：私は　　オ：毎日',
    choices: ['イ→エ→オ→ア→ウ', 'エ→イ→ア→オ→ウ', 'イ→オ→エ→ウ→ア', 'ア→ウ→イ→エ→オ', 'エ→オ→イ→ア→ウ'],
    answerIndex: 0,
    explanation: '正しい文は「健康的な生活を送るために、私は毎日、朝早く起きて、軽い運動をすることにした。」となる。'
  },
  {
    id: 'narabi-002', category: 'bunpo',
    instruction: '次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：新しいプロジェクトを　　イ：私たちのチームは　　ウ：来月から　　エ：開始することになった　　オ：会議で決定した',
    choices: ['イ→オ→ア→ウ→エ', 'イ→ア→オ→ウ→エ', 'オ→イ→ア→エ→ウ', 'イ→ウ→ア→オ→エ', 'ア→オ→イ→ウ→エ'],
    answerIndex: 0,
    explanation: '正しい文は「私たちのチームは、会議で決定した新しいプロジェクトを、来月から開始することになった。」となる。'
  },
  {
    id: 'narabi-003', category: 'bunpo',
    instruction: '次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：誰にでも　　イ：平等に　　ウ：与えられている　　エ：時間だけは　　オ：一日二十四時間という',
    choices: ['オ→エ→ア→イ→ウ', 'エ→オ→ア→イ→ウ', 'オ→ア→エ→イ→ウ', 'ア→イ→オ→エ→ウ', 'オ→エ→イ→ア→ウ'],
    answerIndex: 0,
    explanation: '正しい文は「一日二十四時間という時間だけは、誰にでも平等に与えられている。」となる。'
  },
  {
    id: 'narabi-004', category: 'bunpo',
    instruction: '次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：一度立てた目標を　　イ：成功の秘訣は　　ウ：最後までやり遂げる　　エ：ことにある　　オ：途中で投げ出さず',
    choices: ['イ→ア→オ→ウ→エ', 'イ→オ→ア→ウ→エ', 'ア→イ→オ→ウ→エ', 'イ→ア→ウ→オ→エ', 'オ→ア→イ→ウ→エ'],
    answerIndex: 0,
    explanation: '正しい文は「成功の秘訣は、一度立てた目標を途中で投げ出さず、最後までやり遂げることにある。」となる。'
  },
  {
    id: 'narabi-005', category: 'bunpo',
    instruction: '次のア～エを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：大きな成果を　　イ：地道な努力の積み重ねが　　ウ：いずれ　　エ：生み出すことになる',
    choices: ['イ→ウ→ア→エ', 'イ→ア→ウ→エ', 'ウ→イ→ア→エ', 'イ→ウ→エ→ア', 'ア→イ→ウ→エ'],
    answerIndex: 0,
    explanation: '正しい文は「地道な努力の積み重ねが、いずれ、大きな成果を生み出すことになる。」となる。'
  },
  {
    id: 'narabi-006', category: 'bunpo',
    instruction: '次のア～エを意味が通るように並び替えたとき、正しい順序を選びなさい。',
    promptHTML: 'ア：相手の立場に立って　　イ：良好な人間関係を築く上で　　ウ：最も大切なことは　　エ：物事を考えることだ',
    choices: ['イ→ウ→ア→エ', 'ウ→イ→ア→エ', 'イ→ア→ウ→エ', 'ア→イ→ウ→エ', 'ウ→ア→イ→エ'],
    answerIndex: 0,
    explanation: '正しい文は「良好な人間関係を築く上で最も大切なことは、相手の立場に立って物事を考えることだ。」となる。'
  },

  // ===================== インポート問題（過去問整理データ） =====================
  {
    id: "imp-imi-goi_imi-1", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "並外れて程度を超えること",
    choices: ["希代", "莫大", "絶大", "奇抜", "法外"],
    answerIndex: 4,
    explanation: "「並外れて程度を超えること」の意味を表す語句は「法外」。"
  },
  {
    id: "imp-imi-goi_imi-2", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "しかたがないと思って受けること",
    choices: ["たえる", "あまんずる", "へりくだる", "もてあます", "ひらきなおる"],
    answerIndex: 1,
    explanation: "「しかたがないと思って受けること」の意味を表す語句は「あまんずる」。"
  },
  {
    id: "imp-imi-goi_imi-3", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事が進行しておもしろくなったところ",
    choices: ["頂点", "佳境", "要所", "醍醐味", "正念場"],
    answerIndex: 1,
    explanation: "「物事が進行しておもしろくなったところ」の意味を表す語句は「佳境」。"
  },
  {
    id: "imp-imi-goi_imi-4", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "問題とされながらまだ解決がつかない事柄",
    choices: ["保留", "懸案", "未決", "難問", "棚上げ"],
    answerIndex: 1,
    explanation: "「問題とされながらまだ解決がつかない事柄」の意味を表す語句は「懸案」。"
  },
  {
    id: "imp-imi-goi_imi-5", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "詭弁",
    choices: ["おどし", "こじつけ", "いいわけ", "まけおしみ", "いいのがれ"],
    answerIndex: 1,
    explanation: "「詭弁」の意味を表す語句は「こじつけ」。"
  },
  {
    id: "imp-imi-goi_imi-6", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心をいためなやますこと",
    choices: ["腐心", "疑心", "逆心", "虚心", "執心"],
    answerIndex: 0,
    explanation: "「心をいためなやますこと」の意味を表す語句は「腐心」。"
  },
  {
    id: "imp-imi-goi_imi-7", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "個人の判断で処理すること",
    choices: ["専横", "私見", "裁量", "独断", "英断"],
    answerIndex: 2,
    explanation: "「個人の判断で処理すること」の意味を表す語句は「裁量」。（「個人の判断で処理する」は裁量。独断は「自分ひとりで決めること」で\"処理\"を含まない。⑧No.527・530の定義とも一致する）"
  },
  {
    id: "imp-imi-goi_imi-8", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ためらわずに思い切ってするさま",
    choices: ["果断", "愚直", "短慮", "無謀", "勇敢"],
    answerIndex: 0,
    explanation: "「ためらわずに思い切ってするさま」の意味を表す語句は「果断」。"
  },
  {
    id: "imp-imi-goi_imi-9", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "おしはかること、思いやること",
    choices: ["推考", "類推", "推論", "推察", "推定"],
    answerIndex: 3,
    explanation: "「おしはかること、思いやること」の意味を表す語句は「推察」。"
  },
  {
    id: "imp-imi-goi_imi-10", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "巧みでないこと",
    choices: ["つたない", "ぎこちない", "たわいない", "ふがいない", "おぼつかない"],
    answerIndex: 0,
    explanation: "「巧みでないこと」の意味を表す語句は「つたない」。"
  },
  {
    id: "imp-imi-goi_imi-11", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ねらいを定めること",
    choices: ["目星", "目標", "標的", "見当", "照準"],
    answerIndex: 4,
    explanation: "「ねらいを定めること」の意味を表す語句は「照準」。"
  },
  {
    id: "imp-imi-goi_imi-12", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他の意見に反対して論じ返すこと",
    choices: ["口論", "反発", "反駁", "論争", "論破"],
    answerIndex: 2,
    explanation: "「他の意見に反対して論じ返すこと」の意味を表す語句は「反駁」。"
  },
  {
    id: "imp-imi-goi_imi-13", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "境遇に満足しているさまを言動に表すこと",
    choices: ["至福", "闊達", "満喫", "謳歌", "有頂天"],
    answerIndex: 3,
    explanation: "「境遇に満足しているさまを言動に表すこと」の意味を表す語句は「謳歌」。"
  },
  {
    id: "imp-imi-goi_imi-14", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そのことだけにかかわって他をおろそかにする",
    choices: ["ひたる", "かまける", "いそしむ", "かかりきる", "なおざりにする"],
    answerIndex: 1,
    explanation: "「そのことだけにかかわって他をおろそかにする」の意味を表す語句は「かまける」。"
  },
  {
    id: "imp-imi-goi_imi-15", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の権利を傷つけ、社会秩序を乱す",
    choices: ["威圧する", "愚弄する", "蹂躙する", "席巻する", "籠絡する"],
    answerIndex: 2,
    explanation: "「他人の権利を傷つけ、社会秩序を乱す」の意味を表す語句は「蹂躙する」。"
  },
  {
    id: "imp-imi-goi_imi-16", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "何もせずぶらぶらしていること",
    choices: ["安穏", "怠惰", "無精", "無為", "悠長"],
    answerIndex: 3,
    explanation: "「何もせずぶらぶらしていること」の意味を表す語句は「無為」。"
  },
  {
    id: "imp-imi-goi_imi-17", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "立派に見せようとしてうわべを飾ること",
    choices: ["装飾", "粉飾", "彩飾", "見栄", "上塗り"],
    answerIndex: 1,
    explanation: "「立派に見せようとしてうわべを飾ること」の意味を表す語句は「粉飾」。"
  },
  {
    id: "imp-imi-goi_imi-18", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "一時しのぎにとりつくろっておくこと",
    choices: ["虚勢", "見栄", "糊塗", "虚飾", "上塗り"],
    answerIndex: 2,
    explanation: "「一時しのぎにとりつくろっておくこと」の意味を表す語句は「糊塗」。"
  },
  {
    id: "imp-imi-goi_imi-19", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "好ましくないとして拒み退けること",
    choices: ["意気", "邪険", "敬遠", "疎外", "排斥"],
    answerIndex: 4,
    explanation: "「好ましくないとして拒み退けること」の意味を表す語句は「排斥」。"
  },
  {
    id: "imp-imi-goi_imi-20", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自由勝手にはねまわること",
    choices: ["飛翔", "跳躍", "躍動", "跳梁", "躍如"],
    answerIndex: 3,
    explanation: "「自由勝手にはねまわること」の意味を表す語句は「跳梁」。"
  },
  {
    id: "imp-imi-goi_imi-21", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人を威嚇するような態度",
    choices: ["横柄", "尊大", "居丈高", "鉄仮面", "威風堂々"],
    answerIndex: 2,
    explanation: "「他人を威嚇するような態度」の意味を表す語句は「居丈高」。"
  },
  {
    id: "imp-imi-goi_imi-22", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "きわだって他より優れていること",
    choices: ["隔絶", "出色", "優越", "破格", "筆頭"],
    answerIndex: 1,
    explanation: "「きわだって他より優れていること」の意味を表す語句は「出色」。"
  },
  {
    id: "imp-imi-goi_imi-23", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の信ずるところを遠慮せずにいうこと",
    choices: ["直言", "進言", "忠言", "放言", "断言"],
    answerIndex: 0,
    explanation: "「自分の信ずるところを遠慮せずにいうこと」の意味を表す語句は「直言」。"
  },
  {
    id: "imp-imi-goi_imi-24", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "以前からの願い",
    choices: ["切願", "宿願", "懇願", "悲願", "念願"],
    answerIndex: 1,
    explanation: "「以前からの願い」の意味を表す語句は「宿願」。"
  },
  {
    id: "imp-imi-goi_imi-25", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "衰えたり栄えたりすること",
    choices: ["消長", "進退", "断続", "変遷", "流転"],
    answerIndex: 0,
    explanation: "「衰えたり栄えたりすること」の意味を表す語句は「消長」。"
  },
  {
    id: "imp-imi-goi_imi-26", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "卑近",
    choices: ["身近な", "卑しい", "低俗な", "低級な", "当今の"],
    answerIndex: 0,
    explanation: "「卑近」の意味を表す語句は「身近な」。"
  },
  {
    id: "imp-imi-goi_imi-27", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "何もしないで傍観している",
    choices: ["腰をすえる", "口をぬぐう", "目をつぶる", "足をとめる", "手をこまねく"],
    answerIndex: 4,
    explanation: "「何もしないで傍観している」の意味を表す語句は「手をこまねく」。"
  },
  {
    id: "imp-imi-goi_imi-28", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心がきたなく、いやしい",
    choices: ["がめつい", "さもしい", "あくどい", "はしたない", "意地きたない"],
    answerIndex: 1,
    explanation: "「心がきたなく、いやしい」の意味を表す語句は「さもしい」。"
  },
  {
    id: "imp-imi-goi_imi-29", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "直接は言葉に表さないところ",
    choices: ["本心", "無言", "他意", "余念", "言外"],
    answerIndex: 4,
    explanation: "「直接は言葉に表さないところ」の意味を表す語句は「言外」。"
  },
  {
    id: "imp-imi-goi_imi-30", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "やり方などを受け継ぎ、したがうこと",
    choices: ["因習", "慣例", "伝承", "踏襲", "伝統"],
    answerIndex: 3,
    explanation: "「やり方などを受け継ぎ、したがうこと」の意味を表す語句は「踏襲」。"
  },
  {
    id: "imp-imi-goi_imi-31", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ものごとの詳しい事情",
    choices: ["子細", "明細", "精細", "細部", "細事"],
    answerIndex: 0,
    explanation: "「ものごとの詳しい事情」の意味を表す語句は「子細」。"
  },
  {
    id: "imp-imi-goi_imi-32", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物がゆらゆらゆれる",
    choices: ["なびく", "ぶれる", "ふるえる", "たゆたう", "はためく"],
    answerIndex: 3,
    explanation: "「物がゆらゆらゆれる」の意味を表す語句は「たゆたう」。"
  },
  {
    id: "imp-imi-goi_imi-33", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "経験を積んで人柄などが円熟すること",
    choices: ["老練", "晩成", "成熟", "老成", "大成"],
    answerIndex: 3,
    explanation: "「経験を積んで人柄などが円熟すること」の意味を表す語句は「老成」。"
  },
  {
    id: "imp-imi-goi_imi-34", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "不行き届きでけしからぬこと",
    choices: ["不倫", "不義", "不埒", "不実", "不徳"],
    answerIndex: 2,
    explanation: "「不行き届きでけしからぬこと」の意味を表す語句は「不埒」。"
  },
  {
    id: "imp-imi-goi_imi-35", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "当を得たことば",
    choices: ["金言", "巧言", "至言", "格言", "名言"],
    answerIndex: 2,
    explanation: "「当を得たことば」の意味を表す語句は「至言」。"
  },
  {
    id: "imp-imi-goi_imi-36", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "言葉を加えたり言いかえたりして分かりやすく説明すること",
    choices: ["啓発", "喧伝", "示唆", "指南", "敷衍"],
    answerIndex: 4,
    explanation: "「言葉を加えたり言いかえたりして分かりやすく説明すること」の意味を表す語句は「敷衍」。"
  },
  {
    id: "imp-imi-goi_imi-37", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "二つの事柄がぴったりと一致すること",
    choices: ["符合", "合同", "適合", "合一", "照合"],
    answerIndex: 0,
    explanation: "「二つの事柄がぴったりと一致すること」の意味を表す語句は「符合」。（一致の意味は「符合」。選択肢Aの「符号」は誤字（No.186では正しく「符合」になっている））"
  },
  {
    id: "imp-imi-goi_imi-38", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "どうにもならないことを残念がる",
    choices: ["気に病む", "ほぞをかむ", "胸を痛める", "腕をこまねく", "こうべをたれる"],
    answerIndex: 1,
    explanation: "「どうにもならないことを残念がる」の意味を表す語句は「ほぞをかむ」。"
  },
  {
    id: "imp-imi-goi_imi-39", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "行動を起こすようあおること",
    choices: ["示唆", "扇動", "煽情", "誘導", "唆す"],
    answerIndex: 1,
    explanation: "「行動を起こすようあおること」の意味を表す語句は「扇動」。"
  },
  {
    id: "imp-imi-goi_imi-40", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "目上の人の過失などを直接忠告すること",
    choices: ["進言", "苦言", "直言", "諫言", "直訴"],
    answerIndex: 3,
    explanation: "「目上の人の過失などを直接忠告すること」の意味を表す語句は「諫言」。"
  },
  {
    id: "imp-imi-goi_imi-41", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "悲しみのあまり声をあげて激しく泣くこと",
    choices: ["慟哭", "号泣", "嗚咽", "悲嘆", "哀哭"],
    answerIndex: 0,
    explanation: "「悲しみのあまり声をあげて激しく泣くこと」の意味を表す語句は「慟哭」。"
  },
  {
    id: "imp-imi-goi_imi-42", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事を正しく判断する見識",
    choices: ["見解", "識見", "慧眼", "卓見", "洞察"],
    answerIndex: 1,
    explanation: "「物事を正しく判断する見識」の意味を表す語句は「識見」。"
  },
  {
    id: "imp-imi-goi_imi-43", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "すみずみまで詳しく知っていること",
    choices: ["察知", "知見", "知遇", "通暁", "周知"],
    answerIndex: 3,
    explanation: "「すみずみまで詳しく知っていること」の意味を表す語句は「通暁」。"
  },
  {
    id: "imp-imi-goi_imi-44", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あわてずゆっくりと事を始めるさま",
    choices: ["ようやく", "おいおいに", "おっとりと", "おもむろに", "じっくりと"],
    answerIndex: 3,
    explanation: "「あわてずゆっくりと事を始めるさま」の意味を表す語句は「おもむろに」。"
  },
  {
    id: "imp-imi-goi_imi-45", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "なりふりかまわず懸命に事にあたっている様子",
    choices: ["けなげ", "ひたむき", "やみくも", "おおわらわ", "てんてこまい"],
    answerIndex: 3,
    explanation: "「なりふりかまわず懸命に事にあたっている様子」の意味を表す語句は「おおわらわ」。"
  },
  {
    id: "imp-imi-goi_imi-46", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あいまいなところがなく細かく気を配って丹念なこと",
    choices: ["克明", "周到", "精巧", "繊細", "緻密"],
    answerIndex: 0,
    explanation: "「あいまいなところがなく細かく気を配って丹念なこと」の意味を表す語句は「克明」。"
  },
  {
    id: "imp-imi-goi_imi-47", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "建造物ができあがること",
    choices: ["建立", "造営", "築造", "普請", "落成"],
    answerIndex: 4,
    explanation: "「建造物ができあがること」の意味を表す語句は「落成」。"
  },
  {
    id: "imp-imi-goi_imi-48", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "成果が期待される意気盛んな門出",
    choices: ["出馬", "出藍", "前途", "壮途", "発揚"],
    answerIndex: 3,
    explanation: "「成果が期待される意気盛んな門出」の意味を表す語句は「壮途」。"
  },
  {
    id: "imp-imi-goi_imi-49", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思わず笑うこと",
    choices: ["苦笑", "哄笑", "一笑", "失笑", "嘲笑"],
    answerIndex: 3,
    explanation: "「思わず笑うこと」の意味を表す語句は「失笑」。（「思わず笑う」は失笑。苦笑は苦々しく思いながら笑うこと。No.260の同一問題はDになっている）"
  },
  {
    id: "imp-imi-goi_imi-50", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そのことだけにかかわって、他をおろそかにする",
    choices: ["ひたる", "かまける", "いそしむ", "かかりきる", "なおざりにする"],
    answerIndex: 1,
    explanation: "「そのことだけにかかわって、他をおろそかにする」の意味を表す語句は「かまける」。"
  },
  {
    id: "imp-imi-goi_imi-51", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の権利を傷つけたり、社会秩序を乱したりする",
    choices: ["威圧する", "愚弄する", "蹂躙する", "席巻する", "籠絡する"],
    answerIndex: 2,
    explanation: "「他人の権利を傷つけたり、社会秩序を乱したりする」の意味を表す語句は「蹂躙する」。"
  },
  {
    id: "imp-imi-goi_imi-52", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あいまいなところがないように細かく気を配って丹念なこと",
    choices: ["克明", "周到", "精巧", "繊細", "緻密"],
    answerIndex: 0,
    explanation: "「あいまいなところがないように細かく気を配って丹念なこと」の意味を表す語句は「克明」。"
  },
  {
    id: "imp-imi-goi_imi-53", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人を威圧するような態度",
    choices: ["横柄", "尊大", "居丈高", "鉄面皮", "威風堂々"],
    answerIndex: 2,
    explanation: "「人を威圧するような態度」の意味を表す語句は「居丈高」。"
  },
  {
    id: "imp-imi-goi_imi-54", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "殊勝な心がけの持ち主だ",
    choices: ["健気な", "可憐な", "優雅な", "利口な", "堅実な", "率直な"],
    answerIndex: 0,
    explanation: "「殊勝な心がけの持ち主だ」の意味を表す語句は「健気な」。"
  },
  {
    id: "imp-imi-goi_imi-55", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "わがままで好き勝手に振る舞うこと",
    choices: ["厚顔", "傲慢", "専横", "独断", "不遜"],
    answerIndex: 2,
    explanation: "「わがままで好き勝手に振る舞うこと」の意味を表す語句は「専横」。"
  },
  {
    id: "imp-imi-goi_imi-56", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "細かく丹念な記録",
    choices: ["克明な", "周到な", "精密な", "繊細な", "肝要な", "丁重な"],
    answerIndex: 0,
    explanation: "「細かく丹念な記録」の意味を表す語句は「克明な」。"
  },
  {
    id: "imp-imi-goi_imi-57", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あいまいな所がないように細かく気を配って丹念なこと",
    choices: ["克明", "周到", "精巧", "繊細", "緻密"],
    answerIndex: 0,
    explanation: "「あいまいな所がないように細かく気を配って丹念なこと」の意味を表す語句は「克明」。"
  },
  {
    id: "imp-imi-goi_imi-58", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事の急所",
    choices: ["意表", "意外", "図星", "核心", "主眼"],
    answerIndex: 2,
    explanation: "「物事の急所」の意味を表す語句は「図星」。"
  },
  {
    id: "imp-imi-goi_imi-59", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あげつらう",
    choices: ["からかう", "おおげさに言う", "あからさまに言う", "いいかげんなことを言う", "ささいなことを言い立てる"],
    answerIndex: 4,
    explanation: "「あげつらう」の意味を表す語句は「ささいなことを言い立てる」。"
  },
  {
    id: "imp-imi-goi_imi-60", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "厳しく区別すること",
    choices: ["鑑別", "差別", "識別", "峻別", "判別", "分別"],
    answerIndex: 3,
    explanation: "「厳しく区別すること」の意味を表す語句は「峻別」。"
  },
  {
    id: "imp-imi-goi_imi-61", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "欠点や失敗を大げさに言う",
    choices: ["揚げ足を取る", "囃し立てる", "非難する", "あげつらう", "おちょくる"],
    answerIndex: 3,
    explanation: "「欠点や失敗を大げさに言う」の意味を表す語句は「あげつらう」。"
  },
  {
    id: "imp-imi-goi_imi-62", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "質の悪い環境",
    choices: ["粗悪な", "劣悪な", "邪悪な", "醜悪な", "極悪な", "凶悪な"],
    answerIndex: 1,
    explanation: "「質の悪い環境」の意味を表す語句は「劣悪な」。（「質の悪い環境」は劣悪。粗悪は品物の質を指す。No.308の同一問題はBで、こちらと矛盾している）"
  },
  {
    id: "imp-imi-goi_imi-63", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人のことを非難して悪く言う",
    choices: ["そしる", "やじる", "あざける", "ののしる", "おとしめる"],
    answerIndex: 0,
    explanation: "「人のことを非難して悪く言う」の意味を表す語句は「そしる」。"
  },
  {
    id: "imp-imi-goi_imi-64", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "窮地から脱する方法",
    choices: ["妙案", "窮余", "奇策", "端緒", "活路"],
    answerIndex: 4,
    explanation: "「窮地から脱する方法」の意味を表す語句は「活路」。"
  },
  {
    id: "imp-imi-goi_imi-65", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事の詳しい事情",
    choices: ["詳密", "詳細", "些細", "微細", "子細"],
    answerIndex: 4,
    explanation: "「物事の詳しい事情」の意味を表す語句は「子細」。"
  },
  {
    id: "imp-imi-goi_imi-66", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "働かないでただ遊び暮らすこと",
    choices: ["徒食", "怠慢", "遊興", "道楽", "放蕩"],
    answerIndex: 0,
    explanation: "「働かないでただ遊び暮らすこと」の意味を表す語句は「徒食」。"
  },
  {
    id: "imp-imi-goi_imi-67", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "感心してほめたたえる",
    choices: ["詠嘆する", "感服する", "感嘆する", "感激する", "感謝する"],
    answerIndex: 2,
    explanation: "「感心してほめたたえる」の意味を表す語句は「感嘆する」。"
  },
  {
    id: "imp-imi-goi_imi-68", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の欲望や衝動に打ち勝つこと",
    choices: ["堅忍", "克己", "自重", "自粛", "克服"],
    answerIndex: 1,
    explanation: "「自分の欲望や衝動に打ち勝つこと」の意味を表す語句は「克己」。"
  },
  {
    id: "imp-imi-goi_imi-69", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "両者の間に入ってとりもつこと",
    choices: ["干渉", "調停", "後見", "斡旋", "介入"],
    answerIndex: 3,
    explanation: "「両者の間に入ってとりもつこと」の意味を表す語句は「斡旋」。"
  },
  {
    id: "imp-imi-goi_imi-70", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "きわめて短い時間",
    choices: ["刹那", "光陰", "突発", "発作", "一刻"],
    answerIndex: 0,
    explanation: "「きわめて短い時間」の意味を表す語句は「刹那」。"
  },
  {
    id: "imp-imi-goi_imi-71", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そうするより仕方ない事情",
    choices: ["忌憚ない", "如才ない", "抜き差しならない", "滅相もない", "拠ん所ない"],
    answerIndex: 4,
    explanation: "「そうするより仕方ない事情」の意味を表す語句は「拠ん所ない」。"
  },
  {
    id: "imp-imi-goi_imi-72", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "仲が悪くにらみ合うこと",
    choices: ["敵視", "敵対", "反抗", "反目", "背反", "離反"],
    answerIndex: 3,
    explanation: "「仲が悪くにらみ合うこと」の意味を表す語句は「反目」。"
  },
  {
    id: "imp-imi-goi_imi-73", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "指示しはげますこと",
    choices: ["励行", "激励", "応援", "援護", "督励"],
    answerIndex: 4,
    explanation: "「指示しはげますこと」の意味を表す語句は「督励」。"
  },
  {
    id: "imp-imi-goi_imi-74", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "もめごと",
    choices: ["確執", "齟齬", "反発", "反目", "不和", "悶着"],
    answerIndex: 5,
    explanation: "「もめごと」の意味を表す語句は「悶着」。"
  },
  {
    id: "imp-imi-goi_imi-75", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "取り立てて言うに及ばないほどわずかであること",
    choices: ["些少", "通暁", "検証", "斟酌"],
    answerIndex: 0,
    explanation: "「取り立てて言うに及ばないほどわずかであること」の意味を表す語句は「些少」。"
  },
  {
    id: "imp-imi-goi_imi-76", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "災いの起こるもと",
    choices: ["禍根", "斟酌", "冗漫", "語弊"],
    answerIndex: 0,
    explanation: "「災いの起こるもと」の意味を表す語句は「禍根」。"
  },
  {
    id: "imp-imi-goi_imi-77", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "立場やよりどころを定める事",
    choices: ["立脚", "禍根", "逆ねじ", "刮目"],
    answerIndex: 0,
    explanation: "「立場やよりどころを定める事」の意味を表す語句は「立脚」。"
  },
  {
    id: "imp-imi-goi_imi-78", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある集団を率いる指導者",
    choices: ["領袖", "胸算用", "謳歌", "生業"],
    answerIndex: 0,
    explanation: "「ある集団を率いる指導者」の意味を表す語句は「領袖」。"
  },
  {
    id: "imp-imi-goi_imi-79", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "公の職に就くこと",
    choices: ["出仕", "厚顔", "扇動", "敢然"],
    answerIndex: 0,
    explanation: "「公の職に就くこと」の意味を表す語句は「出仕」。"
  },
  {
    id: "imp-imi-goi_imi-80", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "事情を汲み取って手加減すること",
    choices: ["酌量", "裁量", "失墜", "威嚇"],
    answerIndex: 0,
    explanation: "「事情を汲み取って手加減すること」の意味を表す語句は「酌量」。"
  },
  {
    id: "imp-imi-goi_imi-81", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の意見や決意などを打ち明ける事",
    choices: ["披瀝", "不覚の", "宿願", "相殺"],
    answerIndex: 0,
    explanation: "「自分の意見や決意などを打ち明ける事」の意味を表す語句は「披瀝」。"
  },
  {
    id: "imp-imi-goi_imi-82", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "束縛や制限がなく、思うようにして良いこと",
    choices: ["随意", "恣意", "他意", "懇意"],
    answerIndex: 0,
    explanation: "「束縛や制限がなく、思うようにして良いこと」の意味を表す語句は「随意」。"
  },
  {
    id: "imp-imi-goi_imi-83", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "考えが浅はかなさま",
    choices: ["浅慮", "居丈高", "厚顔", "目溢し"],
    answerIndex: 0,
    explanation: "「考えが浅はかなさま」の意味を表す語句は「浅慮」。"
  },
  {
    id: "imp-imi-goi_imi-84", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "度を越したぜいたくな暮らしをすること",
    choices: ["奢侈", "排斥", "在野", "照準"],
    answerIndex: 0,
    explanation: "「度を越したぜいたくな暮らしをすること」の意味を表す語句は「奢侈」。"
  },
  {
    id: "imp-imi-goi_imi-85", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事を正しく判断する能力",
    choices: ["見識", "威嚇", "失笑", "些少"],
    answerIndex: 0,
    explanation: "「物事を正しく判断する能力」の意味を表す語句は「見識」。"
  },
  {
    id: "imp-imi-goi_imi-86", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の不幸がひとごとでは無く思われる",
    choices: ["身につまされる", "たき付ける", "かまける", "銘じる"],
    answerIndex: 0,
    explanation: "「他人の不幸がひとごとでは無く思われる」の意味を表す語句は「身につまされる」。"
  },
  {
    id: "imp-imi-goi_imi-87", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "十分に考えないで急いで判断すること",
    choices: ["早計", "大筋", "斡旋", "恭順"],
    answerIndex: 0,
    explanation: "「十分に考えないで急いで判断すること」の意味を表す語句は「早計」。"
  },
  {
    id: "imp-imi-goi_imi-88", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の能力を信じて抱く誇り",
    choices: ["矜持", "概容", "驚嘆", "杜撰"],
    answerIndex: 0,
    explanation: "「自分の能力を信じて抱く誇り」の意味を表す語句は「矜持」。"
  },
  {
    id: "imp-imi-goi_imi-89", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "すぐ役立つように所定部位に詰め込むこと",
    choices: ["装填", "我執", "現実", "横着"],
    answerIndex: 0,
    explanation: "「すぐ役立つように所定部位に詰め込むこと」の意味を表す語句は「装填」。"
  },
  {
    id: "imp-imi-goi_imi-90", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ずうずうしいこと",
    choices: ["厚顔", "早速", "峻別", "心服"],
    answerIndex: 0,
    explanation: "「ずうずうしいこと」の意味を表す語句は「厚顔」。"
  },
  {
    id: "imp-imi-goi_imi-91", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物の実質的な価値が下がること",
    choices: ["目減り", "無為", "天賦", "漸次"],
    answerIndex: 0,
    explanation: "「物の実質的な価値が下がること」の意味を表す語句は「目減り」。"
  },
  {
    id: "imp-imi-goi_imi-92", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "全く問題にしないこと",
    choices: ["度外視", "識見", "踏襲", "輪廻"],
    answerIndex: 0,
    explanation: "「全く問題にしないこと」の意味を表す語句は「度外視」。"
  },
  {
    id: "imp-imi-goi_imi-93", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人に知られないように策動すること",
    choices: ["暗躍", "見識", "追従", "慟哭"],
    answerIndex: 0,
    explanation: "「人に知られないように策動すること」の意味を表す語句は「暗躍」。"
  },
  {
    id: "imp-imi-goi_imi-94", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "上位の人や機関に計画を詳しく述べること",
    choices: ["具申", "流言", "勧告", "不埒"],
    answerIndex: 0,
    explanation: "「上位の人や機関に計画を詳しく述べること」の意味を表す語句は「具申」。"
  },
  {
    id: "imp-imi-goi_imi-95", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある学問・技術について広く深い知識と理解を持っていること",
    choices: ["造詣", "不覚の", "招聘", "稟議"],
    answerIndex: 0,
    explanation: "「ある学問・技術について広く深い知識と理解を持っていること」の意味を表す語句は「造詣」。"
  },
  {
    id: "imp-imi-goi_imi-96", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "広く一般の人々が見る事",
    choices: ["博覧", "裁量", "呵責", "周到"],
    answerIndex: 0,
    explanation: "「広く一般の人々が見る事」の意味を表す語句は「博覧」。"
  },
  {
    id: "imp-imi-goi_imi-97", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事を上手く処置する",
    choices: ["対処", "刹那", "進取", "勧告"],
    answerIndex: 0,
    explanation: "「物事を上手く処置する」の意味を表す語句は「対処」。"
  },
  {
    id: "imp-imi-goi_imi-98", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある物事を行うのに役立つ",
    choices: ["資する", "蹂躙する", "いぶかる", "看破する"],
    answerIndex: 0,
    explanation: "「ある物事を行うのに役立つ」の意味を表す語句は「資する」。"
  },
  {
    id: "imp-imi-goi_imi-99", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心から感服し、尊敬の念を持って服従する",
    choices: ["心服", "遮蔽", "通暁", "在野"],
    answerIndex: 0,
    explanation: "「心から感服し、尊敬の念を持って服従する」の意味を表す語句は「心服」。"
  },
  {
    id: "imp-imi-goi_imi-100", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の権限だけでは決定できないことについて、承認を得る事",
    choices: ["稟議", "詮議", "潤沢", "胸算用"],
    answerIndex: 0,
    explanation: "「自分の権限だけでは決定できないことについて、承認を得る事」の意味を表す語句は「稟議」。"
  },
  {
    id: "imp-imi-goi_imi-101", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心の中に隠している、別の考えや企み",
    choices: ["他意", "懇意", "恣意", "随意"],
    answerIndex: 0,
    explanation: "「心の中に隠している、別の考えや企み」の意味を表す語句は「他意」。"
  },
  {
    id: "imp-imi-goi_imi-102", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "文章の下書き",
    choices: ["草案", "懸案", "排斥", "概容"],
    answerIndex: 0,
    explanation: "「文章の下書き」の意味を表す語句は「草案」。"
  },
  {
    id: "imp-imi-goi_imi-103", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心の中の量り（斟酌）",
    choices: ["斟酌", "暗躍", "酌量", "隠匿"],
    answerIndex: 0,
    explanation: "「心の中の量り（斟酌）」の意味を表す語句は「斟酌」。"
  },
  {
    id: "imp-imi-goi_imi-104", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "しかたがないと思って受ける",
    choices: ["たえる", "あまんずる", "へりくだる", "もてあます", "ひらきなおる"],
    answerIndex: 1,
    explanation: "「しかたがないと思って受ける」の意味を表す語句は「あまんずる」。"
  },
  {
    id: "imp-imi-goi_imi-105", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物語の大きな流れ",
    choices: ["大枠", "大綱", "概要", "大筋"],
    answerIndex: 3,
    explanation: "「物語の大きな流れ」の意味を表す語句は「大筋」。"
  },
  {
    id: "imp-imi-goi_imi-107", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "頭が良く賢いこと",
    choices: ["博識", "有能", "利発", "非凡"],
    answerIndex: 2,
    explanation: "「頭が良く賢いこと」の意味を表す語句は「利発」。"
  },
  {
    id: "imp-imi-goi_imi-108", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そのことだけにかかわって他をおろそかにすること",
    choices: ["ひたる", "かまける", "いそしむ", "かかりきる", "なおざりにする"],
    answerIndex: 1,
    explanation: "「そのことだけにかかわって他をおろそかにすること」の意味を表す語句は「かまける」。"
  },
  {
    id: "imp-imi-goi_imi-109", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の権利を傷つけ社会秩序を乱すること",
    choices: ["威圧する", "愚弄する", "蹂躙する", "席巻する", "籠絡する"],
    answerIndex: 2,
    explanation: "「他人の権利を傷つけ社会秩序を乱すること」の意味を表す語句は「蹂躙する」。"
  },
  {
    id: "imp-imi-goi_imi-110", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物がゆらゆらゆれること",
    choices: ["なびく", "ぶれる", "ふるえる", "たゆたう", "はためく"],
    answerIndex: 3,
    explanation: "「物がゆらゆらゆれること」の意味を表す語句は「たゆたう」。"
  },
  {
    id: "imp-imi-goi_imi-111", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "何もしないで傍観していること",
    choices: ["腰をすえる", "口をぬぐう", "目をつぶる", "足をとめる", "手をこまねく"],
    answerIndex: 4,
    explanation: "「何もしないで傍観していること」の意味を表す語句は「手をこまねく」。"
  },
  {
    id: "imp-imi-goi_imi-112", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "やり方などを受け継ぎしたがうこと",
    choices: ["因習", "慣例", "伝承", "踏襲", "伝統"],
    answerIndex: 3,
    explanation: "「やり方などを受け継ぎしたがうこと」の意味を表す語句は「踏襲」。"
  },
  {
    id: "imp-imi-goi_imi-113", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "どうにもならないことを残念がること",
    choices: ["気に病む", "ほぞをかむ", "胸を痛める", "腕をこまねく", "こうべをたれる"],
    answerIndex: 1,
    explanation: "「どうにもならないことを残念がること」の意味を表す語句は「ほぞをかむ」。"
  },
  {
    id: "imp-imi-goi_imi-114", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心がきたなくいやしいこと",
    choices: ["がめつい", "さもしい", "あくどい", "はしたない", "意地きたない"],
    answerIndex: 1,
    explanation: "「心がきたなくいやしいこと」の意味を表す語句は「さもしい」。"
  },
  {
    id: "imp-imi-goi_imi-115", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "言葉を加えたり言いかえて分かりやすく説明すること",
    choices: ["啓発", "喧伝", "示唆", "指南", "敷衍"],
    answerIndex: 4,
    explanation: "「言葉を加えたり言いかえて分かりやすく説明すること」の意味を表す語句は「敷衍」。"
  },
  {
    id: "imp-imi-goi_imi-116", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "殊勝な心がけの持ち主であること",
    choices: ["健気な", "可憐な", "優雅な", "利口な", "堅実な"],
    answerIndex: 0,
    explanation: "「殊勝な心がけの持ち主であること」の意味を表す語句は「健気な」。"
  },
  {
    id: "imp-imi-goi_imi-117", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の主張・批判に対し論じ返すこと",
    choices: ["反撃", "反骨", "反問", "反駁", "反証"],
    answerIndex: 3,
    explanation: "「他人の主張・批判に対し論じ返すこと」の意味を表す語句は「反駁」。"
  },
  {
    id: "imp-imi-goi_imi-118", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "一度決心したことを変えること",
    choices: ["恣意", "転向", "豹変", "変心", "翻意"],
    answerIndex: 4,
    explanation: "「一度決心したことを変えること」の意味を表す語句は「翻意」。"
  },
  {
    id: "imp-imi-goi_imi-119", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある学問・技術について広く深い知識と理解をもっていること",
    choices: ["英知", "奥義", "造詣", "含蓄", "高尚"],
    answerIndex: 2,
    explanation: "「ある学問・技術について広く深い知識と理解をもっていること」の意味を表す語句は「造詣」。"
  },
  {
    id: "imp-imi-goi_imi-120", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の決意・意見などをうちあけること",
    choices: ["披露", "白状", "披瀝", "独白", "公言"],
    answerIndex: 2,
    explanation: "「自分の決意・意見などをうちあけること」の意味を表す語句は「披瀝」。"
  },
  {
    id: "imp-imi-goi_imi-121", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ものごとの扱い方がぞんざいなこと",
    choices: ["横着", "粗略", "疎漏", "無謀", "乱暴"],
    answerIndex: 1,
    explanation: "「ものごとの扱い方がぞんざいなこと」の意味を表す語句は「粗略」。"
  },
  {
    id: "imp-imi-goi_imi-123", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "隠すのをさえぎること",
    choices: ["盲蔽", "隠蔽", "遮蔽", "穿蔽", "分断"],
    answerIndex: 2,
    explanation: "「隠すのをさえぎること」の意味を表す語句は「遮蔽」。"
  },
  {
    id: "imp-imi-goi_imi-124", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "神妙に（素面でおとなしい様子、謹んでいる様子）",
    choices: ["楽しく", "律儀に", "味わい深く", "かしこまって", "一風変わって"],
    answerIndex: 3,
    explanation: "「神妙に（素面でおとなしい様子、謹んでいる様子）」の意味を表す語句は「かしこまって」。"
  },
  {
    id: "imp-imi-goi_imi-125", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "節や手続きが多くていい加減なこと",
    choices: ["迂遠", "杜撰", "粗末", "益体", "乱雑"],
    answerIndex: 1,
    explanation: "「節や手続きが多くていい加減なこと」の意味を表す語句は「杜撰」。"
  },
  {
    id: "imp-imi-goi_imi-126", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "手当たり次第、本を読むこと",
    choices: ["多読", "通読", "括読", "読了", "濫読"],
    answerIndex: 4,
    explanation: "「手当たり次第、本を読むこと」の意味を表す語句は「濫読」。"
  },
  {
    id: "imp-imi-goi_imi-128", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "昔の時代を慕わしく思うこと",
    choices: ["追憶", "旧弊", "懐古", "復古", "望郷"],
    answerIndex: 2,
    explanation: "「昔の時代を慕わしく思うこと」の意味を表す語句は「懐古」。"
  },
  {
    id: "imp-imi-goi_imi-129", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "事態が迫っているのに、急ごうとしない様子",
    choices: ["怠惰", "緩慢", "泰然", "沈着", "悠長"],
    answerIndex: 4,
    explanation: "「事態が迫っているのに、急ごうとしない様子」の意味を表す語句は「悠長」。"
  },
  {
    id: "imp-imi-goi_imi-130", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "差し障りがあることを感じて遠慮する",
    choices: ["はばかる", "ゆだねる", "あまんずる", "かしこまる", "へりくだる"],
    answerIndex: 0,
    explanation: "「差し障りがあることを感じて遠慮する」の意味を表す語句は「はばかる」。"
  },
  {
    id: "imp-imi-goi_imi-131", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "わざわいの起こるもと",
    choices: ["禍根", "凶兆", "災厄", "難儀", "不吉"],
    answerIndex: 0,
    explanation: "「わざわいの起こるもと」の意味を表す語句は「禍根」。"
  },
  {
    id: "imp-imi-goi_imi-132", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "社会事業や慈善活動を積極的に援助する人",
    choices: ["資産家", "人格者", "篤志家", "奉仕者", "名望家"],
    answerIndex: 2,
    explanation: "「社会事業や慈善活動を積極的に援助する人」の意味を表す語句は「篤志家」。"
  },
  {
    id: "imp-imi-goi_imi-133", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "頭がよく賢いこと",
    choices: ["機敏", "多才", "博識", "非凡", "有能", "利発"],
    answerIndex: 5,
    explanation: "「頭がよく賢いこと」の意味を表す語句は「利発」。"
  },
  {
    id: "imp-imi-goi_imi-134", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "慌てふためくこと",
    choices: ["驚愕", "困惑", "焦燥", "動揺", "狼狽"],
    answerIndex: 4,
    explanation: "「慌てふためくこと」の意味を表す語句は「狼狽」。"
  },
  {
    id: "imp-imi-goi_imi-135", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "その物事に疎い人",
    choices: ["外野", "素人", "部外者", "門外漢", "野次馬"],
    answerIndex: 3,
    explanation: "「その物事に疎い人」の意味を表す語句は「門外漢」。"
  },
  {
    id: "imp-imi-goi_imi-136", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "うつつ",
    choices: ["夢", "退屈", "現実", "狂気", "時間"],
    answerIndex: 2,
    explanation: "「うつつ」の意味を表す語句は「現実」。"
  },
  {
    id: "imp-imi-goi_imi-137", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ものごとの扱い方がぞんざいなこと（p26と同問）",
    choices: ["横着", "粗略", "疎漏", "無謀", "乱暴"],
    answerIndex: 1,
    explanation: "「ものごとの扱い方がぞんざいなこと（p26と同問）」の意味を表す語句は「粗略」。"
  },
  {
    id: "imp-imi-goi_imi-138", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "束縛や制限がなく、思うようにしてよいこと",
    choices: ["我意", "故意", "随意", "本意", "有意"],
    answerIndex: 2,
    explanation: "「束縛や制限がなく、思うようにしてよいこと」の意味を表す語句は「随意」。"
  },
  {
    id: "imp-imi-goi_imi-139", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "正しい在り方に反する",
    choices: ["たがう", "もとる", "あらがう", "たてつく", "はずれる"],
    answerIndex: 1,
    explanation: "「正しい在り方に反する」の意味を表す語句は「もとる」。"
  },
  {
    id: "imp-imi-goi_imi-140", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "意気が盛んで、思想や行動が急進的なこと",
    choices: ["革新", "過激", "尖鋭", "打破", "邁進"],
    answerIndex: 2,
    explanation: "「意気が盛んで、思想や行動が急進的なこと」の意味を表す語句は「尖鋭」。"
  },
  {
    id: "imp-imi-goi_imi-141", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "前途や将来に望みをかけること",
    choices: ["渇望", "宿望", "嘱望", "待望", "有望"],
    answerIndex: 2,
    explanation: "「前途や将来に望みをかけること」の意味を表す語句は「嘱望」。"
  },
  {
    id: "imp-imi-goi_imi-142", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "遠慮の要らない親しい間柄であること",
    choices: ["交友", "懇意", "親睦", "親身", "友好"],
    answerIndex: 1,
    explanation: "「遠慮の要らない親しい間柄であること」の意味を表す語句は「懇意」。"
  },
  {
    id: "imp-imi-goi_imi-143", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "その気になるようにそそのかす（p102と同問）",
    choices: ["いざなう", "おだてる", "かき立てる", "たき付ける", "持ち掛ける"],
    answerIndex: 3,
    explanation: "「その気になるようにそそのかす（p102と同問）」の意味を表す語句は「たき付ける」。"
  },
  {
    id: "imp-imi-goi_imi-144", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "へりくだる気持ちがないこと",
    choices: ["遷勢", "顕示", "自負", "増長", "不遜", "傲心"],
    answerIndex: 4,
    explanation: "「へりくだる気持ちがないこと」の意味を表す語句は「不遜」。"
  },
  {
    id: "imp-imi-goi_imi-146", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人より前に物事の道理や理路を悟った人",
    choices: ["開拓者", "革命児", "先覚者", "創始者", "第一人者"],
    answerIndex: 2,
    explanation: "「人より前に物事の道理や理路を悟った人」の意味を表す語句は「先覚者」。"
  },
  {
    id: "imp-imi-goi_imi-148", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "立場やよりどころを定めること",
    choices: ["依拠", "依存", "典拠", "立脚", "立地"],
    answerIndex: 3,
    explanation: "「立場やよりどころを定めること」の意味を表す語句は「立脚」。"
  },
  {
    id: "imp-imi-goi_imi-149", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "世俗的な物事にこだわらないさま",
    choices: ["蕭然", "整然", "泰然", "超然", "冷然"],
    answerIndex: 3,
    explanation: "「世俗的な物事にこだわらないさま」の意味を表す語句は「超然」。"
  },
  {
    id: "imp-imi-goi_imi-150", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心のもち方がしっかりしていること",
    choices: ["頑健", "気丈", "強靭", "意思堅固", "骨太"],
    answerIndex: 1,
    explanation: "「心のもち方がしっかりしていること」の意味を表す語句は「気丈」。"
  },
  {
    id: "imp-imi-goi_imi-151", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "おごそかで重々しく感動的なさま",
    choices: ["荘壮", "重厚", "粛然", "神聖", "荘厳"],
    answerIndex: 4,
    explanation: "「おごそかで重々しく感動的なさま」の意味を表す語句は「荘厳」。"
  },
  {
    id: "imp-imi-goi_imi-152", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "欠点、悪習などを正しい状態になおすこと",
    choices: ["修繕", "修正", "矯正", "整形", "鍛錬"],
    answerIndex: 2,
    explanation: "「欠点、悪習などを正しい状態になおすこと」の意味を表す語句は「矯正」。"
  },
  {
    id: "imp-imi-goi_imi-153", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ことばがつかえるような下手なしゃべり方",
    choices: ["真言", "能弁", "絶句", "訥弁", "弄舌"],
    answerIndex: 3,
    explanation: "「ことばがつかえるような下手なしゃべり方」の意味を表す語句は「訥弁」。"
  },
  {
    id: "imp-imi-goi_imi-154", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある状態に固定して進展しないこと",
    choices: ["膠着", "停滞", "凍結", "頑強", "保留"],
    answerIndex: 0,
    explanation: "「ある状態に固定して進展しないこと」の意味を表す語句は「膠着」。"
  },
  {
    id: "imp-imi-goi_imi-155", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "生活をしていくための仕事",
    choices: ["渡世", "筆書き", "食いぶち", "生業", "やりくり"],
    answerIndex: 3,
    explanation: "「生活をしていくための仕事」の意味を表す語句は「生業」。"
  },
  {
    id: "imp-imi-goi_imi-156", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "必要な事柄を十分に備えていること",
    choices: ["具備", "常備", "整備", "装備", "配備"],
    answerIndex: 0,
    explanation: "「必要な事柄を十分に備えていること」の意味を表す語句は「具備」。"
  },
  {
    id: "imp-imi-goi_imi-157", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "準備ができたところでゆっくりと動き始めるさま",
    choices: ["やおら", "おずおず", "おっつけ", "おっとり", "そそくさ", "ひょうひょう"],
    answerIndex: 0,
    explanation: "「準備ができたところでゆっくりと動き始めるさま」の意味を表す語句は「やおら」。"
  },
  {
    id: "imp-imi-goi_imi-158", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "その場に応じた機転を働かせること",
    choices: ["即座", "即断", "即妙", "即興", "即効"],
    answerIndex: 2,
    explanation: "「その場に応じた機転を働かせること」の意味を表す語句は「即妙」。"
  },
  {
    id: "imp-imi-goi_imi-159", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "気取りがなく、さっぱりとして洗練されているさま",
    choices: ["新奇", "洒脱", "淡泊", "風雅", "佳美"],
    answerIndex: 1,
    explanation: "「気取りがなく、さっぱりとして洗練されているさま」の意味を表す語句は「洒脱」。"
  },
  {
    id: "imp-imi-goi_imi-160", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "複雑に入り組むこと",
    choices: ["混乱", "乱立", "散乱", "錯綜", "雑把"],
    answerIndex: 3,
    explanation: "「複雑に入り組むこと」の意味を表す語句は「錯綜」。"
  },
  {
    id: "imp-imi-goi_imi-161", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "祝福、祝賀の言葉を述べる",
    choices: ["あげつらう", "かしずく", "ことほぐ", "たまわる", "もうしあげる"],
    answerIndex: 2,
    explanation: "「祝福、祝賀の言葉を述べる」の意味を表す語句は「ことほぐ」。"
  },
  {
    id: "imp-imi-goi_imi-162", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "聞くつもりはないのに聞こえてしまったこと",
    choices: ["耳にタコができる", "小耳に挟む", "耳が早い", "耳につく", "耳を揃える"],
    answerIndex: 1,
    explanation: "「聞くつもりはないのに聞こえてしまったこと」の意味を表す語句は「小耳に挟む」。"
  },
  {
    id: "imp-imi-goi_imi-163", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "大目に見ること",
    choices: ["ひいき", "目溢し", "甘やかし", "大雑把", "知らん顔"],
    answerIndex: 1,
    explanation: "「大目に見ること」の意味を表す語句は「目溢し」。"
  },
  {
    id: "imp-imi-goi_imi-164", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "道理に合わないことをいかにももっともらしくこじつける弁論",
    choices: ["多弁", "詭弁", "強弁", "能弁", "自弁"],
    answerIndex: 1,
    explanation: "「道理に合わないことをいかにももっともらしくこじつける弁論」の意味を表す語句は「詭弁」。"
  },
  {
    id: "imp-imi-goi_imi-165", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "関心が向くようにそれとなく誘う",
    choices: ["水を差す", "水を向ける", "打診する", "手を回す"],
    answerIndex: 1,
    explanation: "「関心が向くようにそれとなく誘う」の意味を表す語句は「水を向ける」。"
  },
  {
    id: "imp-imi-goi_imi-166", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "衰えることと盛んになること",
    choices: ["隆盛", "消長", "復活", "回復", "復興"],
    answerIndex: 1,
    explanation: "「衰えることと盛んになること」の意味を表す語句は「消長」。"
  },
  {
    id: "imp-imi-goi_imi-167", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "動作がゆっくりしている様",
    choices: ["弛緩", "緩慢", "散漫", "遅滞", "遷延"],
    answerIndex: 1,
    explanation: "「動作がゆっくりしている様」の意味を表す語句は「緩慢」。"
  },
  {
    id: "imp-imi-goi_imi-168", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "悲しみで声を上げて激しく泣くこと",
    choices: ["咆哮", "喚呼", "悲鳴", "絶叫", "慟哭"],
    answerIndex: 4,
    explanation: "「悲しみで声を上げて激しく泣くこと」の意味を表す語句は「慟哭」。"
  },
  {
    id: "imp-imi-goi_imi-169", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "意見を交わして物事を明らかにすること",
    choices: ["協議", "会議", "審議", "詮議", "稟議"],
    answerIndex: 3,
    explanation: "「意見を交わして物事を明らかにすること」の意味を表す語句は「詮議」。"
  },
  {
    id: "imp-imi-goi_imi-170", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある物事を行うのに役に立つ",
    choices: ["与る", "供する", "充てる", "支える", "資する"],
    answerIndex: 4,
    explanation: "「ある物事を行うのに役に立つ」の意味を表す語句は「資する」。"
  },
  {
    id: "imp-imi-goi_imi-171", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "体がひよわなこと",
    choices: ["軟弱", "薄弱", "脆弱", "虚弱", "衰弱"],
    answerIndex: 3,
    explanation: "「体がひよわなこと」の意味を表す語句は「虚弱」。"
  },
  {
    id: "imp-imi-goi_imi-173", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "荷物などを運び送ること",
    choices: ["宅配", "郵送", "移動", "搬送", "輸出"],
    answerIndex: 3,
    explanation: "「荷物などを運び送ること」の意味を表す語句は「搬送」。"
  },
  {
    id: "imp-imi-goi_imi-174", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "働きかける目標",
    choices: ["対象", "役割", "到達", "標的", "範囲"],
    answerIndex: 0,
    explanation: "「働きかける目標」の意味を表す語句は「対象」。"
  },
  {
    id: "imp-imi-goi_imi-175", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "仕事に取り掛かること",
    choices: ["業務", "企業", "労働", "就労", "勤務"],
    answerIndex: 3,
    explanation: "「仕事に取り掛かること」の意味を表す語句は「就労」。"
  },
  {
    id: "imp-imi-goi_imi-176", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "根拠のない風説",
    choices: ["論評", "風聞", "流言", "風評", "伝聞"],
    answerIndex: 2,
    explanation: "「根拠のない風説」の意味を表す語句は「流言」。"
  },
  {
    id: "imp-imi-goi_imi-177", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "すっかり迷って、どうしてよいかわからないこと",
    choices: ["無我夢中", "雲散霧消", "五里霧中", "無念無想", "曖昧模糊"],
    answerIndex: 2,
    explanation: "「すっかり迷って、どうしてよいかわからないこと」の意味を表す語句は「五里霧中」。"
  },
  {
    id: "imp-imi-goi_imi-178", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "細かなところまではっきりしているさま",
    choices: ["明らか", "細やか", "際やか", "あざやか", "つまびらか"],
    answerIndex: 4,
    explanation: "「細かなところまではっきりしているさま」の意味を表す語句は「つまびらか」。"
  },
  {
    id: "imp-imi-goi_imi-179", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "包み隠さないさま",
    choices: ["暴露", "露呈", "あけすけ", "あか抜け", "つつ抜け"],
    answerIndex: 2,
    explanation: "「包み隠さないさま」の意味を表す語句は「あけすけ」。"
  },
  {
    id: "imp-imi-goi_imi-180", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある物事が起こる確実性の度合い",
    choices: ["目算", "概算", "試算", "打算", "公算"],
    answerIndex: 4,
    explanation: "「ある物事が起こる確実性の度合い」の意味を表す語句は「公算」。"
  },
  {
    id: "imp-imi-goi_imi-181", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "気にしてこだわること",
    choices: ["拘泥", "拘束", "熟慮", "悔悟", "耽溺"],
    answerIndex: 0,
    explanation: "「気にしてこだわること」の意味を表す語句は「拘泥」。"
  },
  {
    id: "imp-imi-goi_imi-182", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "むごたらしく、いたましい様",
    choices: ["醜悪", "醜態", "辛酸", "酸鼻", "劣後"],
    answerIndex: 3,
    explanation: "「むごたらしく、いたましい様」の意味を表す語句は「酸鼻」。"
  },
  {
    id: "imp-imi-goi_imi-183", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "少しずつ、段々と変化する様子",
    choices: ["漸次", "随時", "暫時", "刹那", "恒久"],
    answerIndex: 0,
    explanation: "「少しずつ、段々と変化する様子」の意味を表す語句は「漸次」。"
  },
  {
    id: "imp-imi-goi_imi-184", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分に有利なように取り計らうこと",
    choices: ["我田引水", "泰然自若", "傍若無人", "一意専心", "一挙両得"],
    answerIndex: 0,
    explanation: "「自分に有利なように取り計らうこと」の意味を表す語句は「我田引水」。"
  },
  {
    id: "imp-imi-goi_imi-185", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "時間を置かないで行うさま",
    choices: ["早速", "順次", "瞬時", "早早", "逐次"],
    answerIndex: 0,
    explanation: "「時間を置かないで行うさま」の意味を表す語句は「早速」。"
  },
  {
    id: "imp-imi-goi_imi-186", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "よく合致すること",
    choices: ["符号", "照合", "等号", "符合", "合同"],
    answerIndex: 3,
    explanation: "「よく合致すること」の意味を表す語句は「符合」。"
  },
  {
    id: "imp-imi-goi_imi-187", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あるものをしきりに欲しがること",
    choices: ["嘱望", "宿願", "待望", "垂涎", "貪欲"],
    answerIndex: 3,
    explanation: "「あるものをしきりに欲しがること」の意味を表す語句は「垂涎」。"
  },
  {
    id: "imp-imi-goi_imi-188", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思いついたまま",
    choices: ["恣意", "自由", "発想", "機転", "空想"],
    answerIndex: 0,
    explanation: "「思いついたまま」の意味を表す語句は「恣意」。"
  },
  {
    id: "imp-imi-goi_imi-189", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "規律や統制のない群集",
    choices: ["塞翁が馬", "我田引水", "烏合の衆", "大器晩成", "背水の陣"],
    answerIndex: 2,
    explanation: "「規律や統制のない群集」の意味を表す語句は「烏合の衆」。"
  },
  {
    id: "imp-imi-goi_imi-190", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "扱いがぞんざいなこと",
    choices: ["粗悪", "粗漏", "粗製", "粗野", "粗略"],
    answerIndex: 4,
    explanation: "「扱いがぞんざいなこと」の意味を表す語句は「粗略」。"
  },
  {
    id: "imp-imi-goi_imi-191", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そうなることが避けられないこと",
    choices: ["必須", "必中", "必至", "逼迫", "必死"],
    answerIndex: 2,
    explanation: "「そうなることが避けられないこと」の意味を表す語句は「必至」。"
  },
  {
    id: "imp-imi-goi_imi-192", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "外の権勢に頼って自分も偉いかのように振る舞うこと",
    choices: ["鬼に金棒", "猫を被る", "虎の威を借る狐", "とらぬ狸の皮算用", "虎を描きて狗に類す"],
    answerIndex: 2,
    explanation: "「外の権勢に頼って自分も偉いかのように振る舞うこと」の意味を表す語句は「虎の威を借る狐」。"
  },
  {
    id: "imp-imi-goi_imi-193", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "処置などが手ぬるいこと",
    choices: ["緩慢", "愚鈍", "遅延", "加減", "大概"],
    answerIndex: 0,
    explanation: "「処置などが手ぬるいこと」の意味を表す語句は「緩慢」。"
  },
  {
    id: "imp-imi-goi_imi-194", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "機械や道具などを使って品物を作ること",
    choices: ["製作", "創作", "工作", "製造", "活動"],
    answerIndex: 0,
    explanation: "「機械や道具などを使って品物を作ること」の意味を表す語句は「製作」。"
  },
  {
    id: "imp-imi-goi_imi-195", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "生死を繰り返すこと",
    choices: ["再来", "輪廻", "再興", "蘇生", "転生"],
    answerIndex: 1,
    explanation: "「生死を繰り返すこと」の意味を表す語句は「輪廻」。"
  },
  {
    id: "imp-imi-goi_imi-196", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "必ずしも",
    choices: ["あまつさえ", "あながち", "いみじくも", "さしずめ", "はなはだ"],
    answerIndex: 1,
    explanation: "「必ずしも」の意味を表す語句は「あながち」。"
  },
  {
    id: "imp-imi-goi_imi-197", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "暇つぶしの無駄話",
    choices: ["閑散", "閑談", "市井", "吹聴", "懇談"],
    answerIndex: 1,
    explanation: "「暇つぶしの無駄話」の意味を表す語句は「閑談」。"
  },
  {
    id: "imp-imi-goi_imi-198", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "照れくさく気恥ずかしく感じる",
    choices: ["はがゆい", "おもはゆい", "もどかしい", "うしろめたい", "ふがいない"],
    answerIndex: 1,
    explanation: "「照れくさく気恥ずかしく感じる」の意味を表す語句は「おもはゆい」。"
  },
  {
    id: "imp-imi-goi_imi-199", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "いい加減で誤りが多いこと",
    choices: ["不備", "乱雑", "杜撰", "散漫", "粗雑"],
    answerIndex: 2,
    explanation: "「いい加減で誤りが多いこと」の意味を表す語句は「杜撰」。"
  },
  {
    id: "imp-imi-goi_imi-200", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "度々で嫌になること",
    choices: ["飽食", "食傷", "蚕食", "過食", "徒食"],
    answerIndex: 1,
    explanation: "「度々で嫌になること」の意味を表す語句は「食傷」。"
  },
  {
    id: "imp-imi-goi_imi-201", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "すべきことをわざと怠けてしないこと",
    choices: ["横柄", "横着", "不精", "慢心", "杜撰"],
    answerIndex: 1,
    explanation: "「すべきことをわざと怠けてしないこと」の意味を表す語句は「横着」。"
  },
  {
    id: "imp-imi-goi_imi-202", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "好ましくないものを避ける",
    choices: ["排他", "排反", "排斥", "控除", "隔離"],
    answerIndex: 2,
    explanation: "「好ましくないものを避ける」の意味を表す語句は「排斥」。"
  },
  {
    id: "imp-imi-goi_imi-203", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある物事に心が深くとらわれて離れないこと",
    choices: ["夢中", "執着", "健気", "愛着", "固着"],
    answerIndex: 1,
    explanation: "「ある物事に心が深くとらわれて離れないこと」の意味を表す語句は「執着」。"
  },
  {
    id: "imp-imi-goi_imi-204", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "生まれつき備わっている資質",
    choices: ["気質", "情緒", "天賦", "本性", "分別"],
    answerIndex: 2,
    explanation: "「生まれつき備わっている資質」の意味を表す語句は「天賦」。"
  },
  {
    id: "imp-imi-goi_imi-205", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心が卑しい",
    choices: ["あくどい", "すげない", "はかばかしい", "さもしい", "かいがいしい"],
    answerIndex: 3,
    explanation: "「心が卑しい」の意味を表す語句は「さもしい」。"
  },
  {
    id: "imp-imi-goi_imi-206", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "広くいきわたる",
    choices: ["是認", "普遍", "明瞭", "報道", "典型"],
    answerIndex: 1,
    explanation: "「広くいきわたる」の意味を表す語句は「普遍」。"
  },
  {
    id: "imp-imi-goi_imi-207", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "決断をためらってグズグズすること",
    choices: ["不断", "遅延", "逡巡", "果敢", "悠然"],
    answerIndex: 2,
    explanation: "「決断をためらってグズグズすること」の意味を表す語句は「逡巡」。"
  },
  {
    id: "imp-imi-goi_imi-208", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の批判に批判で言い返すこと",
    choices: ["反駁", "弁駁", "応戦", "反目", "逆ねじ"],
    answerIndex: 4,
    explanation: "「他人の批判に批判で言い返すこと」の意味を表す語句は「逆ねじ」。"
  },
  {
    id: "imp-imi-goi_imi-209", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思いがけず巡り合うこと",
    choices: ["逢引", "接触", "逢瀬", "接遇", "邂逅"],
    answerIndex: 4,
    explanation: "「思いがけず巡り合うこと」の意味を表す語句は「邂逅」。"
  },
  {
    id: "imp-imi-goi_imi-210", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "文章に無駄が多くしまりのない様",
    choices: ["冗漫", "散漫", "蛇足", "漫然", "放漫"],
    answerIndex: 0,
    explanation: "「文章に無駄が多くしまりのない様」の意味を表す語句は「冗漫」。"
  },
  {
    id: "imp-imi-goi_imi-211", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "はじめから続けてその組織に属していること",
    choices: ["古参", "古株", "子飼い", "えり抜き", "生え抜き"],
    answerIndex: 4,
    explanation: "「はじめから続けてその組織に属していること」の意味を表す語句は「生え抜き」。"
  },
  {
    id: "imp-imi-goi_imi-212", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事が急に変化する様子",
    choices: ["ついでに", "ただちに", "にわかに", "とたんに", "めったに"],
    answerIndex: 2,
    explanation: "「物事が急に変化する様子」の意味を表す語句は「にわかに」。"
  },
  {
    id: "imp-imi-goi_imi-213", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "なりふり構わず懸命にことにあたっている様子",
    choices: ["けなげ", "ひたむき", "やみくも", "おおわらわ", "てんてこまい"],
    answerIndex: 3,
    explanation: "「なりふり構わず懸命にことにあたっている様子」の意味を表す語句は「おおわらわ」。"
  },
  {
    id: "imp-imi-goi_imi-214", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "いかにも利口そうなさま",
    choices: ["物知り顔", "さかしげ", "利発", "小利口", "半可通"],
    answerIndex: 1,
    explanation: "「いかにも利口そうなさま」の意味を表す語句は「さかしげ」。"
  },
  {
    id: "imp-imi-goi_imi-215", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思わず涙がこぼれた",
    choices: ["おざなりの", "怪訝な", "不測の", "不覚の", "不慮の"],
    answerIndex: 3,
    explanation: "「思わず涙がこぼれた」の意味を表す語句は「不覚の」。"
  },
  {
    id: "imp-imi-goi_imi-216", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ものがゆらゆら揺れる",
    choices: ["そよぐ", "はためく", "たゆたう", "ぶれる", "ふるえる"],
    answerIndex: 2,
    explanation: "「ものがゆらゆら揺れる」の意味を表す語句は「たゆたう」。"
  },
  {
    id: "imp-imi-goi_imi-217", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ことのなりゆきやその事情",
    choices: ["都合", "進行", "経緯", "状況", "理由"],
    answerIndex: 2,
    explanation: "「ことのなりゆきやその事情」の意味を表す語句は「経緯」。"
  },
  {
    id: "imp-imi-goi_imi-218", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "失敗すること",
    choices: ["阻喪", "屈折", "蹉跌", "迂回", "逡巡"],
    answerIndex: 2,
    explanation: "「失敗すること」の意味を表す語句は「蹉跌」。"
  },
  {
    id: "imp-imi-goi_imi-219", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人を丁寧に招くこと",
    choices: ["招聘", "貴賓", "招喚", "歓迎", "来迎"],
    answerIndex: 0,
    explanation: "「人を丁寧に招くこと」の意味を表す語句は「招聘」。"
  },
  {
    id: "imp-imi-goi_imi-220", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の才能や仕事に自信や誇りをもつこと",
    choices: ["自覚", "自重", "自記", "自若", "自負"],
    answerIndex: 4,
    explanation: "「自分の才能や仕事に自信や誇りをもつこと」の意味を表す語句は「自負」。"
  },
  {
    id: "imp-imi-goi_imi-221", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "不都合なことや過失を隠すためにうわべを装う",
    choices: ["あがなう", "はからう", "あしらう", "まかなう", "とりつくろう"],
    answerIndex: 4,
    explanation: "「不都合なことや過失を隠すためにうわべを装う」の意味を表す語句は「とりつくろう」。"
  },
  {
    id: "imp-imi-goi_imi-222", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "理論や判断に誤りがないこと",
    choices: ["矛盾", "齟齬", "無謬", "明瞭", "精緻"],
    answerIndex: 2,
    explanation: "「理論や判断に誤りがないこと」の意味を表す語句は「無謬」。"
  },
  {
    id: "imp-imi-goi_imi-223", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "うっかり忘れること",
    choices: ["忘却", "忘我", "失意", "失念", "忘年"],
    answerIndex: 3,
    explanation: "「うっかり忘れること」の意味を表す語句は「失念」。"
  },
  {
    id: "imp-imi-goi_imi-224", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心で大まかな見積もりを立てること",
    choices: ["算段", "胸算用", "推定", "皮算用", "目論見"],
    answerIndex: 1,
    explanation: "「心で大まかな見積もりを立てること」の意味を表す語句は「胸算用」。"
  },
  {
    id: "imp-imi-goi_imi-225", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "世に稀なこと",
    choices: ["凡庸", "矮小", "過少", "孤独", "稀代"],
    answerIndex: 4,
    explanation: "「世に稀なこと」の意味を表す語句は「稀代」。"
  },
  {
    id: "imp-imi-goi_imi-227", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "神や主君から受けるめぐみ",
    choices: ["恩寵", "天恵", "衆生", "天啓", "慈愛"],
    answerIndex: 0,
    explanation: "「神や主君から受けるめぐみ」の意味を表す語句は「恩寵」。"
  },
  {
    id: "imp-imi-goi_imi-228", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "世間に広く通用すること",
    choices: ["伝播", "拡大", "流通", "伝染", "有名"],
    answerIndex: 2,
    explanation: "「世間に広く通用すること」の意味を表す語句は「流通」。"
  },
  {
    id: "imp-imi-goi_imi-230", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "意地を張って、自分の考えを曲げないこと",
    choices: ["固執", "拘泥", "我執", "執着", "固辞"],
    answerIndex: 2,
    explanation: "「意地を張って、自分の考えを曲げないこと」の意味を表す語句は「我執」。"
  },
  {
    id: "imp-imi-goi_imi-232", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "目上の人の機嫌を取り、気に入られようとすること",
    choices: ["阿付", "追従", "迎合", "傾倒", "心酔"],
    answerIndex: 1,
    explanation: "「目上の人の機嫌を取り、気に入られようとすること」の意味を表す語句は「追従」。（「目上の機嫌を取り気に入られようとする」は追従（ついしょう）。選択肢A「阿付」は「阿附」の誤表記でもある）"
  },
  {
    id: "imp-imi-goi_imi-233", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "勢いが強く、とどめがたいさま",
    choices: ["破竹の勢い", "飛ぶ鳥を落とす勢い", "向かうところ敵なし", "怒髪天を突く", "沛然"],
    answerIndex: 0,
    explanation: "「勢いが強く、とどめがたいさま」の意味を表す語句は「破竹の勢い」。（「沛然」は雨が激しく降るさま。勢いが強くとどめがたいのは破竹の勢い）"
  },
  {
    id: "imp-imi-goi_imi-234", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "表面上は従っているように見せて、内心では反対していること",
    choices: ["面従腹背", "羊頭狗肉", "巧言令色", "表裏一体", "二律背反"],
    answerIndex: 0,
    explanation: "「表面上は従っているように見せて、内心では反対していること」の意味を表す語句は「面従腹背」。"
  },
  {
    id: "imp-imi-goi_imi-235", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事が一段落し、しばらく動きがなくなること",
    choices: ["休止", "小康", "頓挫", "膠着", "安堵"],
    answerIndex: 1,
    explanation: "「物事が一段落し、しばらく動きがなくなること」の意味を表す語句は「小康」。"
  },
  {
    id: "imp-imi-goi_imi-236", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "わざとらしくなく、自然で洗練されているさま",
    choices: ["瀟洒", "風流", "洒脱", "端正", "粋"],
    answerIndex: 2,
    explanation: "「わざとらしくなく、自然で洗練されているさま」の意味を表す語句は「洒脱」。"
  },
  {
    id: "imp-imi-goi_imi-238", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事の本質がわかり、迷いがなくなること",
    choices: ["開眼", "覚醒", "豁然", "悟脱", "会得"],
    answerIndex: 2,
    explanation: "「物事の本質がわかり、迷いがなくなること」の意味を表す語句は「豁然」。"
  },
  {
    id: "imp-imi-goi_imi-239", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "勝つ見込みが大きい",
    choices: ["清算", "目算", "公算", "概算", "試算", "採算"],
    answerIndex: 2,
    explanation: "「勝つ見込みが大きい」の意味を表す語句は「公算」。"
  },
  {
    id: "imp-imi-goi_imi-240", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "つつみかくさないさま",
    choices: ["露呈", "暴露", "あけすけ", "あか抜け", "つつ抜け"],
    answerIndex: 2,
    explanation: "「つつみかくさないさま」の意味を表す語句は「あけすけ」。"
  },
  {
    id: "imp-imi-goi_imi-241", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "そうするよりほかにない",
    choices: ["申し分ない", "ほかならない", "さしさわりない", "よんどころない", "抜き差しならない"],
    answerIndex: 3,
    explanation: "「そうするよりほかにない」の意味を表す語句は「よんどころない」。"
  },
  {
    id: "imp-imi-goi_imi-242", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "なみはずれて程度を超えること",
    choices: ["希代", "莫大", "絶大", "奇抜", "法外"],
    answerIndex: 4,
    explanation: "「なみはずれて程度を超えること」の意味を表す語句は「法外」。（No.1の同一問題はE。「絶大」は程度が非常に大きいことで、「並外れて程度を超える」は法外）"
  },
  {
    id: "imp-imi-goi_imi-243", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事のくわしい事情",
    choices: ["子細", "明細", "精細", "細部", "細事"],
    answerIndex: 0,
    explanation: "「物事のくわしい事情」の意味を表す語句は「子細」。"
  },
  {
    id: "imp-imi-goi_imi-244", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "だんだんいい気になって人を見下したふるまいをすること",
    choices: ["虚勢", "誇示", "自負", "増長", "不遜", "慢心"],
    answerIndex: 3,
    explanation: "「だんだんいい気になって人を見下したふるまいをすること」の意味を表す語句は「増長」。"
  },
  {
    id: "imp-imi-goi_imi-246", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "卑近な",
    choices: ["身近な", "卑しい", "低俗な", "低級な", "当今の"],
    answerIndex: 0,
    explanation: "「卑近な」の意味を表す語句は「身近な」。"
  },
  {
    id: "imp-imi-goi_imi-247", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "困難にくじけない強い意志",
    choices: ["英気", "気鋭", "気概", "気丈", "気勢"],
    answerIndex: 2,
    explanation: "「困難にくじけない強い意志」の意味を表す語句は「気概」。"
  },
  {
    id: "imp-imi-goi_imi-248", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人に見つからないようにこっそりとかくすこと",
    choices: ["隠匿", "隠蔽", "奥秘", "秘蔵", "機密", "内密"],
    answerIndex: 0,
    explanation: "「他人に見つからないようにこっそりとかくすこと」の意味を表す語句は「隠匿」。"
  },
  {
    id: "imp-imi-goi_imi-249", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "進んで新しいことをすること",
    choices: ["推進", "新進", "進取", "先進", "進出"],
    answerIndex: 2,
    explanation: "「進んで新しいことをすること」の意味を表す語句は「進取」。"
  },
  {
    id: "imp-imi-goi_imi-250", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "無用の心配",
    choices: ["心痛", "腐心", "杞憂", "徒労", "蛇足"],
    answerIndex: 2,
    explanation: "「無用の心配」の意味を表す語句は「杞憂」。"
  },
  {
    id: "imp-imi-goi_imi-251", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "全体を大きく眺めわたすこと",
    choices: ["鳥瞰", "網羅", "眺望", "高覧", "凌駕"],
    answerIndex: 0,
    explanation: "「全体を大きく眺めわたすこと」の意味を表す語句は「鳥瞰」。"
  },
  {
    id: "imp-imi-goi_imi-252", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "再三",
    choices: ["時々", "常に", "いつも", "さらに", "たびたび"],
    answerIndex: 4,
    explanation: "「再三」の意味を表す語句は「たびたび」。"
  },
  {
    id: "imp-imi-goi_imi-253", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ことばを加えたり言い換えたりしてわかりやすく説明すること",
    choices: ["E（敷衍（フエン））", "斟酌《しんしゃく》", "篤志家", "さもしい"],
    answerIndex: 0,
    explanation: "「ことばを加えたり言い換えたりしてわかりやすく説明すること」の意味を表す語句は「E（敷衍（フエン））」。"
  },
  {
    id: "imp-imi-goi_imi-254", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "招き寄せること",
    choices: ["導入", "招待", "歓迎", "誘致", "待機"],
    answerIndex: 3,
    explanation: "「招き寄せること」の意味を表す語句は「誘致」。"
  },
  {
    id: "imp-imi-goi_imi-255", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "相手の計略を見抜く",
    choices: ["看過する", "看破する", "凝視する", "投資する", "予見する", "露見する"],
    answerIndex: 1,
    explanation: "「相手の計略を見抜く」の意味を表す語句は「看破する」。"
  },
  {
    id: "imp-imi-goi_imi-256", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "おどかすこと",
    choices: ["示威", "驚愕", "挑発", "威嚇", "脅威"],
    answerIndex: 3,
    explanation: "「おどかすこと」の意味を表す語句は「威嚇」。"
  },
  {
    id: "imp-imi-goi_imi-257", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "助力すること",
    choices: ["加勢", "共謀", "結託", "貢献", "団結", "連携"],
    answerIndex: 0,
    explanation: "「助力すること」の意味を表す語句は「加勢」。"
  },
  {
    id: "imp-imi-goi_imi-258", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事の進行が急にくじけること",
    choices: ["失速", "頓挫", "急転", "難航", "破綻"],
    answerIndex: 1,
    explanation: "「物事の進行が急にくじけること」の意味を表す語句は「頓挫」。"
  },
  {
    id: "imp-imi-goi_imi-259", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "まったく問題にしないこと",
    choices: ["軽視", "無視", "無関心", "無頓着", "度外視"],
    answerIndex: 4,
    explanation: "「まったく問題にしないこと」の意味を表す語句は「度外視」。"
  },
  {
    id: "imp-imi-goi_imi-260", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "おもわず笑ってしまうこと",
    choices: ["苦笑", "哄《コウ》笑", "一笑", "失笑", "嘲笑"],
    answerIndex: 3,
    explanation: "「おもわず笑ってしまうこと」の意味を表す語句は「失笑」。"
  },
  {
    id: "imp-imi-goi_imi-261", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "よく行き届いていること",
    choices: ["網羅", "繊細", "配慮", "周到", "緻密"],
    answerIndex: 3,
    explanation: "「よく行き届いていること」の意味を表す語句は「周到」。"
  },
  {
    id: "imp-imi-goi_imi-262", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "こまかなところまではっきりしているさま",
    choices: ["あきらか", "あざやか", "きわやか", "こまやか", "つまびらか"],
    answerIndex: 4,
    explanation: "「こまかなところまではっきりしているさま」の意味を表す語句は「つまびらか」。"
  },
  {
    id: "imp-imi-goi_imi-263", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心のなかでのおおまかな見積もり",
    choices: ["皮算用", "丼勘定", "懐具合", "前勘定", "胸算用", "目分量"],
    answerIndex: 4,
    explanation: "「心のなかでのおおまかな見積もり」の意味を表す語句は「胸算用」。"
  },
  {
    id: "imp-imi-goi_imi-264", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "うんざりして嫌になること",
    choices: ["嫌悪", "困惑", "逡巡", "嘆息", "辟易《辟易》", "蔑視"],
    answerIndex: 4,
    explanation: "「うんざりして嫌になること」の意味を表す語句は「辟易《辟易》」。"
  },
  {
    id: "imp-imi-goi_imi-265", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他から飛び抜けて優れていること",
    choices: ["傑出", "独走", "優秀", "孤独", "俊敏"],
    answerIndex: 0,
    explanation: "「他から飛び抜けて優れていること」の意味を表す語句は「傑出」。"
  },
  {
    id: "imp-imi-goi_imi-266", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "時流にのり世にもてはやされる人",
    choices: ["英雄", "権威", "神童", "寵《チョウ》児", "花形"],
    answerIndex: 3,
    explanation: "「時流にのり世にもてはやされる人」の意味を表す語句は「寵《チョウ》児」。"
  },
  {
    id: "imp-imi-goi_imi-267", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "世にもまれなこと",
    choices: ["格別", "希代", "珍奇", "突飛", "非凡"],
    answerIndex: 1,
    explanation: "「世にもまれなこと」の意味を表す語句は「希代」。"
  },
  {
    id: "imp-imi-goi_imi-268", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "常識や慣習にとらわれずおもうままにふるまうこと",
    choices: ["奔放", "邁進", "破天荒", "身勝手", "天真爛《ラン》漫"],
    answerIndex: 0,
    explanation: "「常識や慣習にとらわれずおもうままにふるまうこと」の意味を表す語句は「奔放」。"
  },
  {
    id: "imp-imi-goi_imi-269", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "あやまちなどを問いただして非難すること",
    choices: ["罵倒", "懲罰", "糾弾", "誹謗", "懲戒"],
    answerIndex: 2,
    explanation: "「あやまちなどを問いただして非難すること」の意味を表す語句は「糾弾」。"
  },
  {
    id: "imp-imi-goi_imi-270", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分より優れている相手をねたましく思う",
    choices: ["うとむ", "うらむ", "そしる", "そねむ", "にくむ"],
    answerIndex: 3,
    explanation: "「自分より優れている相手をねたましく思う」の意味を表す語句は「そねむ」。"
  },
  {
    id: "imp-imi-goi_imi-271", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "知識が不十分である",
    choices: ["うとい", "つたない", "いたらない", "いぶかしい", "おぼつかない"],
    answerIndex: 0,
    explanation: "「知識が不十分である」の意味を表す語句は「うとい」。"
  },
  {
    id: "imp-imi-goi_imi-272", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人に知れないように策動すること",
    choices: ["潜行", "隠密", "扇動", "内密", "暗躍"],
    answerIndex: 4,
    explanation: "「人に知れないように策動すること」の意味を表す語句は「暗躍」。"
  },
  {
    id: "imp-imi-goi_imi-273", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "初めから続けてその組織に属していること",
    choices: ["古参", "古株", "子飼い", "えり抜き", "生え抜き"],
    answerIndex: 4,
    explanation: "「初めから続けてその組織に属していること」の意味を表す語句は「生え抜き」。"
  },
  {
    id: "imp-imi-goi_imi-274", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "他人の権利を傷つけたり社会秩序を乱したりする",
    choices: ["威圧する", "愚弄する", "蹂躙する", "席巻《ケン》する", "籠《ロウ》絡する"],
    answerIndex: 2,
    explanation: "「他人の権利を傷つけたり社会秩序を乱したりする」の意味を表す語句は「蹂躙する」。"
  },
  {
    id: "imp-imi-goi_imi-275", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "さしひきゼロにすること",
    choices: ["皆無", "加減", "損得", "相殺", "有無"],
    answerIndex: 3,
    explanation: "「さしひきゼロにすること」の意味を表す語句は「相殺」。"
  },
  {
    id: "imp-imi-goi_imi-276", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "二等分",
    choices: ["両断", "折半", "均分", "山分け", "五分五分"],
    answerIndex: 1,
    explanation: "「二等分」の意味を表す語句は「折半」。"
  },
  {
    id: "imp-imi-goi_imi-277", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "いかにも利口なさま",
    choices: ["半可通", "小利口な", "さかしげ", "ものしり顏", "しったかぶり"],
    answerIndex: 2,
    explanation: "「いかにも利口なさま」の意味を表す語句は「さかしげ」。"
  },
  {
    id: "imp-imi-goi_imi-278", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "できごとなどをあらかじめ見通すこと",
    choices: ["予想", "予期", "予見", "予言", "予告"],
    answerIndex: 2,
    explanation: "「できごとなどをあらかじめ見通すこと」の意味を表す語句は「予見」。"
  },
  {
    id: "imp-imi-goi_imi-279", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "様子がどうも変だと思う",
    choices: ["あやぶむ", "いぶかる", "かんぐる", "ためらう", "おしはかる"],
    answerIndex: 1,
    explanation: "「様子がどうも変だと思う」の意味を表す語句は「いぶかる」。"
  },
  {
    id: "imp-imi-goi_imi-280", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "苦しめ悩ます",
    choices: ["忌む", "疎む", "苛《サイナ》む", "凄む", "謗《そし》る"],
    answerIndex: 2,
    explanation: "「苦しめ悩ます」の意味を表す語句は「苛《サイナ》む」。"
  },
  {
    id: "imp-imi-goi_imi-281", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心配顔",
    choices: ["形相", "剣幕", "愁眉《ビ》", "渋面", "血眼", "破顔"],
    answerIndex: 2,
    explanation: "「心配顔」の意味を表す語句は「愁眉《ビ》」。"
  },
  {
    id: "imp-imi-goi_imi-282", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "窮地から逃れる方法",
    choices: ["秘策", "迂回", "便法", "活路", "遁走"],
    answerIndex: 3,
    explanation: "「窮地から逃れる方法」の意味を表す語句は「活路」。"
  },
  {
    id: "imp-imi-goi_imi-283", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "伝わり広がっていくこと",
    choices: ["伝達", "伝承", "伝来", "伝播《パ》", "伝道"],
    answerIndex: 3,
    explanation: "「伝わり広がっていくこと」の意味を表す語句は「伝播《パ》」。"
  },
  {
    id: "imp-imi-goi_imi-284", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の思うまま",
    choices: ["得意", "私意", "心意", "真意", "恣意"],
    answerIndex: 4,
    explanation: "「自分の思うまま」の意味を表す語句は「恣意」。"
  },
  {
    id: "imp-imi-goi_imi-285", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ひどく感心すること",
    choices: ["感涙", "驚嘆", "仰天", "心酔", "崇敬"],
    answerIndex: 1,
    explanation: "「ひどく感心すること」の意味を表す語句は「驚嘆」。"
  },
  {
    id: "imp-imi-goi_imi-286", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "慎みの態度で従うこと",
    choices: ["心服", "屈従", "恭順", "崇敬", "謹慎"],
    answerIndex: 2,
    explanation: "「慎みの態度で従うこと」の意味を表す語句は「恭順」。"
  },
  {
    id: "imp-imi-goi_imi-287", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "だんだん少なくなること",
    choices: ["軽減", "消耗", "衰亡", "凋《チョウ》落", "逓《テイ》減"],
    answerIndex: 4,
    explanation: "「だんだん少なくなること」の意味を表す語句は「逓《テイ》減」。"
  },
  {
    id: "imp-imi-goi_imi-288", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心に深く刻み付ける",
    choices: ["鑑みる", "期する", "留める", "念ずる", "銘じる"],
    answerIndex: 4,
    explanation: "「心に深く刻み付ける」の意味を表す語句は「銘じる」。"
  },
  {
    id: "imp-imi-goi_imi-289", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物事を正しく判断する力",
    choices: ["眼力", "機知", "心得", "識見", "識別"],
    answerIndex: 3,
    explanation: "「物事を正しく判断する力」の意味を表す語句は「識見」。"
  },
  {
    id: "imp-imi-goi_imi-290", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "相手の事情を汲み取ること",
    choices: ["斟酌《しんしゃく》", "愁眉《ビ》", "辟易《辟易》", "伝播《パ》"],
    answerIndex: 0,
    explanation: "「相手の事情を汲み取ること」の意味を表す語句は「斟酌《しんしゃく》」。"
  },
  {
    id: "imp-imi-goi_imi-291", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "欠点、悪習などを正しい状態に直すこと",
    choices: ["修整", "修正", "矯正", "整形", "鍛錬"],
    answerIndex: 2,
    explanation: "「欠点、悪習などを正しい状態に直すこと」の意味を表す語句は「矯正」。"
  },
  {
    id: "imp-imi-goi_imi-292", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "企ての仲間に入る",
    choices: ["参加", "協賛", "参画", "賛同", "参与"],
    answerIndex: 2,
    explanation: "「企ての仲間に入る」の意味を表す語句は「参画」。"
  },
  {
    id: "imp-imi-goi_imi-293", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ものが十分にあること",
    choices: ["余分", "潤沢", "裕福", "大量", "余裕"],
    answerIndex: 1,
    explanation: "「ものが十分にあること」の意味を表す語句は「潤沢」。"
  },
  {
    id: "imp-imi-goi_imi-294", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "優れた意見",
    choices: ["所見", "見識", "卓見", "良識", "先見"],
    answerIndex: 2,
    explanation: "「優れた意見」の意味を表す語句は「卓見」。"
  },
  {
    id: "imp-imi-goi_imi-295", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "しのぎを削る",
    choices: ["激しく争う", "苦労を重ねる", "無駄を省く", "仕事に打ち込む", "貧乏に耐える"],
    answerIndex: 0,
    explanation: "「しのぎを削る」の意味を表す語句は「激しく争う」。"
  },
  {
    id: "imp-imi-goi_imi-296", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心を痛め悩ますこと",
    choices: ["逆心", "疑心", "虚心", "腐心", "確信"],
    answerIndex: 3,
    explanation: "「心を痛め悩ますこと」の意味を表す語句は「腐心」。"
  },
  {
    id: "imp-imi-goi_imi-297", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "詭《キ》弁",
    choices: ["おどし", "こじつけ", "いいわけ", "まけおしみ", "いいのがれ"],
    answerIndex: 1,
    explanation: "「詭《キ》弁」の意味を表す語句は「こじつけ」。"
  },
  {
    id: "imp-imi-goi_imi-299", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "自分の地位や名声などの安全をはかること",
    choices: ["保安", "保守", "保証", "保身", "保全"],
    answerIndex: 3,
    explanation: "「自分の地位や名声などの安全をはかること」の意味を表す語句は「保身」。"
  },
  {
    id: "imp-imi-goi_imi-300", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "公職につかず、民間にいること",
    choices: ["一般", "在野", "私人", "庶民", "市井", "世俗"],
    answerIndex: 1,
    explanation: "「公職につかず、民間にいること」の意味を表す語句は「在野」。"
  },
  {
    id: "imp-imi-goi_imi-301", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "子供が機嫌を悪くして泣く",
    choices: ["すねる", "わめく", "むずかる", "ふてくされる", "しゃくりあげる"],
    answerIndex: 2,
    explanation: "「子供が機嫌を悪くして泣く」の意味を表す語句は「むずかる」。"
  },
  {
    id: "imp-imi-goi_imi-302", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ためらわず思い切ってするするさま",
    choices: ["果断", "愚直", "短慮", "無謀", "勇猛"],
    answerIndex: 0,
    explanation: "「ためらわず思い切ってするするさま」の意味を表す語句は「果断」。"
  },
  {
    id: "imp-imi-goi_imi-303", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "信用、権威などを失うこと",
    choices: ["失意", "失格", "失脚", "失速", "失態", "失墜"],
    answerIndex: 5,
    explanation: "「信用、権威などを失うこと」の意味を表す語句は「失墜」。"
  },
  {
    id: "imp-imi-goi_imi-304", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "文章を何度も練り直す",
    choices: ["加筆する", "修正する", "錬成する", "添削する", "改定する", "推敲する"],
    answerIndex: 5,
    explanation: "「文章を何度も練り直す」の意味を表す語句は「推敲する」。"
  },
  {
    id: "imp-imi-goi_imi-305", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "それがまだ解決がつかない問題となっています",
    choices: ["勘案", "腹案", "思案", "私案", "懸案", "試案"],
    answerIndex: 4,
    explanation: "「それがまだ解決がつかない問題となっています」の意味を表す語句は「懸案」。"
  },
  {
    id: "imp-imi-goi_imi-306", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思わず涙がこぼれる",
    choices: ["不覚の", "突然の", "不測の", "不慮の", "無為の"],
    answerIndex: 0,
    explanation: "「思わず涙がこぼれる」の意味を表す語句は「不覚の」。"
  },
  {
    id: "imp-imi-goi_imi-311", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "相手の勢いに圧倒されてしりごみする",
    choices: ["たじろぐ", "おじけづく", "気後れする", "二の足を踏む", "浮き足立つ"],
    answerIndex: 0,
    explanation: "「相手の勢いに圧倒されてしりごみする」の意味を表す語句は「たじろぐ」。"
  },
  {
    id: "imp-imi-goi_imi-313", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "誤解が生じるような言い方",
    choices: ["舌禍", "造言", "豪語", "苦言", "語弊"],
    answerIndex: 4,
    explanation: "「誤解が生じるような言い方」の意味を表す語句は「語弊」。"
  },
  {
    id: "imp-imi-goi_imi-314", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "いちずに努力する",
    choices: ["けなげに", "ひたむきに", "にわかに", "とこしえに", "だしぬけに"],
    answerIndex: 1,
    explanation: "「いちずに努力する」の意味を表す語句は「ひたむきに」。"
  },
  {
    id: "imp-imi-goi_imi-315", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "多くのものの中で特に数え上げられるほど優れていること",
    choices: ["屈指", "珠玉", "随一", "超越", "突出", "無類"],
    answerIndex: 0,
    explanation: "「多くのものの中で特に数え上げられるほど優れていること」の意味を表す語句は「屈指」。"
  },
  {
    id: "imp-imi-goi_imi-316", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "その気になるようにそそのかす",
    choices: ["いざなう", "おだてる", "かき立てる", "たき付ける", "持ち掛ける"],
    answerIndex: 3,
    explanation: "「その気になるようにそそのかす」の意味を表す語句は「たき付ける」。"
  },
  {
    id: "imp-imi-goi_imi-317", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "人情の機微や事の真相などを的確に指摘する",
    choices: ["あばく", "うがつ", "えぐる", "ただす", "あげつらう"],
    answerIndex: 1,
    explanation: "「人情の機微や事の真相などを的確に指摘する」の意味を表す語句は「うがつ」。"
  },
  {
    id: "imp-imi-goi_imi-318", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "不愉快な気持ちを表した顔",
    choices: ["険相", "厚顔", "渋面", "鉄面皮", "無愛想"],
    answerIndex: 2,
    explanation: "「不愉快な気持ちを表した顔」の意味を表す語句は「渋面」。"
  },
  {
    id: "imp-imi-goi_imi-320", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "心や力を一つのことに集中すること",
    choices: ["傾注", "殺到", "収斂", "固執", "耽溺"],
    answerIndex: 0,
    explanation: "「心や力を一つのことに集中すること」の意味を表す語句は「傾注」。"
  },
  {
    id: "imp-imi-goi_imi-321", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "物心がいやしい",
    choices: ["はしたない", "がめつい", "いじきたない", "つましい", "さもしい"],
    answerIndex: 4,
    explanation: "「物心がいやしい」の意味を表す語句は「さもしい」。"
  },
  {
    id: "imp-imi-goi_imi-322", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "ある事を行うよう説き勧めること",
    choices: ["推薦", "奨励", "説得", "勧告", "説教"],
    answerIndex: 3,
    explanation: "「ある事を行うよう説き勧めること」の意味を表す語句は「勧告」。"
  },
  {
    id: "imp-imi-goi_imi-326", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "思い切ってことをするさま",
    choices: ["敢然", "毅然", "強硬", "強引", "断然"],
    answerIndex: 0,
    explanation: "「思い切ってことをするさま」の意味を表す語句は「敢然」。"
  },
  {
    id: "imp-imi-goi_imi-329", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "優勝者に引けを取らない実力の持ち主",
    choices: ["呈する", "類する", "値する", "伍する", "位する"],
    answerIndex: 3,
    explanation: "「優勝者に引けを取らない実力の持ち主」の意味を表す語句は「伍する」。"
  },
  {
    id: "imp-imi-goi_imi-330", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "頼まれてもすぐには受けられない",
    choices: ["そそくさと", "ぬけぬけと", "おめおめと", "すいと", "おいそれと"],
    answerIndex: 4,
    explanation: "「頼まれてもすぐには受けられない」の意味を表す語句は「おいそれと」。"
  },
  {
    id: "imp-imi-goi_imi-331", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "入り組んだ事情を調べる",
    choices: ["顛末", "過程", "実態", "真相", "内情"],
    answerIndex: 3,
    explanation: "「入り組んだ事情を調べる」の意味を表す語句は「真相」。"
  },
  {
    id: "imp-imi-goi_imi-172", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "おおよその内容",
    choices: ["概容", "各論", "概論", "総論", "概説"],
    answerIndex: 0,
    explanation: "「おおよその内容」の意味を表す語句は「概容」。（選択肢A「概容」は「概要」の誤字と思われる）"
  },
  {
    id: "imp-imi-goi_imi-229", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "その場しのぎに、つじつまを合わせるためのいい加減な言葉",
    choices: ["詭弁", "戯言", "方便", "当座しのぎ", "口実"],
    answerIndex: 0,
    explanation: "「その場しのぎに、つじつまを合わせるためのいい加減な言葉」の意味を表す語句は「詭弁」。（定義が「その場しのぎのいい加減な言葉」でNo.164の詭弁の定義とずれる。「方便」の可能性があり要確認）"
  },
  {
    id: "imp-imi-goi_imi-237", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "欠点や過ちなどを厳しく咎め、責め立てること",
    choices: ["糾弾", "呵責", "譴責", "非難", "詰問"],
    answerIndex: 1,
    explanation: "「欠点や過ちなどを厳しく咎め、責め立てること」の意味を表す語句は「呵責」。（「呵責」は責めさいなむ意。定義どおりなら「糾弾」が適切で要確認（No.269・337では糾弾が正答））"
  },
  {
    id: "imp-imi-goi_imi-298", category: "imiyoho",
    instruction: "次の説明が表す語句として最も適切なものを選びなさい。",
    promptHTML: "遜《ソン》色",
    choices: ["品がない", "欠点がない", "権威がない", "力が及ばない", "見劣りしない"],
    answerIndex: 4,
    explanation: "「遜《ソン》色」の意味を表す語句は「見劣りしない」。（問題文は「遜色ない」の脱字と思われる。「遜色」単独なら正答はD（力が及ばない）側になる）"
  },
  {
    id: "imp-yoho-goi_yoho-1", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "日が高いうちに帰る",
    choices: ["日を重ねる", "雨の日が続く", "日が長くなる", "日の出を見る", "日に価度も通う", "幼い日を思い出す"],
    answerIndex: 3,
    explanation: "基準の用例「日が高いうちに帰る」と同じ意味・用法なのは「日の出を見る」。（「日が高いうちに」の「日」は太陽。No.96の同一問題はD）"
  },
  {
    id: "imp-yoho-goi_yoho-2", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "着物の丈をつめる",
    choices: ["息をつめる", "根をつめる", "席をつめる", "間をつめる", "水をつめる", "綿をつめる"],
    answerIndex: 3,
    explanation: "基準の用例「着物の丈をつめる」と同じ意味・用法なのは「間をつめる」。"
  },
  {
    id: "imp-yoho-goi_yoho-3", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "彼までもが聞いてくれない",
    choices: ["夢にまで見る", "考えるまでもない", "夜明けまで降り続く", "週末まで待ってください", "言わないまでも考えておく", "とりあえずお礼の気持ちまで"],
    answerIndex: 0,
    explanation: "基準の用例「彼までもが聞いてくれない」と同じ意味・用法なのは「夢にまで見る」。（「までも」は極端な例を示す副助詞。Cは時間の限界点で別用法。No.104・116の同一問題はA）"
  },
  {
    id: "imp-yoho-goi_yoho-4", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "方針が組織の未端まで通る",
    choices: ["中まで火が通る", "まだ代で通る", "論文が和査に通る", "新しく地下鉄が通る", "つぎっつぎと大型車が通る", "英語はたいていの国で通る"],
    answerIndex: 0,
    explanation: "基準の用例「方針が組織の未端まで通る」と同じ意味・用法なのは「中まで火が通る」。（「末端まで通る」は行き渡る意。Fは「通用する」で別用法。No.77の同一問題はA）"
  },
  {
    id: "imp-yoho-goi_yoho-5", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "どういうわけか閉まっていた",
    choices: ["これはわけない仕事だ", "わけもわからずに読み上げた", "わけありの男女", "きらいなわけではない", "遅刻したわけを話す"],
    answerIndex: 4,
    explanation: "基準の用例「どういうわけか閉まっていた」と同じ意味・用法なのは「遅刻したわけを話す」。"
  },
  {
    id: "imp-yoho-goi_yoho-6", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "みんなから慕われる",
    choices: ["出先で雨に降られる", "先生が山に行かれる", "母が思い出される", "この山なら登れる", "兄の態度にあきれる"],
    answerIndex: 0,
    explanation: "基準の用例「みんなから慕われる」と同じ意味・用法なのは「出先で雨に降られる」。"
  },
  {
    id: "imp-yoho-goi_yoho-7", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "好敵手に闘志がわく",
    choices: ["感動で涙がわく", "熱戦で観客がわく", "噴火で温泉がわく", "山の上から雲がわく", "話をきいて疑いがわく", "賛否をめぐって議論がわく"],
    answerIndex: 4,
    explanation: "基準の用例「好敵手に闘志がわく」と同じ意味・用法なのは「話をきいて疑いがわく」。"
  },
  {
    id: "imp-yoho-goi_yoho-8", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "ウイルスの侵入を許す",
    choices: ["小学生以上の入場を許す", "予算が許すならお願いしたい", "一刻の猶予も許すことができない", "彼女に気を許すべきではなかった", "最終回に逆転を許すことになった"],
    answerIndex: 4,
    explanation: "基準の用例「ウイルスの侵入を許す」と同じ意味・用法なのは「最終回に逆転を許すことになった」。"
  },
  {
    id: "imp-yoho-goi_yoho-9", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "あのような人を名人と言う",
    choices: ["昔は海だったという", "目は口ほどに物を言う", "親のいうことは聞くものだ", "きらいというわけではない", "特技というほどのものでもない", "出かけようというときに邪魔が入った"],
    answerIndex: 4,
    explanation: "基準の用例「あのような人を名人と言う」と同じ意味・用法なのは「特技というほどのものでもない」。"
  },
  {
    id: "imp-yoho-goi_yoho-10", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "手を貸す",
    choices: ["山の手", "手を打つ", "手がかかる", "手に入れる", "手を挙げる", "手を尽くす"],
    answerIndex: 2,
    explanation: "基準の用例「手を貸す」と同じ意味・用法なのは「手がかかる」。（「手を貸す」の「手」は労力。No.67の同一問題はC。「手を尽くす」の「手」は手段で別）"
  },
  {
    id: "imp-yoho-goi_yoho-11", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "1メートルのひも",
    choices: ["自転車の旅", "住宅の不足", "大学の正門", "半数の会員", "先端技術の粋", "マラソンのゴール"],
    answerIndex: 3,
    explanation: "基準の用例「1メートルのひも」と同じ意味・用法なのは「半数の会員」。"
  },
  {
    id: "imp-yoho-goi_yoho-12", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "のぞむところだ",
    choices: ["海にのぞむ家", "別れの場にのぞむ", "落ち着いて交渉にのぞむ", "自立心を子どもにのぞむ", "来賓として式場にのぞむ", "試合に一丸となってのぞむ"],
    answerIndex: 3,
    explanation: "基準の用例「のぞむところだ」と同じ意味・用法なのは「自立心を子どもにのぞむ」。"
  },
  {
    id: "imp-yoho-goi_yoho-13", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "時の流れにのる",
    choices: ["時をかせぐ", "時は金なり", "時を見る目", "目がさめた時", "時の鐘が鳴る"],
    answerIndex: 2,
    explanation: "基準の用例「時の流れにのる」と同じ意味・用法なのは「時を見る目」。"
  },
  {
    id: "imp-yoho-goi_yoho-14", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "箱の中に入っている",
    choices: ["人の心の中はわからな", "けんかに仲裁が入る", "先頭との差が（つまる）", "話を聞いて疑いがわく"],
    answerIndex: 0,
    explanation: "基準の用例「箱の中に入っている」と同じ意味・用法なのは「人の心の中はわからな」。"
  },
  {
    id: "imp-yoho-goi_yoho-15", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "今日はとてもおだやかだ",
    choices: ["あの建物は立派だ", "彼はことを好む性格だ", "どうも話が通じていないようだ", "人間に幅ができる"],
    answerIndex: 0,
    explanation: "基準の用例「今日はとてもおだやかだ」と同じ意味・用法なのは「あの建物は立派だ」。"
  },
  {
    id: "imp-yoho-goi_yoho-16", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "別れがつらい",
    choices: ["夏がくる", "鐘がなる", "風が吹く", "電車が通る", "英語ができる"],
    answerIndex: 4,
    explanation: "基準の用例「別れがつらい」と同じ意味・用法なのは「英語ができる」。"
  },
  {
    id: "imp-yoho-goi_yoho-17", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "そうとばかりは言えない",
    choices: ["彼は勉強ばかりしてい", "遅刻したわけを言いなさい", "まだ夜が明けない", "二度と失敗は繰り返すまい"],
    answerIndex: 0,
    explanation: "基準の用例「そうとばかりは言えない」と同じ意味・用法なのは「彼は勉強ばかりしてい」。"
  },
  {
    id: "imp-yoho-goi_yoho-18", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "山が見える",
    choices: ["山が青い", "山が招く", "山が好きだ", "山が連なる", "山がそびえる"],
    answerIndex: 1,
    explanation: "基準の用例「山が見える」と同じ意味・用法なのは「山が招く」。"
  },
  {
    id: "imp-yoho-goi_yoho-19", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "独身で通す",
    choices: ["歩き通す", "話を通す", "客間に通す", "予算案を通す", "小型車のみを通す"],
    answerIndex: 0,
    explanation: "基準の用例「独身で通す」と同じ意味・用法なのは「歩き通す」。"
  },
  {
    id: "imp-yoho-goi_yoho-20", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "とにかく頭数だけはそろえておいてくれ",
    choices: ["頭が古い", "頭を悩ます", "頭金を納める", "頭割になる", "頭打ちになる"],
    answerIndex: 3,
    explanation: "基準の用例「とにかく頭数だけはそろえておいてくれ」と同じ意味・用法なのは「頭割になる」。"
  },
  {
    id: "imp-yoho-goi_yoho-21", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "頭がよい",
    choices: ["体によい", "仲がよい", "よい腕前", "よい性格の人", "よい所に進む"],
    answerIndex: 2,
    explanation: "基準の用例「頭がよい」と同じ意味・用法なのは「よい腕前」。"
  },
  {
    id: "imp-yoho-goi_yoho-22", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "例外を認める 許す",
    choices: ["大学への入学を認める", "捜査にあたる", "頭割りにする", "株が落ちる"],
    answerIndex: 0,
    explanation: "基準の用例「例外を認める 許す」と同じ意味・用法なのは「大学への入学を認める」。"
  },
  {
    id: "imp-yoho-goi_yoho-23", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "先を争う 先頭を争っている",
    choices: ["三軒先の家", "玄関先に置く", "先に立って働く", "先が思いやられる", "一寸先も見えない"],
    answerIndex: 2,
    explanation: "基準の用例「先を争う 先頭を争っている」と同じ意味・用法なのは「先に立って働く」。"
  },
  {
    id: "imp-yoho-goi_yoho-24", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "人の上に立つ",
    choices: ["席を立つ", "役に立つ", "矢面に立つ", "計画が立つ", "理屈が立つ"],
    answerIndex: 2,
    explanation: "基準の用例「人の上に立つ」と同じ意味・用法なのは「矢面に立つ」。"
  },
  {
    id: "imp-yoho-goi_yoho-25", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "今日はとてもおだやかだ だの前にカッコ",
    choices: ["あの建物は立派だ", "どうも話が通じていないようだ", "彼はことを好む性格だ", "中まで火が通る"],
    answerIndex: 0,
    explanation: "基準の用例「今日はとてもおだやかだ だの前にカッコ」と同じ意味・用法なのは「あの建物は立派だ」。"
  },
  {
    id: "imp-yoho-goi_yoho-26", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "頭角をあらわす 持っている力をはっきり表に出す",
    choices: ["舞台に姿をあらわす", "歩き通す", "遅刻したわけを話す", "出かける（ばかり）にしてお待ちします"],
    answerIndex: 0,
    explanation: "基準の用例「頭角をあらわす 持っている力をはっきり表に出す」と同じ意味・用法なのは「舞台に姿をあらわす」。"
  },
  {
    id: "imp-yoho-goi_yoho-27", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "完成の日が待たれる",
    choices: ["昔のことがしのばれる", "日の出を見る", "子どもにもわかる", "先頭との差がつまる"],
    answerIndex: 0,
    explanation: "基準の用例「完成の日が待たれる」と同じ意味・用法なのは「昔のことがしのばれる」。"
  },
  {
    id: "imp-yoho-goi_yoho-28", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "分母をはらう 物を隔てているものを取り払う",
    choices: ["会費をはらう", "垣根をはらう", "犠牲をはらう", "下宿をはらう", "右足をはらう"],
    answerIndex: 1,
    explanation: "基準の用例「分母をはらう 物を隔てているものを取り払う」と同じ意味・用法なのは「垣根をはらう」。"
  },
  {
    id: "imp-yoho-goi_yoho-29", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "あたりが暗くなってきた 徐々に",
    choices: ["何となくわかってきた", "上着もないのに雪さえ降ってきた", "最終回に逆転を許すことになった", "話を聞いて疑いがわく"],
    answerIndex: 0,
    explanation: "基準の用例「あたりが暗くなってきた 徐々に」と同じ意味・用法なのは「何となくわかってきた」。"
  },
  {
    id: "imp-yoho-goi_yoho-30", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "見聞したところを述べる 所見と言い換えられる",
    choices: ["信じるところを貫く", "非難がわく", "話を聞いて疑いがわく", "先に立って働く"],
    answerIndex: 0,
    explanation: "基準の用例「見聞したところを述べる 所見と言い換えられる」と同じ意味・用法なのは「信じるところを貫く」。"
  },
  {
    id: "imp-yoho-goi_yoho-31", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "昔のことが思い出される",
    choices: ["塔が倒れる", "吉報が待たれる", "問題が出される", "子供でも登れる", "荒波におそわれる"],
    answerIndex: 1,
    explanation: "基準の用例「昔のことが思い出される」と同じ意味・用法なのは「吉報が待たれる」。"
  },
  {
    id: "imp-yoho-goi_yoho-32", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "捜査本部を置く",
    choices: ["本人", "本名", "本当", "本流", "本番"],
    answerIndex: 3,
    explanation: "基準の用例「捜査本部を置く」と同じ意味・用法なのは「本流」。"
  },
  {
    id: "imp-yoho-goi_yoho-34", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "映像を電波にのせる",
    choices: ["販売ルートにのせる", "じっと手をみる", "家計をあずかる", "株が落ちる"],
    answerIndex: 0,
    explanation: "基準の用例「映像を電波にのせる」と同じ意味・用法なのは「販売ルートにのせる」。"
  },
  {
    id: "imp-yoho-goi_yoho-36", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "勇気がわく ある考えや感情が生じる",
    choices: ["湯がわく", "麹《コウジ》がわ", "議論がわく", "非難がわく", "場内がわく"],
    answerIndex: 3,
    explanation: "基準の用例「勇気がわく ある考えや感情が生じる」と同じ意味・用法なのは「非難がわく」。"
  },
  {
    id: "imp-yoho-goi_yoho-39", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "安くテ良い品を買う 追加 の上に さらに",
    choices: ["面白くてためになる", "体調を心配して医師がひかえる", "頭割りにする", "子どもにもわかる"],
    answerIndex: 0,
    explanation: "基準の用例「安くテ良い品を買う 追加 の上に さらに」と同じ意味・用法なのは「面白くてためになる」。"
  },
  {
    id: "imp-yoho-goi_yoho-40", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "身の程知らず 身分",
    choices: ["身に余る光栄", "身につまされる", "身から出たさび", "身を粉にして働く", "身をもって体験す", "身をきられるよう"],
    answerIndex: 0,
    explanation: "基準の用例「身の程知らず 身分」と同じ意味・用法なのは「身に余る光栄」。"
  },
  {
    id: "imp-yoho-goi_yoho-41", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "どうしたわけか彼は来なかった 理由",
    choices: ["遅刻したわけを言いなさい", "二度と失敗は繰り返すまい", "ものの数に入らない", "彼は勉強ばかりしてい"],
    answerIndex: 0,
    explanation: "基準の用例「どうしたわけか彼は来なかった 理由」と同じ意味・用法なのは「遅刻したわけを言いなさい」。"
  },
  {
    id: "imp-yoho-goi_yoho-42", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "夢を持つ 心の中に抱く",
    choices: ["意義を持つ", "関心を持つ", "仕事を持つ", "交渉を持つ", "責任を持つ", "所帯を持つ"],
    answerIndex: 1,
    explanation: "基準の用例「夢を持つ 心の中に抱く」と同じ意味・用法なのは「関心を持つ」。"
  },
  {
    id: "imp-yoho-goi_yoho-43", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "つまらぬ意地をはる",
    choices: ["あれもこれもと欲をはる", "子どもにもわかる", "問題の解決をはかる", "10年の歳月がながれる"],
    answerIndex: 0,
    explanation: "基準の用例「つまらぬ意地をはる」と同じ意味・用法なのは「あれもこれもと欲をはる」。"
  },
  {
    id: "imp-yoho-goi_yoho-44", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "人通りが少ない",
    choices: ["通りを横切る", "風の通りが悪い", "一通り目を通す", "習った通りに作る", "おっしゃる通りで", "三通りの方法があ"],
    answerIndex: 1,
    explanation: "基準の用例「人通りが少ない」と同じ意味・用法なのは「風の通りが悪い」。"
  },
  {
    id: "imp-yoho-goi_yoho-45", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "みるもの聞くものみな珍しい",
    choices: ["あやしいとみる", "じっと手をみる", "医者が患者をみる", "人物をみる目があ", "読んでみると面白"],
    answerIndex: 1,
    explanation: "基準の用例「みるもの聞くものみな珍しい」と同じ意味・用法なのは「じっと手をみる」。"
  },
  {
    id: "imp-yoho-goi_yoho-46", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "君の経験については問うまい 否定の意思 つもりだ",
    choices: ["二度と失敗は繰り返すまい", "特技というほどのものでもない", "彼は勉強ばかりしてい", "まだ夜が明けない"],
    answerIndex: 0,
    explanation: "基準の用例「君の経験については問うまい 否定の意思 つもりだ」と同じ意味・用法なのは「二度と失敗は繰り返すまい」。"
  },
  {
    id: "imp-yoho-goi_yoho-47", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "果報は寝て待て",
    choices: ["渡して帰る", "書いて覚える", "高くて買えない", "ずっと見ている", "安くておいしい"],
    answerIndex: 1,
    explanation: "基準の用例「果報は寝て待て」と同じ意味・用法なのは「書いて覚える」。"
  },
  {
    id: "imp-yoho-goi_yoho-48", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "仕事に幅をもたせる",
    choices: ["道幅を測る", "声に幅がある", "世間に幅をきかせ", "人間に幅ができる", "積み上げ幅が大き"],
    answerIndex: 3,
    explanation: "基準の用例「仕事に幅をもたせる」と同じ意味・用法なのは「人間に幅ができる」。"
  },
  {
    id: "imp-yoho-goi_yoho-49", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "速達で手紙を出す",
    choices: ["会合に顔を出す", "先方に使いをだす", "受付で名刺を出す", "早急に結論を出す", "ポケットからハン"],
    answerIndex: 1,
    explanation: "基準の用例「速達で手紙を出す」と同じ意味・用法なのは「先方に使いをだす」。"
  },
  {
    id: "imp-yoho-goi_yoho-50", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "山が見えると同じ意味・文法（これマジ頻出！）",
    choices: ["山が青い", "山が招く", "山が連なる", "山がそびえたつ"],
    answerIndex: 1,
    explanation: "基準の用例「山が見えると同じ意味・文法（これマジ頻出！）」と同じ意味・用法なのは「山が招く」。"
  },
  {
    id: "imp-yoho-goi_yoho-51", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "会長の任にあたる",
    choices: ["つらくあたる", "原本にあたる", "捜査にあたる", "福引に当たる", "たき火にあたる"],
    answerIndex: 2,
    explanation: "基準の用例「会長の任にあたる」と同じ意味・用法なのは「捜査にあたる」。"
  },
  {
    id: "imp-yoho-goi_yoho-52", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "病気で休む",
    choices: ["法廷で争う", "次回で終わる", "教室で面談する", "受験準備で忙しい", "制定改革で議論す"],
    answerIndex: 3,
    explanation: "基準の用例「病気で休む」と同じ意味・用法なのは「受験準備で忙しい」。"
  },
  {
    id: "imp-yoho-goi_yoho-53", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "好取組にわく",
    choices: ["風呂がわく", "勇気がわく", "興味がわく", "議論がわく", "地下水がわく"],
    answerIndex: 3,
    explanation: "基準の用例「好取組にわく」と同じ意味・用法なのは「議論がわく」。"
  },
  {
    id: "imp-yoho-goi_yoho-54", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "台風をものともせず出かけた",
    choices: ["ものの数ではない", "もののあわれが感", "ものは言いよう", "ものの１キロと歩", "ものの見事に成功"],
    answerIndex: 0,
    explanation: "基準の用例「台風をものともせず出かけた」と同じ意味・用法なのは「ものの数ではない」。"
  },
  {
    id: "imp-yoho-goi_yoho-55", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "この道は駅に通じている",
    choices: ["四季を通じて温か", "テレビを通じて情", "～に通じている（", "話が通じる"],
    answerIndex: 3,
    explanation: "基準の用例「この道は駅に通じている」と同じ意味・用法なのは「話が通じる」。（No.80の同一問題はD。Bの「テレビを通じて」は媒介の用法で別）"
  },
  {
    id: "imp-yoho-goi_yoho-60", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "勇気がわく",
    choices: ["湯がわく", "麹がわく", "議論がわく", "城内がわく", "非難がわく"],
    answerIndex: 4,
    explanation: "基準の用例「勇気がわく」と同じ意味・用法なのは「非難がわく」。（「感情・感覚が生じる」の意。Eの「非難がわく」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-61", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "一朝ことあるときは、すぐに出動する",
    choices: ["あなたのしたことは許せない", "彼はことを好む性格だ", "私の言うことを聞きなさい", "ことを成し遂げる", "ことの発端は彼の勘違いだった"],
    answerIndex: 1,
    explanation: "基準の用例「一朝ことあるときは、すぐに出動する」と同じ意味・用法なのは「彼はことを好む性格だ」。（「非常事態・事件」の意。Bの「ことを好む（もめごとを好む）」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-63", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "作品に手が入る",
    choices: ["家に泥棒が入る", "弟が大学に入る", "話に気合が入る", "目にゴミが入る", "けんかに仲裁が入る", "部屋にすきま風が入る"],
    answerIndex: 4,
    explanation: "基準の用例「作品に手が入る」と同じ意味・用法なのは「けんかに仲裁が入る」。（「第三者や新要素が加わる・介入する」の意。Eの「仲裁が入る」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-65", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "心の琴線にふれる",
    choices: ["法律にふれる", "異文化にふれる", "過去のことにふれる", "事件の真相にふれる", "人生の機微にふれる"],
    answerIndex: 4,
    explanation: "基準の用例「心の琴線にふれる」と同じ意味・用法なのは「人生の機微にふれる」。（「心や感情に刺激を与える」の意。Eの「機微にふれる」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-68", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "道を説く",
    choices: ["道をつける", "その道の達人", "我が道を行く", "使い道のない小物", "道半ばで断念する", "道にはずれた行い"],
    answerIndex: 5,
    explanation: "基準の用例「道を説く」と同じ意味・用法なのは「道にはずれた行い」。（「道義・道徳・規範」の意。Fの「道にはずれた行い」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-69", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "評判が落ちる",
    choices: ["スピードが落ちる", "株が落ちる", "点数が落ちる", "日が落ちる", "油断が命取りに落ちる"],
    answerIndex: 1,
    explanation: "基準の用例「評判が落ちる」と同じ意味・用法なのは「株が落ちる」。（「価値・評価が下がる」の意。Bの「株が落ちる」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-76", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "留守をあずかる",
    choices: ["家計をあずかる", "辞表をあずかる", "相談にあずかる", "荷物をあずかる", "けんかをあずかる", "おすそ分けにあずかる"],
    answerIndex: 0,
    explanation: "基準の用例「留守をあずかる」と同じ意味・用法なのは「家計をあずかる」。"
  },
  {
    id: "imp-yoho-goi_yoho-77", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "方針が組織の末端まで通る",
    choices: ["中まで火が通る", "まだ20代で通る", "論文が審査に通る", "新しく地下鉄が通る", "つぎつぎと大型車が通る", "英語はたいていの国で通る"],
    answerIndex: 0,
    explanation: "基準の用例「方針が組織の末端まで通る」と同じ意味・用法なのは「中まで火が通る」。"
  },
  {
    id: "imp-yoho-goi_yoho-79", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "知り合いに便宜をはかる",
    choices: ["問題の解決をはかる", "体重をはかる", "役員会にはかる", "百メートル走のタイムをはかる", "敷地面積をはかる"],
    answerIndex: 0,
    explanation: "基準の用例「知り合いに便宜をはかる」と同じ意味・用法なのは「問題の解決をはかる」。"
  },
  {
    id: "imp-yoho-goi_yoho-82", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "事態を重く（見る）",
    choices: ["（見る）目を養う", "成功するでしょう", "垣根をはらう", "販売ルートにのせる"],
    answerIndex: 0,
    explanation: "基準の用例「事態を重く（見る）」と同じ意味・用法なのは「（見る）目を養う」。"
  },
  {
    id: "imp-yoho-goi_yoho-83", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "返答に（つまる）",
    choices: ["金に（つまる）", "人生の機微に（ふれる）", "他店へ客が（ながれる）", "先頭との差が（つまる）"],
    answerIndex: 0,
    explanation: "基準の用例「返答に（つまる）」と同じ意味・用法なのは「金に（つまる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-84", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "抽象的な議題に（ながれる）",
    choices: ["他店へ客が（ながれる）", "人生の機微に（ふれる）", "ゴーヤがつるを（のばす）", "喧嘩に仲裁が（入る）"],
    answerIndex: 0,
    explanation: "基準の用例「抽象的な議題に（ながれる）」と同じ意味・用法なのは「他店へ客が（ながれる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-86", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "作品に手が（入る）",
    choices: ["喧嘩に仲裁が（入る）", "人生の機微に（ふれる）", "間を（つめる）", "先頭との差が（つまる）"],
    answerIndex: 0,
    explanation: "基準の用例「作品に手が（入る）」と同じ意味・用法なのは「喧嘩に仲裁が（入る）」。"
  },
  {
    id: "imp-yoho-goi_yoho-87", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "（まだ）もっと寒くなりそうだ",
    choices: ["（まだ）話すことがある", "子どもにもわかる", "面白くてためになる", "手がかかる"],
    answerIndex: 0,
    explanation: "基準の用例「（まだ）もっと寒くなりそうだ」と同じ意味・用法なのは「（まだ）話すことがある」。"
  },
  {
    id: "imp-yoho-goi_yoho-88", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "心の琴線に（ふれる）",
    choices: ["人生の機微に（ふれる）", "間を（つめる）", "先頭との差が（つまる）", "他店へ客が（ながれる）"],
    answerIndex: 0,
    explanation: "基準の用例「心の琴線に（ふれる）」と同じ意味・用法なのは「人生の機微に（ふれる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-89", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "服の袖が（つまる）",
    choices: ["先頭との差が（つまる）", "迷惑が（かかる）", "人生の機微に（ふれる）", "喧嘩に仲裁が（入る）"],
    answerIndex: 0,
    explanation: "基準の用例「服の袖が（つまる）」と同じ意味・用法なのは「先頭との差が（つまる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-90", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "爪を長く（のばす）",
    choices: ["ゴーヤがつるを（のばす）", "他店へ客が（ながれる）", "先頭との差が（つまる）", "迷惑が（かかる）"],
    answerIndex: 0,
    explanation: "基準の用例「爪を長く（のばす）」と同じ意味・用法なのは「ゴーヤがつるを（のばす）」。"
  },
  {
    id: "imp-yoho-goi_yoho-91", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "着物の丈を（つめる）",
    choices: ["間を（つめる）", "先頭との差が（つまる）", "金に（つまる）", "迷惑が（かかる）"],
    answerIndex: 0,
    explanation: "基準の用例「着物の丈を（つめる）」と同じ意味・用法なのは「間を（つめる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-92", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "こぼれん（ばかり）の笑顔を見せた",
    choices: ["出かける（ばかり）にしてお待ちします", "先方に使いを出す", "遅刻したわけを話す", "歩き通す"],
    answerIndex: 0,
    explanation: "基準の用例「こぼれん（ばかり）の笑顔を見せた」と同じ意味・用法なのは「出かける（ばかり）にしてお待ちします」。"
  },
  {
    id: "imp-yoho-goi_yoho-93", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "圧力が（かかる）",
    choices: ["迷惑が（かかる）", "ゴーヤがつるを（のばす）", "間を（つめる）", "金に（つまる）"],
    answerIndex: 0,
    explanation: "基準の用例「圧力が（かかる）」と同じ意味・用法なのは「迷惑が（かかる）」。"
  },
  {
    id: "imp-yoho-goi_yoho-94", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "1メートル（の）ひも",
    choices: ["半数（の）会員", "半数の会員", "（見る）目を養う", "先に立って働く"],
    answerIndex: 0,
    explanation: "基準の用例「1メートル（の）ひも」と同じ意味・用法なのは「半数（の）会員」。"
  },
  {
    id: "imp-yoho-goi_yoho-95", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "お（さき）にどうぞ",
    choices: ["あきらめが先に立つ", "関心を持つ", "矢面に立つ", "話をきいて疑いがわく"],
    answerIndex: 0,
    explanation: "基準の用例「お（さき）にどうぞ」と同じ意味・用法なのは「あきらめが先に立つ」。"
  },
  {
    id: "imp-yoho-goi_yoho-98", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "君の経験については問うまい",
    choices: ["いくらなんでも行くまい", "今年の冬は雪は降るまい", "二度と失敗は繰り返すまい", "わからないはずはあるまい", "これほど心強い味方もいるまい", "名人といえどもこれはできまい"],
    answerIndex: 2,
    explanation: "基準の用例「君の経験については問うまい」と同じ意味・用法なのは「二度と失敗は繰り返すまい」。"
  },
  {
    id: "imp-yoho-goi_yoho-100", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "洗濯で衣類の丈がつまる",
    choices: ["返す言葉につまる", "煤で煙突がつまる", "餌がのどにつまる", "悲しみで胸がつまる", "仕事の予定がつまる", "先頭との差がつまる"],
    answerIndex: 5,
    explanation: "基準の用例「洗濯で衣類の丈がつまる」と同じ意味・用法なのは「先頭との差がつまる」。"
  },
  {
    id: "imp-yoho-goi_yoho-101", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "一晩寝れば疲れがとれる",
    choices: ["1年に米が2回とれる", "左右のバランスがとれる", "社会に出れば垢がとれる", "全体として調和がとれる", "その川ではアユがとれる", "表面上は賛成ともとれる"],
    answerIndex: 2,
    explanation: "基準の用例「一晩寝れば疲れがとれる」と同じ意味・用法なのは「社会に出れば垢がとれる」。"
  },
  {
    id: "imp-yoho-goi_yoho-102", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "人通りが絶えない",
    choices: ["裏通りを抜ける", "風の通りが悪い", "広い通りに出る", "世間の通りがよい", "ひと通り説明する", "元通りにして返す"],
    answerIndex: 1,
    explanation: "基準の用例「人通りが絶えない」と同じ意味・用法なのは「風の通りが悪い」。"
  },
  {
    id: "imp-yoho-goi_yoho-105", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "再会の誓いで文をむすぶ",
    choices: ["助詞で主語と述語をむすぶ", "巧みな話術で協定をむすぶ", "怒りで真一文字に口をむすぶ", "部長のことばで歓迎会をむすぶ", "インターネットで世界中をむすぶ"],
    answerIndex: 3,
    explanation: "基準の用例「再会の誓いで文をむすぶ」と同じ意味・用法なのは「部長のことばで歓迎会をむすぶ」。"
  },
  {
    id: "imp-yoho-goi_yoho-106", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "こう考えてよかろう",
    choices: ["早く行こうよ", "返事を書こう", "成功するでしょう", "ひとつあげましょう", "さっさとやってもらおう", "行こうが行くまいが私の勝手だ"],
    answerIndex: 2,
    explanation: "基準の用例「こう考えてよかろう」と同じ意味・用法なのは「成功するでしょう」。"
  },
  {
    id: "imp-yoho-goi_yoho-108", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "出番を待って舞台の袖にひかえる",
    choices: ["出発を1週間後にひかえる", "今は立ち入った話はひかえる", "この後にすぐ試験がひかえる", "体調を心配して医師がひかえる", "将来にそなえて無駄な出費をひかえる"],
    answerIndex: 3,
    explanation: "基準の用例「出番を待って舞台の袖にひかえる」と同じ意味・用法なのは「体調を心配して医師がひかえる」。（「舞台の袖にひかえる」は近くで待機する意。Aは「間近に迫る」で別用法）"
  },
  {
    id: "imp-yoho-goi_yoho-109", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "荒れた土地を畑にかえる",
    choices: ["隣の人と席をかえる", "汚れた水槽の水をかえる", "都合により上演時間をかえる", "服装に合わせて髪型をかえる", "レポートの提出で試験にかえる"],
    answerIndex: 2,
    explanation: "基準の用例「荒れた土地を畑にかえる」と同じ意味・用法なのは「都合により上演時間をかえる」。"
  },
  {
    id: "imp-yoho-goi_yoho-110", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "一晩寝れば疲れがとれる（p51と同問）",
    choices: ["1年に米が2回とれる", "左右のバランスがとれる", "社会に出れば角がとれる", "全体として調和がとれる", "その川ではアユがとれる", "表面上は賛成ともとれる"],
    answerIndex: 2,
    explanation: "基準の用例「一晩寝れば疲れがとれる（p51と同問）」と同じ意味・用法なのは「社会に出れば角がとれる」。"
  },
  {
    id: "imp-yoho-goi_yoho-111", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "電話なり手紙なりで知らせる",
    choices: ["私なりの解釈で話す", "何なりと言いなさい", "すぐ人の言うなりになる", "顔を見るなり泣きりつける", "曲がりなりにも店をかまえる"],
    answerIndex: 1,
    explanation: "基準の用例「電話なり手紙なりで知らせる」と同じ意味・用法なのは「何なりと言いなさい」。"
  },
  {
    id: "imp-yoho-goi_yoho-112", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "のぞむところだ（期待する・望む意）",
    choices: ["海にのぞむ家", "別れの場にのぞむ", "落ち着いて交渉にのぞむ", "自立心を子どもにのぞむ", "来賓として式場にのぞむ", "試合に一丸となってのぞむ"],
    answerIndex: 3,
    explanation: "基準の用例「のぞむところだ（期待する・望む意）」と同じ意味・用法なのは「自立心を子どもにのぞむ」。"
  },
  {
    id: "imp-yoho-goi_yoho-113", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "一旦あるとき（「こと」の用法）",
    choices: ["静かに食べること", "食べたことがない", "正しいことを言う", "事件のことは秘密だ", "彼はことを好む性格だ"],
    answerIndex: 4,
    explanation: "基準の用例「一旦あるとき（「こと」の用法）」と同じ意味・用法なのは「彼はことを好む性格だ」。（「一朝ことある時」の「こと」は事変・非常事態。No.61の同一問題と矛盾している）"
  },
  {
    id: "imp-yoho-goi_yoho-114", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "再会の誓いで文をむすぶ（p94と同問）",
    choices: ["助詞で主語と述語をむすぶ", "巧みな話術で協定をむすぶ", "怒りで真一文字に口をむすぶ", "部長のことばで歓迎会をむすぶ", "インターネットで世界中をむすぶ"],
    answerIndex: 3,
    explanation: "基準の用例「再会の誓いで文をむすぶ（p94と同問）」と同じ意味・用法なのは「部長のことばで歓迎会をむすぶ」。"
  },
  {
    id: "imp-yoho-goi_yoho-115", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "弘法にも弘筆の誤り（「にも」の用法）",
    choices: ["私にもください", "ここにもあります", "子どもにもわかる", "十年にも及ぶ努力", "人にも去りけりだ", "紙にもいろいろある"],
    answerIndex: 2,
    explanation: "基準の用例「弘法にも弘筆の誤り（「にも」の用法）」と同じ意味・用法なのは「子どもにもわかる」。"
  },
  {
    id: "imp-yoho-goi_yoho-116", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "彼までが聞いてくれない（p77と同問）",
    choices: ["夢にまで見る", "考えるまでもない", "夜明けまで降り続く", "週末まで待ってください", "言わないまでも考えておく", "とりあえずお礼の気持ちまで"],
    answerIndex: 0,
    explanation: "基準の用例「彼までが聞いてくれない（p77と同問）」と同じ意味・用法なのは「夢にまで見る」。"
  },
  {
    id: "imp-yoho-goi_yoho-118", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "失敗を重ねつつ成長してゆく ていって",
    choices: ["体に悪いと知りつつやめられない", "業績はこの春から好転しつつある", "テレビを見つつアイロンをかける", "何度も確認しつつ書類に記入する", "厚かましいと思いつつ泊めてもら"],
    answerIndex: 3,
    explanation: "基準の用例「失敗を重ねつつ成長してゆく ていって」と同じ意味・用法なのは「何度も確認しつつ書類に記入する」。"
  },
  {
    id: "imp-yoho-goi_yoho-119", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "美容の効果さえある",
    choices: ["名前を呼んでも返事さえない", "朝のあいさつさえ英語で言えない", "上着もないのに雪さえ降ってきた", "今朝のことさえ記憶があいまいだ", "これさえあればほかに何もいらな"],
    answerIndex: 2,
    explanation: "基準の用例「美容の効果さえある」と同じ意味・用法なのは「上着もないのに雪さえ降ってきた」。"
  },
  {
    id: "imp-yoho-goi_yoho-120", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "あのような人を名人と言う 呼ぶに言い換える",
    choices: ["昔は海だったという", "目は口ほどに物を言う", "親のいうことは聞くものだ", "きらいというわけではない", "特技というほどのものでもない", "出かけようというときに邪魔が入"],
    answerIndex: 4,
    explanation: "基準の用例「あのような人を名人と言う 呼ぶに言い換える」と同じ意味・用法なのは「特技というほどのものでもない」。"
  },
  {
    id: "imp-yoho-goi_yoho-121", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "こぼれんばかりの笑顔を見せた",
    choices: ["一日中寝てばかりいる", "高いものばかり身につける", "出かけるばかりにしておまちしま", "儲け話にのったばかりに、損をし", "今ついたばかりで、まだ荷を解い"],
    answerIndex: 2,
    explanation: "基準の用例「こぼれんばかりの笑顔を見せた」と同じ意味・用法なのは「出かけるばかりにしておまちしま」。"
  },
  {
    id: "imp-yoho-goi_yoho-122", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "敷地に柵をまわしてください",
    choices: ["蛇口をまわしてください", "連絡は早くまわしてください", "人を2人ほどまわしてください", "私を受付係にまわしてください", "リボンは二重にまわしてください"],
    answerIndex: 4,
    explanation: "基準の用例「敷地に柵をまわしてください」と同じ意味・用法なのは「リボンは二重にまわしてください」。（「柵をまわす」は周囲に巡らす意。Cの「人をまわす」は差し向ける意で別）"
  },
  {
    id: "imp-yoho-goi_yoho-64", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "抽象的な議論にながれる",
    choices: ["川にごみがながれる", "風で右に矢がながれる", "傷口から血がながれる", "10年の歳月がながれる", "成功の吉報がながれる"],
    answerIndex: 3,
    explanation: "基準の用例「抽象的な議論にながれる」と同じ意味・用法なのは「10年の歳月がながれる」。（「ある状態・傾向に移り変わる」の意。Dの「歳月がながれる」が同じ）"
  },
  {
    id: "imp-yoho-goi_yoho-85", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "評判が（落ちる）",
    choices: ["スピードが落ちる", "子どもにもわかる", "株が落ちる", "けんかに仲裁が入る"],
    answerIndex: 0,
    explanation: "基準の用例「評判が（落ちる）」と同じ意味・用法なのは「スピードが落ちる」。（「評判が落ちる」は価値・評価が下がる意。No.69の同一問題では「株が落ちる」が正答で、こちらと食い違う）"
  },
  {
    id: "imp-yoho-goi_yoho-97", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "まだもっと寒くなりそうだ",
    choices: ["まだ夜が明けない", "まだ雷が鳴っている", "まだ話すことがある", "まだ行ったことがない", "まだこちらのほうがよい", "まだそれほど歩いてない"],
    answerIndex: 0,
    explanation: "基準の用例「まだもっと寒くなりそうだ」と同じ意味・用法なのは「まだ夜が明けない」。（「まだもっと寒くなる」の「まだ」はさらに・これ以上の意。C（まだ話すことがある）の可能性があり要確認）"
  },
  {
    id: "imp-yoho-goi_yoho-99", category: "imiyoho",
    instruction: "次の用例と最も近い意味・用法で使われているものを選びなさい。",
    promptHTML: "できるだけやります",
    choices: ["新しい家ができる", "英語がよくできる", "耳にたこができる", "いつでも入学できる", "思わぬ急用ができる", "体内に免疫ができる"],
    answerIndex: 1,
    explanation: "基準の用例「できるだけやります」と同じ意味・用法なのは「英語がよくできる」。（「できるだけ」の「できる」は可能。D（いつでも入学できる）の可能性があり要確認）"
  },
  {
    id: "imp-nigo-nigo-2", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "安全：危険＝落胆：（　）",
    choices: ["奮起", "汚名", "類似性", "迷う"],
    answerIndex: 0,
    explanation: "「安全：危険＝落胆：（　）」の関係は「対義語」。空欄に入るのは「奮起」。"
  },
  {
    id: "imp-nigo-nigo-3", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "安全：危険＝分析：（　）",
    choices: ["総合", "発奮", "情報量", "感覚"],
    answerIndex: 0,
    explanation: "「安全：危険＝分析：（　）」の関係は「対義語」。空欄に入るのは「総合」。"
  },
  {
    id: "imp-nigo-nigo-4", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "安全：危険＝独自性：（　）",
    choices: ["類似性", "曖昧性", "再現性", "属人性"],
    answerIndex: 0,
    explanation: "「安全：危険＝独自性：（　）」の関係は「対義語」。空欄に入るのは「類似性」。"
  },
  {
    id: "imp-nigo-nigo-5", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "悲観的：楽観的＝保守的：（　）",
    choices: ["進歩的", "急進的", "比較的", "瘀血"],
    answerIndex: 0,
    explanation: "「悲観的：楽観的＝保守的：（　）」の関係は「対義語」。空欄に入るのは「進歩的」。"
  },
  {
    id: "imp-nigo-nigo-6", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "後退：進歩＝衰亡：（　）",
    choices: ["興隆", "辞書", "発奮", "小麦粉"],
    answerIndex: 0,
    explanation: "「後退：進歩＝衰亡：（　）」の関係は「対義語」。空欄に入るのは「興隆」。"
  },
  {
    id: "imp-nigo-nigo-7", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "拡散：収束＝遠心：（　）",
    choices: ["求心", "暖房", "建具", "まゆ"],
    answerIndex: 0,
    explanation: "「拡散：収束＝遠心：（　）」の関係は「対義語」。空欄に入るのは「求心」。"
  },
  {
    id: "imp-nigo-nigo-8", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "安全：危険＝悟る：（　）",
    choices: ["迷う", "小麦粉", "原稿", "犯罪"],
    answerIndex: 0,
    explanation: "「安全：危険＝悟る：（　）」の関係は「対義語」。空欄に入るのは「迷う」。"
  },
  {
    id: "imp-nigo-nigo-9", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "侮る：畏れる＝衰亡：（　）",
    choices: ["興隆", "文芸", "誤解", "総合"],
    answerIndex: 0,
    explanation: "「侮る：畏れる＝衰亡：（　）」の関係は「対義語」。空欄に入るのは「興隆」。"
  },
  {
    id: "imp-nigo-nigo-10", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "漠然：判然＝巧妙：（　）",
    choices: ["稚拙", "法案", "迷う", "聖書"],
    answerIndex: 0,
    explanation: "「漠然：判然＝巧妙：（　）」の関係は「対義語」。空欄に入るのは「稚拙」。"
  },
  {
    id: "imp-nigo-nigo-11", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "露骨：婉曲＝保守的：（　）",
    choices: ["急進的", "進歩的", "比較的", "文芸"],
    answerIndex: 0,
    explanation: "「露骨：婉曲＝保守的：（　）」の関係は「対義語」。空欄に入るのは「急進的」。"
  },
  {
    id: "imp-nigo-nigo-12", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "悲しむ：喜ぶ＝侮る：（　）",
    choices: ["畏れる", "建具", "曖昧性", "総合"],
    answerIndex: 0,
    explanation: "「悲しむ：喜ぶ＝侮る：（　）」の関係は「対義語」。空欄に入るのは「畏れる」。"
  },
  {
    id: "imp-nigo-nigo-13", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "独自：類似＝委細：（　）",
    choices: ["概略", "進歩的", "瘀血", "小麦粉"],
    answerIndex: 0,
    explanation: "「独自：類似＝委細：（　）」の関係は「対義語」。空欄に入るのは「概略」。"
  },
  {
    id: "imp-nigo-nigo-14", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "洋服：衣類＝短歌：（　）",
    choices: ["文芸", "聖書", "暖房", "辞書"],
    answerIndex: 0,
    explanation: "「洋服：衣類＝短歌：（　）」の関係は「包含」。空欄に入るのは「文芸」。"
  },
  {
    id: "imp-nigo-nigo-15", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "書籍：文庫本＝雑誌：（　）",
    choices: ["週刊誌", "再現性", "小麦粉", "聖書"],
    answerIndex: 0,
    explanation: "「書籍：文庫本＝雑誌：（　）」の関係は「包含」。空欄に入るのは「週刊誌」。"
  },
  {
    id: "imp-nigo-nigo-16", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "スポーツ：ゴルフ＝品詞：（　）",
    choices: ["動詞", "違反", "私小説", "奮起"],
    answerIndex: 0,
    explanation: "「スポーツ：ゴルフ＝品詞：（　）」の関係は「包含」。空欄に入るのは「動詞」。"
  },
  {
    id: "imp-nigo-nigo-17", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "スポーツ：ゴルフ＝刊行物：（　）",
    choices: ["年鑑", "典籍", "誤解", "感覚"],
    answerIndex: 0,
    explanation: "「スポーツ：ゴルフ＝刊行物：（　）」の関係は「包含」。空欄に入るのは「年鑑」。"
  },
  {
    id: "imp-nigo-nigo-18", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "内臓：肝臓＝感覚：（　）",
    choices: ["触覚", "発覚", "感覚", "書籍"],
    answerIndex: 0,
    explanation: "「内臓：肝臓＝感覚：（　）」の関係は「包含」。空欄に入るのは「触覚」。"
  },
  {
    id: "imp-nigo-nigo-19", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "音楽：芸術＝小説：（　）",
    choices: ["文学", "聖書", "発覚", "感覚"],
    answerIndex: 0,
    explanation: "「音楽：芸術＝小説：（　）」の関係は「包含」。空欄に入るのは「文学」。"
  },
  {
    id: "imp-nigo-nigo-20", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "文房具：ノート＝書籍：（　）",
    choices: ["聖書", "辞書", "鋼材", "法案"],
    answerIndex: 0,
    explanation: "「文房具：ノート＝書籍：（　）」の関係は「包含」。空欄に入るのは「聖書」。"
  },
  {
    id: "imp-nigo-nigo-21", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "都市ガス：燃料＝障子：（　）",
    choices: ["建具", "本旨", "暖房", "興隆"],
    answerIndex: 0,
    explanation: "「都市ガス：燃料＝障子：（　）」の関係は「包含」。空欄に入るのは「建具」。"
  },
  {
    id: "imp-nigo-nigo-22", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "信用金庫：金融機関＝時価：（　）",
    choices: ["価格", "はさみ", "本旨", "召還"],
    answerIndex: 0,
    explanation: "「信用金庫：金融機関＝時価：（　）」の関係は「包含」。空欄に入るのは「価格」。"
  },
  {
    id: "imp-nigo-nigo-23", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "哺乳類：犬＝爬虫類：（　）",
    choices: ["トカゲ", "汚名", "衣服", "聖書"],
    answerIndex: 0,
    explanation: "「哺乳類：犬＝爬虫類：（　）」の関係は「包含」。空欄に入るのは「トカゲ」。"
  },
  {
    id: "imp-nigo-nigo-24", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "紙：パルプ＝絹糸：（　）",
    choices: ["まゆ", "真実", "辞書", "属人性"],
    answerIndex: 0,
    explanation: "「紙：パルプ＝絹糸：（　）」の関係は「原料」。空欄に入るのは「まゆ」。"
  },
  {
    id: "imp-nigo-nigo-25", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "糊：接着＝石油ストーブ：（　）",
    choices: ["暖房", "文学", "非違", "辞書"],
    answerIndex: 0,
    explanation: "「糊：接着＝石油ストーブ：（　）」の関係は「目的・機能」。空欄に入るのは「暖房」。"
  },
  {
    id: "imp-nigo-nigo-26", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "缶詰：缶切り＝紙：（　）",
    choices: ["はさみ", "誤解", "暖房", "ぞんざい"],
    answerIndex: 0,
    explanation: "「缶詰：缶切り＝紙：（　）」の関係は「道具」。空欄に入るのは「はさみ」。"
  },
  {
    id: "imp-nigo-nigo-27", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "稲：米＝麦：（　）",
    choices: ["小麦粉", "畏れる", "情報量", "奮起"],
    answerIndex: 0,
    explanation: "「稲：米＝麦：（　）」の関係は「加工品」。空欄に入るのは「小麦粉」。"
  },
  {
    id: "imp-nigo-nigo-28", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "綿：布＝鉄：（　）",
    choices: ["鋼材", "職業", "非違", "文芸"],
    answerIndex: 0,
    explanation: "「綿：布＝鉄：（　）」の関係は「加工品」。空欄に入るのは「鋼材」。"
  },
  {
    id: "imp-nigo-nigo-30", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "修理：故障＝治療：（　）",
    choices: ["病気", "奮起", "罪科", "瘀血"],
    answerIndex: 0,
    explanation: "「修理：故障＝治療：（　）」の関係は「原因-結果」。空欄に入るのは「病気」。"
  },
  {
    id: "imp-nigo-nigo-31", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "慢性：急性＝長期：（　）",
    choices: ["短期", "属人性", "衣服", "灰"],
    answerIndex: 0,
    explanation: "「慢性：急性＝長期：（　）」の関係は「対義語」。空欄に入るのは「短期」。"
  },
  {
    id: "imp-nigo-nigo-32", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "編集：文章＝校正：（　）",
    choices: ["原稿", "衣服", "まゆ", "犯罪"],
    answerIndex: 0,
    explanation: "「編集：文章＝校正：（　）」の関係は「動詞-対象」。空欄に入るのは「原稿」。"
  },
  {
    id: "imp-nigo-nigo-33", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "規範：逸脱＝契約：（　）",
    choices: ["違反", "布教", "灰", "総合"],
    answerIndex: 0,
    explanation: "「規範：逸脱＝契約：（　）」の関係は「規則-逸脱」。空欄に入るのは「違反」。"
  },
  {
    id: "imp-nigo-nigo-34", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "斟酌：事情＝忖度：（　）",
    choices: ["意向", "法案", "建築", "触覚"],
    answerIndex: 0,
    explanation: "「斟酌：事情＝忖度：（　）」の関係は「動詞-対象」。空欄に入るのは「意向」。"
  },
  {
    id: "imp-nigo-nigo-35", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "刮目：変化＝瞠目：（　）",
    choices: ["偉業", "職業", "情報量", "触覚"],
    answerIndex: 0,
    explanation: "「刮目：変化＝瞠目：（　）」の関係は「動詞-対象」。空欄に入るのは「偉業」。"
  },
  {
    id: "imp-nigo-nigo-36", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "封印：使用＝凍結：（　）",
    choices: ["変更", "私小説", "価格", "布教"],
    answerIndex: 0,
    explanation: "「封印：使用＝凍結：（　）」の関係は「禁止-対象」。空欄に入るのは「変更」。"
  },
  {
    id: "imp-nigo-nigo-37", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "隠蔽：露見＝偽装：（　）",
    choices: ["発覚", "感覚", "触覚", "急進的"],
    answerIndex: 0,
    explanation: "「隠蔽：露見＝偽装：（　）」の関係は「隠す-現れる」。空欄に入るのは「発覚」。"
  },
  {
    id: "imp-nigo-nigo-38", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "批准：条約＝裁可：（　）",
    choices: ["法案", "急進的", "汚名", "畏れる"],
    answerIndex: 0,
    explanation: "「批准：条約＝裁可：（　）」の関係は「承認-対象」。空欄に入るのは「法案」。"
  },
  {
    id: "imp-nigo-nigo-39", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "担保：履行＝保証：（　）",
    choices: ["品質", "瘀血", "建具", "感覚"],
    answerIndex: 0,
    explanation: "「担保：履行＝保証：（　）」の関係は「保証-対象」。空欄に入るのは「品質」。"
  },
  {
    id: "imp-nigo-nigo-41", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "分類：混在＝定義：（　）",
    choices: ["曖昧性", "再現性", "属人性", "類似性"],
    answerIndex: 0,
    explanation: "「分類：混在＝定義：（　）」の関係は「目的-解消対象」。空欄に入るのは「曖昧性」。"
  },
  {
    id: "imp-nigo-nigo-42", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "牽制：独走＝抑止：（　）",
    choices: ["犯罪", "違反", "稚拙", "発覚"],
    answerIndex: 0,
    explanation: "「牽制：独走＝抑止：（　）」の関係は「制止-対象」。空欄に入るのは「犯罪」。"
  },
  {
    id: "imp-nigo-nigo-43", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "輯佚：散逸＝編纂：（　）",
    choices: ["典籍", "書籍", "興隆", "年鑑"],
    answerIndex: 0,
    explanation: "「輯佚：散逸＝編纂：（　）」の関係は「動詞-対象」。空欄に入るのは「典籍」。"
  },
  {
    id: "imp-nigo-nigo-44", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "制度：恣意性＝手順：（　）",
    choices: ["属人性", "類似性", "再現性", "曖昧性"],
    answerIndex: 0,
    explanation: "「制度：恣意性＝手順：（　）」の関係は「排除-対象」。空欄に入るのは「属人性」。"
  },
  {
    id: "imp-nigo-nigo-45", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "讒毀：名誉＝誣罔：（　）",
    choices: ["真実", "急進的", "汚名", "変更"],
    answerIndex: 0,
    explanation: "「讒毀：名誉＝誣罔：（　）」の関係は「損なう-対象」。空欄に入るのは「真実」。"
  },
  {
    id: "imp-nigo-nigo-46", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "規格：互換性＝手順書：（　）",
    choices: ["再現性", "属人性", "類似性", "曖昧性"],
    answerIndex: 0,
    explanation: "「規格：互換性＝手順書：（　）」の関係は「確保-対象」。空欄に入るのは「再現性」。"
  },
  {
    id: "imp-nigo-nigo-47", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "電気製品：掃除機＝船舶：（　）",
    choices: ["タンカー", "港", "船員", "甲板"],
    answerIndex: 0,
    explanation: "「電気製品：掃除機＝船舶：（　）」の関係は「二語の関係」。空欄に入るのは「タンカー」。"
  },
  {
    id: "imp-nigo-nigo-48", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "覚える：忘れる＝委細：（　）",
    choices: ["概略", "概括", "要綱", "要点"],
    answerIndex: 0,
    explanation: "「覚える：忘れる＝委細：（　）」の関係は「二語の関係」。空欄に入るのは「概略」。"
  },
  {
    id: "imp-nigo-nigo-63", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "陳弁：嫌疑＝雪冤：（　）",
    choices: ["汚名", "規則", "職業", "病気"],
    answerIndex: 0,
    explanation: "「陳弁：嫌疑＝雪冤：（　）」の関係は「二語の関係」。空欄に入るのは「汚名」。"
  },
  {
    id: "imp-nigo-nigo-64", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "瀉下：滞留＝駆瘀：（　）",
    choices: ["瘀血", "情報量", "原稿", "本旨"],
    answerIndex: 0,
    explanation: "「瀉下：滞留＝駆瘀：（　）」の関係は「二語の関係」。空欄に入るのは「瘀血」。"
  },
  {
    id: "imp-nigo-nigo-65", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "翦滅：敵塁＝燼滅：（　）",
    choices: ["残敵", "原稿", "曖昧性", "衣服"],
    answerIndex: 0,
    explanation: "「翦滅：敵塁＝燼滅：（　）」の関係は「二語の関係」。空欄に入るのは「残敵」。"
  },
  {
    id: "imp-nigo-nigo-66", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "弭乱：騒擾＝鎮撫：（　）",
    choices: ["反乱", "主菜", "暖房", "曖昧性"],
    answerIndex: 0,
    explanation: "「弭乱：騒擾＝鎮撫：（　）」の関係は「二語の関係」。空欄に入るのは「反乱」。"
  },
  {
    id: "imp-nigo-nigo-67", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "膺懲：暴戻＝懲戒：（　）",
    choices: ["非違", "急進的", "建具", "動詞"],
    answerIndex: 0,
    explanation: "「膺懲：暴戻＝懲戒：（　）」の関係は「二語の関係」。空欄に入るのは「非違」。"
  },
  {
    id: "imp-nigo-nigo-70", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "按覈：罪状＝鞫問：（　）",
    choices: ["罪科", "情報量", "布教", "瘀血"],
    answerIndex: 0,
    explanation: "「按覈：罪状＝鞫問：（　）」の関係は「二語の関係」。空欄に入るのは「罪科」。"
  },
  {
    id: "imp-nigo-nigo-71", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "注釈：誤読＝プロトタイプ：（　）",
    choices: ["誤解", "書籍", "職業", "違反"],
    answerIndex: 0,
    explanation: "「注釈：誤読＝プロトタイプ：（　）」の関係は「二語の関係」。空欄に入るのは「誤解」。"
  },
  {
    id: "imp-nigo-nigo-72", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "匿名化：識別性＝要約：（　）",
    choices: ["情報量", "典籍", "属人性", "罪科"],
    answerIndex: 0,
    explanation: "「匿名化：識別性＝要約：（　）」の関係は「二語の関係」。空欄に入るのは「情報量」。"
  },
  {
    id: "imp-nigo-nigo-73", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "刎頸：信義＝背馳：（　）",
    choices: ["本旨", "進歩的", "色鉛筆", "瘀血"],
    answerIndex: 0,
    explanation: "「刎頸：信義＝背馳：（　）」の関係は「二語の関係」。空欄に入るのは「本旨」。"
  },
  {
    id: "imp-nigo-nigo-80", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "安全：危険＝圧倒的：（ ）",
    choices: ["比較的", "一時的", "相対的", "断片的"],
    answerIndex: 0,
    explanation: "「安全：危険＝圧倒的：（ ）」の関係は「二語の関係」。空欄に入るのは「比較的」。"
  },
  {
    id: "imp-nigo-nigo-81", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "産業：工業＝鉛筆：（ ）",
    choices: ["色鉛筆", "文具", "筆記", "原稿用紙"],
    answerIndex: 0,
    explanation: "「産業：工業＝鉛筆：（ ）」の関係は「二語の関係」。空欄に入るのは「色鉛筆」。"
  },
  {
    id: "imp-nigo-nigo-82", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "調味料：甘味料＝小説：（ ）",
    choices: ["私小説", "文芸", "作家", "随筆"],
    answerIndex: 0,
    explanation: "「調味料：甘味料＝小説：（ ）」の関係は「二語の関係」。空欄に入るのは「私小説」。"
  },
  {
    id: "imp-nigo-nigo-84", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "辞書：書籍＝障子：（ ）",
    choices: ["建具", "桟（ｻﾝ）", "和紙", "建築"],
    answerIndex: 0,
    explanation: "「辞書：書籍＝障子：（ ）」の関係は「二語の関係」。空欄に入るのは「建具」。"
  },
  {
    id: "imp-nigo-nigo-85", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "解散：集合＝派遣：（ ）",
    choices: ["召還", "帰国", "出向", "召集"],
    answerIndex: 0,
    explanation: "「解散：集合＝派遣：（ ）」の関係は「二語の関係」。空欄に入るのは「召還」。（解散↔集合と同じ対義関係なら派遣↔召還。「召集」は集めることで派遣の対義にならない）"
  },
  {
    id: "imp-nigo-nigo-69", category: "nigo",
    instruction: "（　）に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "大工 :　建築士＝宣教師：(　)",
    choices: ["布教", "病気", "犯罪", "週刊誌"],
    answerIndex: 0,
    explanation: "「大工 :　建築士＝宣教師：(　)」の関係は「二語の関係」。空欄に入るのは「布教」。（例題「大工：建築士」は「大工：建築」の誤り）"
  },
  {
    id: "imp-kuran-kuran-1", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "彼は口数が少ないが、その一言には重みがある。【 】、彼の意見はいつも尊重される。",
    choices: ["すなわち", "あるいは", "なぜなら", "それゆえ"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「それゆえ」。"
  },
  {
    id: "imp-kuran-kuran-2", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "最新技術を導入した【 】、生産性が劇的に向上したわけではなかった。",
    choices: ["にもかかわらず", "ので", "ところ", "ばかりか"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「にもかかわらず」。"
  },
  {
    id: "imp-kuran-kuran-3", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "グローバル化が進む現代において、異文化への理解は【 】重要である。",
    choices: ["かつてなく", "とりわけ", "むしろ", "いまだに"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「とりわけ」。"
  },
  {
    id: "imp-kuran-kuran-4", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "この調査は、対象者のプライバシーに最大限配慮し、【 】慎重に進められた。",
    choices: ["ちなみに", "かつ", "たとえば", "ただし"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「かつ」。"
  },
  {
    id: "imp-kuran-kuran-5", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "彼は会議で鋭い指摘をする。【 】、普段はとても穏やかな人物だ。",
    choices: ["とはいえ", "したがって", "つまり", "さらに"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「とはいえ」。"
  },
  {
    id: "imp-kuran-kuran-6", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "十分に準備を重ねてきた。【 】、本番で実力を発揮できるとは限らない。",
    choices: ["したがって", "しかし", "そして", "なぜなら"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「しかし」。"
  },
  {
    id: "imp-kuran-kuran-7", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "まず結論を述べ、次にその理由を説明し、【 】具体的な事例を挙げる。",
    choices: ["あるいは", "すなわち", "最後に", "ただし"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「最後に」。"
  },
  {
    id: "imp-kuran-kuran-8", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "彼はリーダーとしてチームをまとめる【 】、自らもプレイヤーとして活躍している。",
    choices: ["一方で", "ばかりか", "というより", "にもかかわらず"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「一方で」。"
  },
  {
    id: "imp-kuran-kuran-9", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "この製品はデザインが優れている。【 】、機能性にも改善の余地がある。",
    choices: ["それどころか", "そのうえ", "そのかわり", "その一方で"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「その一方で」。"
  },
  {
    id: "imp-kuran-kuran-10", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "大雨で川が増水した。【 】、下流地域では避難勧告が出された。",
    choices: ["その結果", "その反面", "そのうえ", "そのほか"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「その結果」。"
  },
  {
    id: "imp-kuran-kuran-11", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "いくら便利な道具でも、使い方を間違えれば【 】危険なものになりうる。",
    choices: ["かえって", "まさに", "やはり", "むしろ"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「かえって」。"
  },
  {
    id: "imp-kuran-kuran-12", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "再生可能エネルギーの導入は、環境保護に貢献する。【 】、安定供給が課題だ。",
    choices: ["一方", "以上", "以下", "以前"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「一方」。"
  },
  {
    id: "imp-kuran-kuran-13", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "目標達成は困難とされていたが、彼は【 】それを成し遂げた。",
    choices: ["ついに", "あえて", "まるで", "決して"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「ついに」。"
  },
  {
    id: "imp-kuran-kuran-16", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "全てが流動化し液状化している今日、【 】は不安定性の増大と表裏一体である。",
    choices: ["個人の自律性", "組織への従属", "他者との関係", "自由と選択の拡大"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「自由と選択の拡大」。"
  },
  {
    id: "imp-kuran-kuran-17", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "プレッツェルは英語のブレスレットと【 】の言葉である。",
    choices: ["同義", "同根", "同種", "同等"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「同根」。"
  },
  {
    id: "imp-kuran-kuran-18", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "文明社会の【 】に浴する",
    choices: ["偉業", "栄華", "英知", "恩恵"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「恩恵」。"
  },
  {
    id: "imp-kuran-kuran-20", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "法律の制定のためには、【 】設定されなくてはならない。",
    choices: ["条件が", "対象が", "基準が", "目的が"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「基準が」。"
  },
  {
    id: "imp-kuran-kuran-21", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "どんなに反対されようとも、私は自分の意見を【 】変えるつもりはない。",
    choices: ["けっして", "おそらく", "たぶん", "どうか"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「けっして」。"
  },
  {
    id: "imp-kuran-kuran-23", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "詳しいことが分かり【 】、改めてご連絡いたします。",
    choices: ["しだい", "ながら", "がてら", "とたん"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「しだい」。"
  },
  {
    id: "imp-kuran-kuran-24", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "この仕事は、経験の有無【 】、誰でも応募できる。",
    choices: ["にかかわらず", "はもとより", "はさておき", "に限って"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「にかかわらず」。"
  },
  {
    id: "imp-kuran-kuran-25", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "経済学の視点で犯罪を考えるとき、犯罪を【 】方策としては、便益を減らすことが重要になる。",
    choices: ["軽減する", "処罰する", "追求する", "抑止する"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「抑止する」。"
  },
  {
    id: "imp-kuran-kuran-26", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "もしも生物が進化の過程で（　C　）を生み出せなかったとすれば、地球上に最初に出現した生物はそれと同じものしか繁殖できず、適者生存もなく、環境の激変や外界の致死性要因ですべて絶滅していた可能性が高い。",
    choices: ["子孫", "遺伝子", "多様性", "細胞分裂", "免疫システム", "適"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「多様性」。"
  },
  {
    id: "imp-kuran-kuran-28", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "「教養崩壊」、それは「学力崩壊」とは違った問題である。一方は（　D　）できるような基礎学力の問題という前提で議論されている。しかし教養は数値化できるような能力の問題ではない。",
    choices: ["相対化", "単純化", "抽象化", "定量化", "明確化"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「定量化」。"
  },
  {
    id: "imp-kuran-kuran-29", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "相手の言葉をこちらの言葉に対置させて考える翻訳という営みが、いま著しく弱体化している。それとひきかえに、身のまわりに（　D　）がむやみやたらに増えてきた。",
    choices: ["新語", "擬態語", "ひらがな", "カタカナ語", "電子メール"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「カタカナ語」。"
  },
  {
    id: "imp-kuran-kuran-30", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "いわゆる刑事犯に制裁を科すことには、道義的責任を追求するという倫理的意義がある。一方、行政上の違反に対して、営業許可や運転免許の取り消し、反則金や罰金などの制裁を設ける理由としては、もっぱら、その威嚇的作用によって、（　A　）することであるといえよう。",
    choices: ["公共の福祉を実現", "揚子江や黄河などで", "生産性を高める", "①しかし②病人"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「公共の福祉を実現」。"
  },
  {
    id: "imp-kuran-kuran-31", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "幼児は通常、おとなと一緒に行動しているから、文字を知らなくても直接不便を感じるわけではないが、おとなの行動を観察することをとおして、文字を読むことの（　D　）を知っていく。",
    choices: ["感覚", "感動", "技能", "効用", "長所", "役割"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「効用」。"
  },
  {
    id: "imp-kuran-kuran-32", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "日本の製造業の強みのひとつに、作り手と使い手が商品を介して対話しながら互いが互いを育て、高め合うという関係がある。例えば、日本の鉄鋼業が世界最高の技術力を持つ最大の理由は、日本には鉄鋼のユーザーとして自動車、電機など実力があり（　B　）企業が存在することにある。",
    choices: ["要求水準が高い", "2つ同時に担っていきたい", "印象に残る出来事が多い", "しだい"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「要求水準が高い」。"
  },
  {
    id: "imp-kuran-kuran-33", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "ティッシュペーパーや洗剤など生活に密着した日用品の普及は生活の（　B　）を推し進めたが、やがて人びとは、日用品のひとつひとつを検討して選ぶことによって、自分のライフスタイルが浮かび上がってくることを発見した。そこに新たに、こだわり商品とか付加価値商品という存在が出現する。",
    choices: ["簡略化", "効率化", "多様化", "同質化", "特殊化", "複雑化"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「効率化」。"
  },
  {
    id: "imp-kuran-kuran-34", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "生命は物理化学的な枠組みの中に自らを従わせつつも単に、その熱運動に身をゆだねているわけではなく、そこから複雑な秩序を生み出している。その秩序のありようが貝殻を小石から峻別しているのだ。しかも、生きている頃は、成長に応じてその貝殻も　も拡大できる。つまり、その秩序は（　B　）なものなのだ。",
    choices: ["知的", "動的", "美的", "法則的", "物理学的"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「動的」。"
  },
  {
    id: "imp-kuran-kuran-35", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　B　）ということには、とても深い意味がある。そうするためには、まず、考えていることを整理しなければならない。思考を整理して書き出すだけで、問題が解決してしまうこともある。そればかりか、自分の目標が具体的に表現され、実現するための第一歩を踏み出すことになる。",
    choices: ["解決する", "書き出す", "実現する", "整理する", "踏み出す"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「書き出す」。"
  },
  {
    id: "imp-kuran-kuran-36", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "「荘厳する」とは、本来、知恵や福徳などの善美をもって仏国土や仏・菩薩の身を飾ることをいう。金・銀・瑠璃などの七宝で荘厳されたまばゆいばかりの浄土のイメージは、菩薩や仏堂あるいは教典を美しく厳かに飾りたてることによって（　D　）された。",
    choices: ["芸術化", "視覚化", "装飾化", "抽象化", "通俗化", "普遍化"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「視覚化」。（飾り立てることで目に見える形になるので視覚化。抽象化は逆方向）"
  },
  {
    id: "imp-kuran-kuran-37", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "サイエンスは「全体の構造・性質は部分の相互作用が演出する」という。いわゆる要素還元論である。だから（　C　）を求めて原子から素粒子にたどり着いたのだ。",
    choices: ["全体の実態", "全体の縮小", "全体の部分", "部分の拡大", "部"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「全体の部分」。"
  },
  {
    id: "imp-kuran-kuran-38", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "好評を（）する",
    choices: ["博", "変遷", "振る", "買う"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「博」。"
  },
  {
    id: "imp-kuran-kuran-39", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "試験勉強を（）にする",
    choices: ["なおざり", "しかし", "とらえる", "やいなや"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「なおざり」。"
  },
  {
    id: "imp-kuran-kuran-40", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "世間体を（）",
    choices: ["繕う", "買う", "社会にこれほど浸透しなかっただろう", "効率化"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「繕う」。"
  },
  {
    id: "imp-kuran-kuran-41", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "世界王座は俺のものだと（　）",
    choices: ["うそぶく", "視覚化", "ついに", "やむをえず"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「うそぶく」。"
  },
  {
    id: "imp-kuran-kuran-42", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "長話に（　）する",
    choices: ["辟易", "平易", "逡巡", "結果"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「辟易」。"
  },
  {
    id: "imp-kuran-kuran-43", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "学歴の（　）を改める",
    choices: ["偏重", "管理", "基準が", "無為"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「偏重」。"
  },
  {
    id: "imp-kuran-kuran-44", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "陣頭で采配を（　）",
    choices: ["振る", "その蔵特有の菌が棲息している", "生産性を高める", "とらえる"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「振る」。"
  },
  {
    id: "imp-kuran-kuran-45", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "決算数字を（　）する",
    choices: ["粉飾", "甚大", "振る", "端緒"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「粉飾」。"
  },
  {
    id: "imp-kuran-kuran-46", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "審議が（　）進まない",
    choices: ["遅々として", "けっして", "かえって", "呈して"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「遅々として」。"
  },
  {
    id: "imp-kuran-kuran-47", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "双方の（　）を図る",
    choices: ["融和", "忍従", "しかし", "繕う"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「融和」。"
  },
  {
    id: "imp-kuran-kuran-48", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "法律の（　）を問う",
    choices: ["是非", "偏重", "起算", "かつ"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「是非」。"
  },
  {
    id: "imp-kuran-kuran-49", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　）に値する",
    choices: ["特筆", "逸する", "回復", "無為"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「特筆」。"
  },
  {
    id: "imp-kuran-kuran-50", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "法案の作成に（　）する",
    choices: ["参画", "しかし", "苦慮", "疎か"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「参画」。"
  },
  {
    id: "imp-kuran-kuran-71", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "鳩を単独で飼育していると、その鳩は時期が来ても所定の性行動を行わない。しかし飼育室に鏡を入れておくと、それだけで性欲を発現させるようになる。自分の鏡像を見ることが、［ ］ことから得られる何らかの効果を、代行する形で鳩に与えるのである。",
    choices: ["野生の鳥として育つ", "異性から求められる", "発情の時期を迎える", "他の鳩と共に生きる"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「他の鳩と共に生きる」。"
  },
  {
    id: "imp-kuran-kuran-72", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "世界王座は俺の物だと［　］",
    choices: ["吐く", "たたく", "鳴らす", "うそぶく"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「うそぶく」。"
  },
  {
    id: "imp-kuran-kuran-73", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "環境の改善に［　］を置く",
    choices: ["結論", "主眼", "趣旨", "大意"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「主眼」。"
  },
  {
    id: "imp-kuran-kuran-74", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "溜飲を［　］",
    choices: ["絶つ", "保つ", "重ねる", "下げる"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「下げる」。"
  },
  {
    id: "imp-kuran-kuran-75", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "料理のこつを［　］する",
    choices: ["会得", "合点", "察知", "承知"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「会得」。"
  },
  {
    id: "imp-kuran-kuran-76", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "彼の芸はまさに［　］期を迎えていますね",
    choices: ["円熟", "熟成", "熟達", "成育"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「円熟」。"
  },
  {
    id: "imp-kuran-kuran-77", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "パートナー同伴が［　］だ",
    choices: ["慣例", "恒例", "実例", "定例"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「慣例」。"
  },
  {
    id: "imp-kuran-kuran-78", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "積年の不満が［　］",
    choices: ["かくれる", "くすぶる", "とどまる", "につまる"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「くすぶる」。"
  },
  {
    id: "imp-kuran-kuran-79", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "［ ］ということには、とても深い意味がある。そうするためには、まず、考えていることを整理しなければならない。思考を整理して書き出すだけで、問題が解決してしまうこともある。そればかりか、自分の目標が具体的に表現され、実現するための第一歩を踏み出すことになる。",
    choices: ["解決する", "書き出す", "実現する", "整理する"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「書き出す」。"
  },
  {
    id: "imp-kuran-kuran-80", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "万感胸に［　］",
    choices: ["つまる", "残る", "迫る", "落ちる"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「迫る」。"
  },
  {
    id: "imp-kuran-kuran-81", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "［　］に投ずる事業を企てる",
    choices: ["時好", "時節", "時機", "時間"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「時好」。"
  },
  {
    id: "imp-kuran-kuran-82", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "多くの人は、要らないものを捨てればすっきりする。しかしこれは、処分の［　］が快楽だということであって、処分という行為自体が快楽かどうかという話とは異なる。",
    choices: ["過程", "結果", "決定", "体験"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「結果」。"
  },
  {
    id: "imp-kuran-kuran-83", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "科学は自然の対象を観測し、そこにある種の［ ］を認識し、そこから法則を確立していくわけであるが、その法則は実験におって確かめるというプロセスを絶対的に必要とする。",
    choices: ["可能性", "規則性", "客観性", "相関性"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「規則性」。"
  },
  {
    id: "imp-kuran-kuran-84", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "硬貨は［1］が基本的に現物の地金の［2］と同等でることが重要である。後者があまりに大きくなると地金として売って儲けることができるからだ",
    choices: ["製造費用 価値", "製造費用 加工量", "製造費用 販売量", "表示価格 価値"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「表示価格 価値」。（「後者が大きくなると地金として売って儲かる」＝額面が地金価値を下回ると溶かされる、という文意。前者は表示価格）"
  },
  {
    id: "imp-kuran-kuran-91", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "文中の空所［1］［2］［3］に入れることばの組み合わせとして最も適切なものは、つぎのうちどれか。\n\n古代ギリシャでは、人間は「運命」に支配されていると考えていた。それは人間を支配する「必然性」であるが、それは何かわけのわからないものであり、「神託」を通して知ることができるが、それから逃れようとしても逃れることのできないものであった。人に振りかかる「偶然」と見えるものは、実は必然的な「運命」なのであると古代ギリシャ人は考えた。ギリシャのみならず古代の人々は、宇宙に秩序が存在することを発見し、したがって必然性がものごとを支配することを認めたが、同時に人間が理解できないことも起こることは認めざるをえなかった。しかしそれを些細な乱れとして無視してしまうことができない場合は、それを何か不可解な「必然性」の表れとして、「神意」「因縁」「運命」などと解釈したのであった。それはある意味では［1］を別種の「［2］」と見なすものであり、「［3］」の存在を否定するものであった。純粋の「偶然」、つまり何ら理由なくして発生したり起こったりするものやことの存在を受け入れることは、人間にとって難しいことなのである。",
    choices: ["偶然 偶然 必然", "偶然 必然 偶然", "必然 偶然 必然", "必然 必然 偶然"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「偶然 必然 偶然」。"
  },
  {
    id: "imp-kuran-kuran-92", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "相手方と（　）を通じる",
    choices: ["気脈", "起算", "慣例", "偏重"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「気脈」。"
  },
  {
    id: "imp-kuran-kuran-93", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "口の（　）にのぼる",
    choices: ["端", "特筆", "渡す", "粉飾"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「端」。"
  },
  {
    id: "imp-kuran-kuran-94", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "言葉尻を（　）",
    choices: ["とらえる", "他の鳩と共に生きる", "逸する", "生産性を高める"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「とらえる」。"
  },
  {
    id: "imp-kuran-kuran-95", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "問題解決の（　）をつかむ",
    choices: ["端緒", "起算", "同根", "推移"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「端緒」。"
  },
  {
    id: "imp-kuran-kuran-96", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　）の日々を強いられる",
    choices: ["忍従", "是非", "振る", "付す"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「忍従」。"
  },
  {
    id: "imp-kuran-kuran-97", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　）を得ない説明だ",
    choices: ["要領", "時好", "変遷", "研鑽"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「要領」。"
  },
  {
    id: "imp-kuran-kuran-98", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "遊びに夢中で勉強が（　）になる",
    choices: ["疎か", "もうどれだけの時間が過ぎたのか", "いったんつくられた味覚はなかなか", "規則性"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「疎か」。"
  },
  {
    id: "imp-kuran-kuran-99", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "なお（　）の望みを抱く",
    choices: ["一縷", "慣例", "しかし", "研鑽"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「一縷」。"
  },
  {
    id: "imp-kuran-kuran-100", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "環境の改善に（　）を置く",
    choices: ["主眼", "定義", "恣意性", "渡す"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「主眼」。"
  },
  {
    id: "imp-kuran-kuran-101", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "賛成の（　）が高まる",
    choices: ["気運", "温雅", "粉飾", "ついに"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「気運」。"
  },
  {
    id: "imp-kuran-kuran-102", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "好機を（　）",
    choices: ["逸する", "とらえる", "抑止する", "利かせる"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「逸する」。"
  },
  {
    id: "imp-kuran-kuran-103", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "惨敗を（　）",
    choices: ["喫する", "断る", "迫る", "とらえる"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「喫する」。"
  },
  {
    id: "imp-kuran-kuran-104", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "失地を（　）する",
    choices: ["回復", "定義", "一縷", "定量化"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「回復」。"
  },
  {
    id: "imp-kuran-kuran-106", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　）の的",
    choices: ["垂涎", "規則性", "主眼", "是非"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「垂涎」。"
  },
  {
    id: "imp-kuran-kuran-107", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "（　）を積む",
    choices: ["研鑽", "ついに", "繕う", "同根"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「研鑽」。"
  },
  {
    id: "imp-kuran-kuran-108", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "真相研究が（　）の課題である",
    choices: ["喫緊", "無為", "辟易", "同根"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「喫緊」。"
  },
  {
    id: "imp-kuran-kuran-109", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "契約日から（　）して請求額",
    choices: ["起算", "忍従", "博", "研鑽"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「起算」。"
  },
  {
    id: "imp-kuran-kuran-110", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "にべもなく（　）",
    choices: ["断る", "喫する", "下げる", "生産性を高める"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「断る」。"
  },
  {
    id: "imp-kuran-kuran-111", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "フランス革命後制定されたメートル法は、子午線の長さの 4000 万分の 1 を基本単位とす る。それまでは度量衡の制定の権利は領主にあったため、一存で変更することができた。自然に基づくメートル法は、不変で公正な尺度としてーーーを排除できると考えられたのであっ た。",
    choices: ["恣意性", "規則性", "多様性", "①色②夜行性"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「恣意性」。"
  },
  {
    id: "imp-kuran-kuran-112", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "翻訳される言語の表現力が、受容する言語の表現力を圧倒的に上回っている場合は、翻訳は成立しないであろう。受容する言語に＝＝①＝＝語彙がなければ、それを直接、間接に＝＝②＝＝しか手はない。日本語の場合、多くの西洋外来語がそうであった。",
    choices: ["翻訳する", "ダーウィンは進化論の開祖である", "その蔵特有の菌が棲息している", "とらえる"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「翻訳する」。"
  },
  {
    id: "imp-kuran-kuran-113", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "日本の森林の約 4 割は＝＝①＝＝＝であり、人の手が適切に加えられなければ健全に保てず、環境保全の機能を十分に発揮できない。しかし木材価格の低迷などにより、その＝＝②＝＝が放棄されていることがおおきな問題になっている。",
    choices: ["管理", "起算", "定量化", "時好"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「管理」。"
  },
  {
    id: "imp-kuran-kuran-114", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "硬貨は＝＝1＝＝が基本的に現物の地金の＝＝2＝＝と同等でることが重要である。後者があまりに大きくなると地金として売って儲けることができるからだ",
    choices: ["価値", "表示価格 価値", "気運", "推移"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「価値」。"
  },
  {
    id: "imp-kuran-kuran-115", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "民族性や国民性が＝＝①＝＝に形成されているというと意外に思う人が多いかもしれない。しかし、どんな人種の間にも＝＝②＝＝な知能の差や性格の差はなく、歴史や気候、社会構造の差が国民性を生むのである。",
    choices: ["先天的", "①限定②写実的", "①一時的②持続的", "動的"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「先天的」。"
  },
  {
    id: "imp-kuran-kuran-116", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "留学すべきか長い間〔　〕する",
    choices: ["膠着", "逡巡", "躊躇", "当惑"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「逡巡」。"
  },
  {
    id: "imp-kuran-kuran-117", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "〔　〕な表現に改める",
    choices: ["安易", "簡易", "軽易", "平易"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「平易」。"
  },
  {
    id: "imp-kuran-kuran-118", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "日本で本の売れ行きは年々下がるばかりだが、特に〔　〕の落ち方は著しい",
    choices: ["評論", "学術書", "児童書", "外国文学"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「外国文学」。"
  },
  {
    id: "imp-kuran-kuran-119", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "〔　〕が、ある意味で文学のエッセンスのひとつである",
    choices: ["希望", "ロマン", "意外性", "救いのなさ"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「救いのなさ」。"
  },
  {
    id: "imp-kuran-kuran-120", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "環境の改善に〔　〕を置く",
    choices: ["結論", "主眼", "趣旨", "大意"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「主眼」。"
  },
  {
    id: "imp-kuran-kuran-121", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "無作法を〔　〕",
    choices: ["なだめる", "言い含める", "たしなめる", "説き伏せる"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「たしなめる」。"
  },
  {
    id: "imp-kuran-kuran-122", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "春分の日も秋分の日も昼夜の長さは実際には同じではない。日の出と日の入りの〔　〕にある",
    choices: ["角度", "季節", "時間", "定義"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「定義」。"
  },
  {
    id: "imp-kuran-kuran-123", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "流行の〔　〕をたどる",
    choices: ["変異", "変化", "変遷", "変容"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「変遷」。"
  },
  {
    id: "imp-kuran-kuran-124", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "それは〔　〕見方だ",
    choices: ["突いた", "うがった", "えぐった", "刺さった"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「うがった」。"
  },
  {
    id: "imp-kuran-kuran-125", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "自らが所属している職業集団における規則…〔①〕よりも〔②〕が優先されたためである",
    choices: ["①社会の論理②世間の批判", "①社会の論理②集団の価値観", "①世間の批判②社会の論理", "①世間の批判②集団の価値観"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「①社会の論理②集団の価値観」。"
  },
  {
    id: "imp-kuran-kuran-126", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "文章は一本の線のような構造をなしており、その構造に沿って〔　〕理解するのだ",
    choices: ["知識を使って", "順に読み進めて", "想像を働かせて", "テーマを考えながら"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「順に読み進めて」。"
  },
  {
    id: "imp-kuran-kuran-127", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "引導を〔　〕",
    choices: ["送る", "施す", "譲る", "渡す"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「渡す」。"
  },
  {
    id: "imp-kuran-kuran-128", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "異分野の研究者…相手が望んでいるのはこちらの〔①〕知識であって、〔②〕分野に関する生半可な知識など",
    choices: ["①一般的な②相手方の", "①一般的な②お互いの", "①一般的な②こちらの", "①専門的な②相手方の"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「①専門的な②相手方の」。"
  },
  {
    id: "imp-kuran-kuran-129", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "惨敗を〔　〕",
    choices: ["喫する", "窮する", "屈する", "呈する"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「喫する」。"
  },
  {
    id: "imp-kuran-kuran-130", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "溜飲を〔　〕",
    choices: ["絶つ", "保つ", "重ねる", "下げる"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「下げる」。"
  },
  {
    id: "imp-kuran-kuran-131", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "事態を〔　〕する",
    choices: ["遠慮", "苦慮", "思慮", "浅慮"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「苦慮」。"
  },
  {
    id: "imp-kuran-kuran-132", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "市場は活況を〔　〕いる",
    choices: ["高じて", "生じて", "呈して", "報じて"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「呈して」。"
  },
  {
    id: "imp-kuran-kuran-133", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "ハスやサトイモの葉…階層的微細構造とワックス状化合物の〔　〕によるものである",
    choices: ["化学反応", "自浄作用", "相互作用", "相乗効果"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「相乗効果」。"
  },
  {
    id: "imp-kuran-kuran-134", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "〔　〕ということには、とても深い意味がある…思考を整理して書き出す…",
    choices: ["解決する", "書き出す", "実現する", "整理する"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「書き出す」。"
  },
  {
    id: "imp-kuran-kuran-136", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "先生の不興を〔　〕",
    choices: ["仰ぐ", "頂く", "買う", "請う"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「買う」。"
  },
  {
    id: "imp-kuran-kuran-137", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "生命は…その秩序は〔　〕なものなのだ",
    choices: ["知的", "動的", "美的", "法則的"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「動的」。"
  },
  {
    id: "imp-kuran-kuran-138", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "同じ時間でも、〔　〕時間のほうが長く感じられる傾向がある",
    choices: ["多くのことをした", "何もしないでいた", "印象に残る出来事が多い", "印象に残る出来事が少ない"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「印象に残る出来事が多い」。"
  },
  {
    id: "imp-kuran-kuran-139", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "料理のこつを〔　〕する",
    choices: ["会得", "台頭", "要知", "承知"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「会得」。"
  },
  {
    id: "imp-kuran-kuran-141", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "この界隈で幅を〔　〕",
    choices: ["取る", "広げる", "見せる", "利かせる"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「利かせる」。"
  },
  {
    id: "imp-kuran-kuran-142", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "能や歌舞伎の『型』に見られる…人間の動作を人形芸術のように〔①〕することによって、〔②〕な演技では表現しきれない",
    choices: ["①解放②写実的", "①解放②伝統的", "①限定②写実的", "①限定②伝統的"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「①限定②写実的」。"
  },
  {
    id: "imp-kuran-kuran-143", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "ハンムラビ法典には…〔①〕、古バビロニア王国には〔②〕がほとんどいなかったといわれており",
    choices: ["①しかし②医師", "①しかし②病人", "①このため②医師", "①このため②病人"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「①しかし②病人」。"
  },
  {
    id: "imp-kuran-kuran-144", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "彼の芸はまさに〔　〕期を迎えていますね",
    choices: ["円熟", "熟成", "熟練", "成育"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「円熟」。"
  },
  {
    id: "imp-kuran-kuran-145", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "事態の〔　〕を見守る",
    choices: ["移行", "急変", "推移", "転換"],
    answerIndex: 2,
    explanation: "空欄に入れるのに最も適切なのは「推移」。"
  },
  {
    id: "imp-kuran-kuran-146", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "一笑に〔　〕",
    choices: ["扱う", "処す", "流す", "付す"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「付す」。"
  },
  {
    id: "imp-kuran-kuran-148", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "パートナー同伴が〔　〕だ",
    choices: ["慣例", "恒例", "実例", "定例"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「慣例」。"
  },
  {
    id: "imp-kuran-kuran-149", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "責任の所在を〔　〕にする",
    choices: ["あやふや", "うやむや", "おぼろげ", "でたらめ"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「うやむや」。"
  },
  {
    id: "imp-kuran-kuran-150", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "日本語には同意類義語が多く…「態勢」は〔①〕な状態、「体制」は〔②〕な組織または制度",
    choices: ["①一時的②持続的", "①一時的②断続的", "①持続的②一時的", "①持続的②断続的"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「①一時的②持続的」。"
  },
  {
    id: "imp-kuran-kuran-151", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "昼食と鳥類は…昼の動物は〔①〕から情報を得る…夜の動物は〔②〕",
    choices: ["①味②草食性", "①味②夜行性", "①色②草食性", "①色②夜行性"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「①色②夜行性」。"
  },
  {
    id: "imp-kuran-kuran-153", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "毎日を〔　〕に暮らす",
    choices: ["無為", "無常", "無心", "無敵"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「無為」。"
  },
  {
    id: "imp-kuran-kuran-154", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "鳩を世独で飼育していると…〔　〕ことから得られる何らかの効果を代行する形で場に与える",
    choices: ["野生の鳥として育つ", "異性から求められる", "発情の初期を迎える", "他の鳩とともに生きる"],
    answerIndex: 3,
    explanation: "空欄に入れるのに最も適切なのは「他の鳩とともに生きる」。（鏡像は同種の存在であって異性ではない。No.71の同一問題はD。あわせて「世独」は「単独」、「場に与える」は「鳩に与える」の誤字）"
  },
  {
    id: "imp-kuran-kuran-27", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "19世紀末、土に有用微生物を肥料として与え、作物生産を高めようという企業的試みが世界各地で起こった。微生物肥料の工場生産である。しかし、（　B　）微生物は、いくら土に添加してみても急速に死滅することが多く、この取り組みは相次いで失敗した。",
    choices: ["あらゆる有用な", "生産性を高める", "有用性を失った", "人工"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「生産性を高める」。（文脈が「微生物肥料の工場生産」なので、D（人工的に培養した）が自然。要確認）"
  },
  {
    id: "imp-kuran-kuran-140", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "台風の被害は〔　〕だ",
    choices: ["甚大", "寛大", "穏大", "自由と選択の拡大"],
    answerIndex: 0,
    explanation: "空欄に入れるのに最も適切なのは「甚大」。（選択肢AとDがどちらも「甚大」で重複している）"
  },
  {
    id: "imp-kuran-kuran-152", category: "bunpo",
    instruction: "文中の空欄に入れるのに最も適切な語句を選びなさい。",
    promptHTML: "懸念の不満が〔　〕",
    choices: ["かくれる", "くすぶる", "とどまる", "につまる"],
    answerIndex: 1,
    explanation: "空欄に入れるのに最も適切なのは「くすぶる」。（問題文「懸念の不満」は「積年の不満」の誤字（No.78参照））"
  },
  {
    id: "imp-narabi-narabikae-1", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：旧士族の出身者が　　イ：このプロセスを経て　　ウ：学制の確立であるが　　エ：官僚になっていったのは　　オ：革命的システムの変更のひとつが",
    choices: ["ア→イ→エ→ウ→オ", "ウ→エ→オ→イ→ア", "オ→ウ→イ→エ→ア", "ウ→エ→イ→ア→オ"],
    answerIndex: 2,
    explanation: "正しい順序は「オ→ウ→イ→エ→ア」。"
  },
  {
    id: "imp-narabi-narabikae-2", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：あらぬ方向に　　イ：太陽の重力に　　ウ：太陽の周りを回っても　　エ：飛び去っていかないのは　　オ：秒速30kmという猛スピードで",
    choices: ["オ→ウ→エ→イ→ア", "イ→エ→ウ→ア→オ", "オ→ウ→ア→エ→イ", "イ→ウ→エ→オ→ア"],
    answerIndex: 2,
    explanation: "正しい順序は「オ→ウ→ア→エ→イ」。"
  },
  {
    id: "imp-narabi-narabikae-3", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：残したいと願うものだが　　イ：その作品を百年単位の時間で　　ウ：未来に引き継いでいきたいものを　　エ：昔から変わらずに伝えられてきたものや　　オ：そのためには現在必要なものだけではなく",
    choices: ["ア→ウ→エ→オ→イ", "イ→ア→オ→エ→ウ", "エ→オ→イ→ウ→ア", "エ→ア→オ→イ→ウ"],
    answerIndex: 1,
    explanation: "正しい順序は「イ→ア→オ→エ→ウ」。"
  },
  {
    id: "imp-narabi-narabikae-4", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：日本では　　イ：法典が　　ウ：ヨーロッパと異なり　　エ：長い間　　オ：近代的な",
    choices: ["ア→ウ→エ→オ→イ", "ア→エ→イ→オ→ウ", "イ→ア→エ→オ→ウ", "エ→イ→ア→ウ→オ"],
    answerIndex: 0,
    explanation: "正しい順序は「ア→ウ→エ→オ→イ」。"
  },
  {
    id: "imp-narabi-narabikae-5", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：現在はコンピュータを用いて　　イ：定量的に表現する量的予報は　　ウ：気温や降水量などの気象要素を　　エ：昭和10年代から研究が始まっていたが　　オ：大気の状態を予測する数値予測が",
    choices: ["イ→ア→オ→エ→ウ", "オ→イ→ア→エ→ウ", "ウ→イ→エ→ア→オ", "ウ→エ→オ→ア→イ"],
    answerIndex: 2,
    explanation: "正しい順序は「ウ→イ→エ→ア→オ」。"
  },
  {
    id: "imp-narabi-narabikae-6", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：積み重なった結果として　　イ：自らの記憶であるかのように　　ウ：映像をみせられたりすることが　　エ：記憶に残っていないできごとが　　オ：家族から繰り返し話を聞かされたり",
    choices: ["エ→ア→イ→ウ→オ", "エ→オ→ウ→ア→イ", "エ→ウ→ア→イ→オ", "ア→イ→オ→ウ→エ"],
    answerIndex: 1,
    explanation: "正しい順序は「エ→オ→ウ→ア→イ」。"
  },
  {
    id: "imp-narabi-narabikae-7", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：チューニュと呼ばれる乾燥イモが　　イ：今もジャガイモが盛んに栽培され　　ウ：標高4000mを超す村々では　　エ：中央に位置するペルーやボリビアの　　オ：気温変化を利用して水分を除去した",
    choices: ["エ→オ→イ→ア→ウ", "ウ→イ→オ→ア→エ", "エ→ウ→イ→オ→ア", "エ→イ→ア→ウ→オ"],
    answerIndex: 2,
    explanation: "正しい順序は「エ→ウ→イ→オ→ア」。"
  },
  {
    id: "imp-narabi-narabikae-9", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：直接的な観察や　　イ：抽象的な概念の理解を　　ウ：問題点は　　エ：実験が少なく　　オ：子供たちにとって",
    choices: ["ウ→ア→エ→オ→イ", "オ→エ→ウ→イ→ア", "エ→ア→オ→ウ→イ", "エ→イ→ウ→オ→ア"],
    answerIndex: 0,
    explanation: "正しい順序は「ウ→ア→エ→オ→イ」。"
  },
  {
    id: "imp-narabi-narabikae-11", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：稲作が　　イ：大陸から伝わり　　ウ：本格的な　　エ：主要な生業として　　オ：農耕文化が発展し",
    choices: ["ア→エ→ウ→イ→オ", "オ→エ→ウ→ア→イ", "イ→オ→ア→ウ→エ", "イ→ウ→オ→ア→エ"],
    answerIndex: 3,
    explanation: "正しい順序は「イ→ウ→オ→ア→エ」。"
  },
  {
    id: "imp-narabi-narabikae-14", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：他者との関係の中に　　イ：社会的な　　ウ：深く根ざした　　エ：本質的に　　オ：孤独になれない",
    choices: ["エ→イ→オ→ア→ウ", "オ→エ→ア→イ→ウ", "ア→ウ→イ→エ→オ", "オ→ア→エ→イ→ウ"],
    answerIndex: 0,
    explanation: "正しい順序は「エ→イ→オ→ア→ウ」。"
  },
  {
    id: "imp-narabi-narabikae-15", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "地球に存在する～すぎない。",
    choices: ["水の97.5%は海水であり人間が利用しやすい淡水は2.5%に", "編集するにあたって入門の段階で学ぶべきことをもれなく収めることと順序よく配列することに", "水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「水の97.5%は海水であり人間が利用しやすい淡水は2.5%に」。"
  },
  {
    id: "imp-narabi-narabikae-16", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "火山が隆起してできた海洋島である小笠原諸島は～島として知られている。",
    choices: ["隔絶した環境で進化した固有の生物が多く生息する", "食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている", "表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる", "ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする"],
    answerIndex: 0,
    explanation: "「～」に入るのは「隔絶した環境で進化した固有の生物が多く生息する」。"
  },
  {
    id: "imp-narabi-narabikae-17", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "このテキストを～特に意を用いた。",
    choices: ["編集するにあたって入門の段階で学ぶべきことをもれなく収めることと順序よく配列することに", "水の97.5%は海水であり人間が利用しやすい淡水は2.5%に", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが", "光に照らされた自然界に色彩が作り出されるのはいろいろな事物がそれぞれ固有の光を反射し"],
    answerIndex: 0,
    explanation: "「～」に入るのは「編集するにあたって入門の段階で学ぶべきことをもれなく収めることと順序よく配列することに」。"
  },
  {
    id: "imp-narabi-narabikae-18", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "英国のサッチャー首相によれば～可能な野党の存在である。",
    choices: ["改革を成し遂げるのに欠かせないのは政権交代が", "異なる文化の人たちにも理解できるようにするためにはそれがどういう精神で描かれたかという説明が", "二酸化炭素の吸収源として森林の重要性への認識が", "一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「改革を成し遂げるのに欠かせないのは政権交代が」。"
  },
  {
    id: "imp-narabi-narabikae-19", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "賞味期限の改変、産地の偽造など～こともその背景にある。",
    choices: ["食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている", "ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする", "隔絶した環境で進化した固有の生物が多く生息する", "表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる"],
    answerIndex: 0,
    explanation: "「～」に入るのは「食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている」。"
  },
  {
    id: "imp-narabi-narabikae-20", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "作家は「～」と語った。",
    choices: ["強い物語があって初めて人に伝わり感情に訴えないとメッセージは咀嚼されない", "孟子が勉学の中途で帰省したとき織りかけの布を断って学問も途中でやめれば", "地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは", "すべて機械任せの生活では自らの五感で判断し行動するという生活習慣や訓練を忘れてしまうのでは"],
    answerIndex: 0,
    explanation: "「～」に入るのは「強い物語があって初めて人に伝わり感情に訴えないとメッセージは咀嚼されない」。"
  },
  {
    id: "imp-narabi-narabikae-21", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "地球温暖化の防止のために～かつてないほど高まっている。",
    choices: ["二酸化炭素の吸収源として森林の重要性への認識が", "改革を成し遂げるのに欠かせないのは政権交代が", "水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「二酸化炭素の吸収源として森林の重要性への認識が」。"
  },
  {
    id: "imp-narabi-narabikae-22", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "ある生命科学研究所のチームが～動物実験で突き止めた。",
    choices: ["筋肉を収縮させる働きがあるタンパク質「アクチン」が脳内においては記憶を保持するのに重要な役割を果たすことを", "使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を", "セラミックス系の酸化物をヘリウムで冷やしていって絶対温度で30度になれば超伝導状態になることを", "強い物語があって初めて人に伝わり感情に訴えないとメッセージは咀嚼されない"],
    answerIndex: 0,
    explanation: "「～」に入るのは「筋肉を収縮させる働きがあるタンパク質「アクチン」が脳内においては記憶を保持するのに重要な役割を果たすことを」。"
  },
  {
    id: "imp-narabi-narabikae-23", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "心理学者のフロイトは～ということを発見した。",
    choices: ["無意識のもっている力を発見したばかりでなく自分の発見が他の人々になかなか受け入れられないだろう", "セラミックス系の酸化物をヘリウムで冷やしていって絶対温度で30度になれば超伝導状態になることを", "食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている", "ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする"],
    answerIndex: 0,
    explanation: "「～」に入るのは「無意識のもっている力を発見したばかりでなく自分の発見が他の人々になかなか受け入れられないだろう」。"
  },
  {
    id: "imp-narabi-narabikae-24", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "日本画の象徴的な空間表現が～不可欠です。",
    choices: ["異なる文化の人たちにも理解できるようにするためにはそれがどういう精神で描かれたかという説明が", "改革を成し遂げるのに欠かせないのは政権交代が", "一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが", "水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「異なる文化の人たちにも理解できるようにするためにはそれがどういう精神で描かれたかという説明が」。"
  },
  {
    id: "imp-narabi-narabikae-25", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "メディアの変容は～こともできる。",
    choices: ["表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる", "隔絶した環境で進化した固有の生物が多く生息する", "ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする", "食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている"],
    answerIndex: 0,
    explanation: "「～」に入るのは「表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる」。"
  },
  {
    id: "imp-narabi-narabikae-26", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "万葉集の編纂された～というおよその習慣が決まってきた。",
    choices: ["8世紀の初めには日本語のどの音をどういう漢字で書き表すか", "予防接種がもつ個人防御と社会防衛の効果とワクチンが本来的に内包する副反応による健康被害とのバランスをどのように考えるべきか", "隔絶した環境で進化した固有の生物が多く生息する", "表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる"],
    answerIndex: 0,
    explanation: "「～」に入るのは「8世紀の初めには日本語のどの音をどういう漢字で書き表すか」。"
  },
  {
    id: "imp-narabi-narabikae-27", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "希少な～普通である。",
    choices: ["資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが", "二酸化炭素の吸収源として森林の重要性への認識が", "一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが", "水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが」。"
  },
  {
    id: "imp-narabi-narabikae-28", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "便利な世の中になりましたが～ないでしょうか。",
    choices: ["すべて機械任せの生活では自らの五感で判断し行動するという生活習慣や訓練を忘れてしまうのでは", "地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは", "他人の電子メールを無断で転載したり市販のソフトウエアなどを勝手に複製することは", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「すべて機械任せの生活では自らの五感で判断し行動するという生活習慣や訓練を忘れてしまうのでは」。"
  },
  {
    id: "imp-narabi-narabikae-29", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "降りそそぐ太陽からの～それらが私たちの目に入るからである。",
    choices: ["光に照らされた自然界に色彩が作り出されるのはいろいろな事物がそれぞれ固有の光を反射し", "コンピュータはその内部構造やソフトウェアやコンピュータ言語などを理解した人々だけが", "使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を", "編集するにあたって入門の段階で学ぶべきことをもれなく収めることと順序よく配列することに"],
    answerIndex: 0,
    explanation: "「～」に入るのは「光に照らされた自然界に色彩が作り出されるのはいろいろな事物がそれぞれ固有の光を反射し」。"
  },
  {
    id: "imp-narabi-narabikae-30", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "植物には～あります。",
    choices: ["一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが", "改革を成し遂げるのに欠かせないのは政権交代が", "水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが」。"
  },
  {
    id: "imp-narabi-narabikae-31", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "情報の受け手として～著作権法に反することである。",
    choices: ["他人の電子メールを無断で転載したり市販のソフトウエアなどを勝手に複製することは", "地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは", "すべて機械任せの生活では自らの五感で判断し行動するという生活習慣や訓練を忘れてしまうのでは", "一緒に植えると病気も虫も自然に減りお互いがよく育つという不思議な組み合わせが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「他人の電子メールを無断で転載したり市販のソフトウエアなどを勝手に複製することは」。"
  },
  {
    id: "imp-narabi-narabikae-32", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "年齢・性別・障害の有無など～めざすのがユニバーサルデザインである。",
    choices: ["使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を", "筋肉を収縮させる働きがあるタンパク質「アクチン」が脳内においては記憶を保持するのに重要な役割を果たすことを", "セラミックス系の酸化物をヘリウムで冷やしていって絶対温度で30度になれば超伝導状態になることを", "コンピュータはその内部構造やソフトウェアやコンピュータ言語などを理解した人々だけが"],
    answerIndex: 0,
    explanation: "「～」に入るのは「使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を」。"
  },
  {
    id: "imp-narabi-narabikae-33", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "孟子の母は～これと同様役に立たないと戒めた。",
    choices: ["孟子が勉学の中途で帰省したとき織りかけの布を断って学問も途中でやめれば", "地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは", "強い物語があって初めて人に伝わり感情に訴えないとメッセージは咀嚼されない", "表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる"],
    answerIndex: 0,
    explanation: "「～」に入るのは「孟子が勉学の中途で帰省したとき織りかけの布を断って学問も途中でやめれば」。"
  },
  {
    id: "imp-narabi-narabikae-34", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "1986年にミュラーとペドノルツが～発見した。",
    choices: ["セラミックス系の酸化物をヘリウムで冷やしていって絶対温度で30度になれば超伝導状態になることを", "使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を", "筋肉を収縮させる働きがあるタンパク質「アクチン」が脳内においては記憶を保持するのに重要な役割を果たすことを", "ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする"],
    answerIndex: 0,
    explanation: "「～」に入るのは「セラミックス系の酸化物をヘリウムで冷やしていって絶対温度で30度になれば超伝導状態になることを」。"
  },
  {
    id: "imp-narabi-narabikae-35", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "かつて～操作していた。",
    choices: ["コンピュータはその内部構造やソフトウェアやコンピュータ言語などを理解した人々だけが", "二酸化炭素の吸収源として森林の重要性への認識が", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが", "改革を成し遂げるのに欠かせないのは政権交代が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「コンピュータはその内部構造やソフトウェアやコンピュータ言語などを理解した人々だけが」。"
  },
  {
    id: "imp-narabi-narabikae-36", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "高度経済成長期に入ると、大量に使われた～進行し始めた。",
    choices: ["水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が", "資源をより多く使って作られるものやサービスほどそれらの資源の希少性を反映して高くなるのが", "コンピュータはその内部構造やソフトウェアやコンピュータ言語などを理解した人々だけが", "異なる文化の人たちにも理解できるようにするためにはそれがどういう精神で描かれたかという説明が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「水を排除するのに必要な下水道の整備が追いつかないため川や湖の汚染が」。"
  },
  {
    id: "imp-narabi-narabikae-37", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "経済学の課題のひとつに、～ことがある。",
    choices: ["ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする", "表現手段の変化というにとどまらず思考や記憶の様式、世界観を根底から変えてしまう構造的な契機ととらえる", "食の質にかかわる問題は自分の目や鼻や舌で商品の良しあしを判断できる消費者が少なくなってきている", "隔絶した環境で進化した固有の生物が多く生息する"],
    answerIndex: 0,
    explanation: "「～」に入るのは「ものやサービスの利用をだれかに限定する手段として価格が用いられることが多い理由を明らかにする」。"
  },
  {
    id: "imp-narabi-narabikae-38", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "予防接種についての報道に必要なものは",
    choices: ["予防接種がもつ個人防御と社会防衛の効果とワクチンが本来的に内包する副反応による健康被害とのバランスをどのように考えるべきか", "8世紀の初めには日本語のどの音をどういう漢字で書き表すか", "使用する人の特性をあらかじめ吟味しできるだけ多くの人に適した製品や生活空間の設計を", "異なる文化の人たちにも理解できるようにするためにはそれがどういう精神で描かれたかという説明が"],
    answerIndex: 0,
    explanation: "「～」に入るのは「予防接種がもつ個人防御と社会防衛の効果とワクチンが本来的に内包する副反応による健康被害とのバランスをどのように考えるべきか」。"
  },
  {
    id: "imp-narabi-narabikae-39", category: "bunpo",
    instruction: "文中の「～」に入れるのに最も適切な文を選びなさい。",
    promptHTML: "中世に至るまで、アルプス以北の西欧は",
    choices: ["地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは", "他人の電子メールを無断で転載したり市販のソフトウエアなどを勝手に複製することは", "すべて機械任せの生活では自らの五感で判断し行動するという生活習慣や訓練を忘れてしまうのでは", "孟子が勉学の中途で帰省したとき織りかけの布を断って学問も途中でやめれば"],
    answerIndex: 0,
    explanation: "「～」に入るのは「地中海世界に比べると後進地域であり社会秩序と権威すべての供給源とモデルは」。"
  },
  {
    id: "imp-narabi-narabikae-8", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：アポロ17号が　　イ：最後の有人月面着陸であると　　ウ：現在のところ　　エ：人類による　　オ：宇宙計画上",
    choices: ["エ→ア→オ→ウ→イ", "ウ→エ→オ→ア→イ", "オ→ア→イ→エ→ウ", "ウ→オ→エ→ア→イ"],
    answerIndex: 3,
    explanation: "正しい順序は「ウ→オ→エ→ア→イ」。"
  },
  {
    id: "imp-narabi-narabikae-10", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：様々な形で　　イ：西洋近代の影響を　　ウ：受けながらも　　エ：土着伝統的な要素を　　オ：さまざまに",
    choices: ["エ→ウ→イ→オ→ア", "イ→ウ→エ→ア→オ", "オ→ウ→エ→イ→ア", "オ→エ→イ→ア→ウ"],
    answerIndex: 1,
    explanation: "正しい順序は「イ→ウ→エ→ア→オ」。"
  },
  {
    id: "imp-narabi-narabikae-12", category: "bunpo",
    instruction: "次のア～オを意味が通るように並び替えたとき、正しい順序を選びなさい。",
    promptHTML: "ア：それぞれの生物が　　イ：非常に深い意味を　　ウ：動物の行動において　　エ：生活空間を確保するという　　オ：ことほど左様に",
    choices: ["エ→ア→オ→イ→ウ", "ウ→ア→エ→オ→イ", "ウ→オ→イ→エ→ア", "オ→ア→ウ→イ→エ"],
    answerIndex: 1,
    explanation: "正しい順序は「ウ→ア→エ→オ→イ」。"
  },
];

const CATEGORY_LABELS = {
  nigo: '二語の関係',
  imiyoho: '語句の意味・用法',
  bunpo: '文の並び替え・空欄補充'
};
