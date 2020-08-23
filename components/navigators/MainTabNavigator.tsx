import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ExploreScreen} from '../screens/ExploreScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DetailStackNavigator} from './DetailStackNavigator';

type Props = {};

const Tab = createBottomTabNavigator();

export const MainTabNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        // tabStyle: {backgroundColor: 'tomato'},
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackNavigator}
        options={{
          tabBarLabel: '詳細',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'プロフィール',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Icon name="ios-aperture" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
