import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};

const Stack = createStackNavigator();

export const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          color: 'blue',
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'ホーム',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={24}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>home screen</Text>
        <Button
          title="go to detail"
          onPress={() => navigation.navigate('DetailScreen')}
        />
      </SafeAreaView>
    </View>
  );
};

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text>home screen</Text>
        <Button
          title="go to home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </SafeAreaView>
    </View>
  );
};
