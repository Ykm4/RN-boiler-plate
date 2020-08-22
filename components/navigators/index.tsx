import React, {cloneElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SafeAreaView>
        <Text style={{color: 'red'}}>home screen</Text>
      </SafeAreaView>
    </View>
  );
};
const Stack = createStackNavigator();
export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
