## install React Navigation

```bash
yarn add @react-navigation/native
```

React Navigationに依存するパッケージをinstallする
これをinstallしなければwarningエラーが出てアプリが動かない

```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

RN 0.6.0以上のバージョンであればlinkを自動的にしてくれるので`react-native link`コマンドは不要になるが、iosアプリを開発しているのであれば`npx pod-insall ios`が必要になる

依存パッケージをインストールせずにアプリを立ち上げると下記のエラーが出て画面に何も表示されないことがあるが

これは一度アプリを落として再度`yarn ios`コマンドでアプリを立ち上げると解消される
```
Module AppRegistry is not a registered callabel module (calling runApplication)
```