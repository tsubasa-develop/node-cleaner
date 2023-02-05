# node-cleaner

指定したディレクトリ内の node_modules を検索し、対話式に削除します。

https://user-images.githubusercontent.com/94446930/216807461-b6fb6175-2d41-45d0-a907-f17d1745d575.mov

### インストール
```
npm install -g node-lib-cleaner
```

### 使い方
```
node-cleaner ~/Your/Projects/Root [options]
```

### オプション
| 書式 | 概要 | 初期値 |
| :--- | :--- | :---: |
| --check | node_modules検索のみを行うモードで実行します | false |
| -l | 削除確認するnode_modulesの数値上限を設定 | 5 |
| --force | 削除確認を割愛し、強制的に削除を行います | false |
| --su | superuserにてファイル検索/削除を行います (非推奨) | false |
