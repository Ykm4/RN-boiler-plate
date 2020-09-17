import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../Context';

type Props = {};

export const SignOut = ({}) => {
  const {signOut} = useContext(AuthContext);
  return (
    <Drawer.Section style={styles.bottomDrawerSection}>
      <Drawer.Item
        label="Sign out"
        icon={({color, size}) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() => signOut()}
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
