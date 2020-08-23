import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Drawer, Switch, TouchableRipple} from 'react-native-paper';

type Props = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const Preferences = ({isDarkTheme, toggleTheme}: Props) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
