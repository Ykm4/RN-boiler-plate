import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../declarations';
import { PAGE_NAMES_HOME } from '../../../const';
import { useSelector } from '../../../redux/store';

type Props = {
  navigation: StackNavigationProp<
    HomeStackParamList,
    typeof PAGE_NAMES_HOME.COUNTER
  >;
};

export function Counter({ navigation }: Props) {
  const count = useSelector((state) => state.counter);
  return (
    <View style={styles.root}>
      <Text>counter</Text>
      <Text>{count.number}</Text>
      <Button
        title="home画面へ"
        onPress={() => navigation.navigate(PAGE_NAMES_HOME.NEWS)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
