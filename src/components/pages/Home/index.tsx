import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/declaration';
import { PAGE_NAME_ROOT } from '../../../navigators/const/pagename';

type Props = {
  navigation: StackNavigationProp<
    RootStackParamList,
    typeof PAGE_NAME_ROOT.HOME
  >;
};

export function Home({ navigation }: Props) {
  return (
    <View style={styles.root}>
      <Text>home</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate(PAGE_NAME_ROOT.TAB_NEWS)}>
        <Text style={styles.btn}>Navigate to Tab</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'aqua',
    textAlign: 'center',
    marginTop: 20,
    width: 200,
  },
});
