import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../declarations';
import { PAGE_NAMES_HOME } from '../../../const';

type Props = {
  navigation: StackNavigationProp<
    HomeStackParamList,
    typeof PAGE_NAMES_HOME.NEWS_DETAIL
  >;
};

export const NewsDetail = ({ navigation }: Props) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>home screen</Text>
        <Button
          title="go to home"
          onPress={() => navigation.navigate(PAGE_NAMES_HOME.NEWS)}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
