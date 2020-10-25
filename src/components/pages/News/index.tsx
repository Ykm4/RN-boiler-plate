import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PAGE_NAMES_HOME } from '../../../const';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../declarations';

type Props = {
  navigation: StackNavigationProp<
    HomeStackParamList,
    typeof PAGE_NAMES_HOME.NEWS
  >;
};

export const News = ({ navigation }: Props) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>home screen</Text>
        <Button
          title="go to detail"
          onPress={() => navigation.navigate(PAGE_NAMES_HOME.NEWS_DETAIL)}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
