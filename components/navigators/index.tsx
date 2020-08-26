import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainTabNavigator} from './MainTabNavigator';
import {CustomDrawerContent} from '../screens/DrawerContent/DrawerContent';
import {SupportScreen} from '../screens/SupportScreen';
import SettingScreen from '../screens/SettingScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import {RootStackNavigator} from './RootStackNavigator';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    // Drawer.Navigatorが受け取るpropsをDrawerContentにそのまま流している
    // drawerContentにはReact elementを渡す事でdrawerの見た目をカスタマイズ出来る
    // <Drawer.Navigator
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}>
    //   <Drawer.Screen name="HomeDrawer" component={MainTabNavigator} />
    //   <Drawer.Screen name="Support" component={SupportScreen} />
    //   <Drawer.Screen name="Setting" component={SettingScreen} />
    //   <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
    // </Drawer.Navigator>
    <RootStackNavigator />
  );
};
