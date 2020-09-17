import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from '../../navigators';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../Context';

export const DefaultLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const initialLogInState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKE':
        return {
          ...prevState,
          isLoading: false,
        };
      case 'LOGIN':
        return {};
      case 'LOGOUT':
        return {};
      case 'REGISTER':
        return {};
    }
  };

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken('test');
        setIsLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      signUp: () => {
        setUserToken('test');
        setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [userToken]);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLoading ? <Loading /> : <RootNavigator userToken={userToken} />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
