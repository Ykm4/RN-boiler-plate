import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ITNews } from '../components/pages/ITNews';
import { PAGE_NAME_TAB } from './const/pagename';
import { NewsTabParamList } from './declaration';
import { EntertainmentNews } from '../components/pages/EntertainmentNews';

const Tab = createMaterialTopTabNavigator<NewsTabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={PAGE_NAME_TAB.IT_NEWS} component={ITNews} />
      <Tab.Screen
        name={PAGE_NAME_TAB.ENTERTAINMENT_NEWS}
        component={EntertainmentNews}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  root: {},
});

/**
 * Root.Navigatorのheaderをnoneにした事でTabのHeaderにSafeAreaViewが効いていない。
 * → NavigationContainer直下にSafeAreaViewを起きRootNavigatorと並列にする事で解決した
 */
