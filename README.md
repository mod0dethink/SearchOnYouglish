# Search on YouGlish

Webページ上で選択したテキストを右クリックして、[YouGlish](https://youglish.com/) で英語の発音を検索できる Chrome 拡張機能です。

## インストール

1. `chrome://extensions/` を開く
2. 右上の「デベロッパー モード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリックし、このリポジトリのフォルダを選択する

## 使い方

1. ページ上で調べたい単語やフレーズを選択する
2. 右クリックして「Search selected text on YouGlish」を選ぶ
3. 新しいタブで YouGlish の検索結果が開く

選択テキストの前後の空白や改行は自動で整形されます。

## ファイル構成

- `manifest.json` — 拡張機能の設定
- `background.js` — コンテキストメニューと検索処理
- `icons/` — 拡張機能のアイコン
