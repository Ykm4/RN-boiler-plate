import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { News } from '../components/pages/News';
import { NewsDetail } from '../components/pages/NewsDetail';
import colors from '../components/utils/styles';
import { HomeStackParamList } from '../declarations';
import { LeftHeaderIcon } from '../components/atoms/LeftHeaderIcon';
import { PAGE_NAMES_HOME } from '../const';
import { Counter } from '../components/pages/Counter';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={PAGE_NAMES_HOME.COUNTER}
      screenOptions={navigatorScreenOptions}>
      <Stack.Screen
        name={PAGE_NAMES_HOME.NEWS}
        component={News}
        options={{
          title: 'ホーム',
          headerLeft: (props) => <LeftHeaderIcon {...props} />,
        }}
      />
      <Stack.Screen
        name={PAGE_NAMES_HOME.NEWS_DETAIL}
        component={NewsDetail}
        options={{
          headerBackTitle: '戻る',
        }}
      />
      <Stack.Screen
        name={PAGE_NAMES_HOME.COUNTER}
        component={Counter}
        options={{
          headerBackTitle: '戻る',
        }}
      />
    </Stack.Navigator>
  );
};

const navigatorScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.main,
  },
  headerTintColor: 'red',
  headerTitleStyle: {
    color: 'blue',
    fontWeight: 'bold',
  },
};
