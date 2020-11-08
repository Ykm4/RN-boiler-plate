## iOS

npxコマンドでtemplateを作成する前に`node`と`watchman`を入れる必要がある

※ 公式曰くnodeのversionはnodebrewなどで管理した方が良い

```bash
brew install node
brew install watchman
```

### React Native Command Line Interface

React Native公式のCLIをグローバル環境にインストールするのはおすすめされていない。

そのため公式では`npx`コマンドを用いて最新バージョンのCLIを使用する事をおすすめしている。

> もしも過去にreact-native-cliパッケージをグローバルにインストールした事があるなら、予期せぬ問題を引き起こす可能性があるので削除した方が良い。

## React Native with TypeScript

公式がtemplate用のコマンドを用意してくれているので下記のコマンドを叩くだけでボイラープレートが作成される。

```bash
$ npx react-native init MyApp --template react-native-template-typescript
```

## プロジェクトを立ち上げる

インストールが完了したら下記コマンドをターミナルに入力する事でシミューレーターが立ち上がる。

```bash
$ cd poject

$ yarn ios or  npx react-native run-ios
```
