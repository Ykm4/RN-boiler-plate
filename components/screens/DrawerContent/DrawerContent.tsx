import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Drawer,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = DrawerContentComponentProps<DrawerContentOptions>;

export const CustomDrawerContent = (props: Props) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((value) => !value);
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{uri: 'https://reactnavigation.org/img/spiro.svg'}}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>Kuma</Title>
                <Caption style={styles.caption}>@kumasuke</Caption>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                13
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => {}}
            />
            <Drawer.Item
              label="Profile"
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <Drawer.Item
              label="Bookmarks"
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              onPress={() => {}}
            />
            <Drawer.Item
              label="Settings"
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Setting');
              }}
            />
            <Drawer.Item
              label="Support"
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          label="Sign out"
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
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
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
