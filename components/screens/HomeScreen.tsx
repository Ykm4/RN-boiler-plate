import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type Props = {};

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>home screen</Text>
        <Button
          title="go to detail"
          onPress={() => navigation.navigate('Detail')}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
