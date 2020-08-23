import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Caption, Paragraph, Title} from 'react-native-paper';

type Props = {};

export const UserInfo = ({}) => {
  return (
    <Fragment>
      <View style={styles.userInfoSection}>
        <View style={styles.userImage}>
          <Avatar.Image
            source={{uri: 'https://reactnavigation.org/img/spiro.svg'}}
            size={50}
          />
          <View style={styles.userName}>
            <Title style={styles.title}>Kuma</Title>
            <Caption style={styles.caption}>@kumasuke</Caption>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>13</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
  userImage: {
    flexDirection: 'row',
    marginTop: 15,
  },
  userName: {
    marginLeft: 15,
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
});
