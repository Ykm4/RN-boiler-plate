import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {UserInfo} from './UserInfo';
import {SignOut} from './SignOut';
import {DrawerItem} from './DrawerItem';
import {Preferences} from './Preferences';

type Props = DrawerContentComponentProps<DrawerContentOptions>;

const drawerItems = {
  home: {
    label: 'Home',
    icon: 'home-outline',
  },
  profile: {
    label: 'Profile',
    icon: 'account-outline',
  },
  bookmark: {
    label: 'Bookmarks',
    icon: 'bookmark-outline',
  },
  setting: {
    label: 'Settings',
    icon: 'bookmark-outline',
  },
  support: {
    label: 'Support',
    icon: 'account-check-outline',
  },
};

export const CustomDrawerContent = (props: Props) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((value) => !value);
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <UserInfo />
          <Drawer.Section style={styles.drawerSection}>
            {Object.values(drawerItems).map((item, index) => (
              <DrawerItem
                key={index}
                label={item.label}
                icon={item.icon}
                navigation={props.navigation}
              />
            ))}
          </Drawer.Section>
          <Preferences isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </View>
      </DrawerContentScrollView>
      <SignOut />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
});
