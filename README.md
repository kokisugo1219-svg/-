# SPI言語トレーニング

SPIテストセンターの「言語」分野に特化した、自分専用の学習用Webアプリです。
ビルド不要の静的HTML/CSS/JavaScriptのみで動作します。

## 使い方

ローカルでブラウザから `index.html` を直接開くか、簡易サーバーを立てて開いてください。

```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

GitHub Pages で公開する場合は、リポジトリの Settings > Pages でこのブランチ（または main）を
公開ソースに設定すれば、そのままアクセスできます。

## 機能

- 出題分野: 二語の関係 / 語句の意味・用法 / 文の並び替え・空欄補充
- 5問・10問・20問・全問から出題数を選択可能
- 正解・不正解を即時フィードバック＋解説付きで表示
- 正誤履歴を `localStorage` に保存し、分野ごとの正答率を表示
- 直近で間違えた問題だけを出題する「苦手問題の復習」モード

## 問題を追加・編集する

問題データは `js/questions.js` の `QUESTIONS` 配列にあります。1問は以下の形式です。

```js
{
  id: 'nigo-021',                // ユニークなID
  category: 'nigo',              // 'nigo' | 'imiyoho' | 'bunpo'
  instruction: '設問の指示文',
  promptHTML: '出題内容(HTML可)',
  choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4', '選択肢5'],
  answerIndex: 0,                // choices内の正解のインデックス
  explanation: '解説文',
}
```

配列に追記するだけで、アプリ側の分野一覧・出題・復習機能に自動的に反映されます。
