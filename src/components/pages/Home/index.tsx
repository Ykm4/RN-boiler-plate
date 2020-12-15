import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/declaration';
import { PAGE_NAME_ROOT } from '../../../navigators/const/pagename';
import { LargeItem } from './LargeItem';

type Props = {
  navigation: StackNavigationProp<
    RootStackParamList,
    typeof PAGE_NAME_ROOT.HOME
  >;
};

export function Home({ navigation }: Props) {
  const [count, setCount] = useState(0);
  console.log('render parent');
  return (
    <SafeAreaView style={styles.root}>
      <Text>home</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate(PAGE_NAME_ROOT.TAB_NEWS)}>
        <Text style={styles.btn}>Navigate to Tab</Text>
      </TouchableHighlight>
      <View style={styles.header}>
        <Text style={styles.text}>Parent</Text>
        <View style={styles.row}>
          <Text style={styles.count}>{`count: ${count}`}</Text>
          <Button
            onPress={() => setCount(count + 1)}
            title="親コンポーネントの状態を更新"
          />
        </View>
      </View>
      {/* Large, Middle, Smallコンポーネントが入れ子になっている */}
      <LargeItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 20,
  },
  btn: {
    backgroundColor: 'aqua',
    textAlign: 'center',
    marginTop: 20,
    width: 200,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
});
