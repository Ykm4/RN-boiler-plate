import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigator } from './HomeStackNavigator';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SafeAreaView>
        <Text style={{ color: 'red' }}>home screen</Text>
      </SafeAreaView>
    </View>
  );
};

// <Stack.Screen name="Home" component={Home} />

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};
