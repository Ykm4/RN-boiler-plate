import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './drawer';

const { Navigator, Screen } = createStackNavigator();

export const RootNavigator = () => {
  return (
    // headerModeをnoneにしないとStackNavigatorが持つデフォルトのheaderが一番上にスタックされる
    <Navigator headerMode="none">
      <Screen name="Drawer" component={DrawerNavigator} />
    </Navigator>
  );
};
