import React from 'react';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

export const SignOut = ({}) => {
  return (
    <Drawer.Section style={styles.bottomDrawerSection}>
      <Drawer.Item
        label="Sign out"
        icon={({color, size}) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() => {}}
      />
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
