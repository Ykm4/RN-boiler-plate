import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Drawer} from 'react-native-paper';
import {DrawerNavigationEventMap} from '@react-navigation/drawer/lib/typescript/src/types';
import {NavigationHelpers} from '@react-navigation/native';

type Props = {
  label: string;
  icon: string;
  navigation: NavigationHelpers<
    Record<string, object>,
    DrawerNavigationEventMap
  >;
};

export const DrawerItem = ({label, icon, navigation}: Props) => {
  return (
    <Drawer.Item
      label={label}
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      onPress={() => {
        navigation.navigate(label);
      }}
    />
  );
};
