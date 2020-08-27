import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from '../../navigators';
import {ActivityIndicator} from 'react-native';

export const DefaultLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authText = useMemo(
    () => ({
      signIn: () => {
        setUserToken('test');
        setIsLoading(false);
      },
      signOut: () => {},
      signUp: () => {},
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setUserToken('test');
      setIsLoading(false);
    }, 1000);
  }, [userToken]);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
