import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';

type Props = {};

const Stack = createStackNavigator();

export const DetailStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          color: 'blue',
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: '詳細',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={24}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
