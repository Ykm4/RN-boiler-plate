import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type Props = {};

export const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>support screen</Text>
        <Button
          title="go to home"
          onPress={() => navigation.navigate('HomeScreen')}
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