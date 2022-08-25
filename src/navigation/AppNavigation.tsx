import React, { useEffect } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import CommonNavigator, { CommonStackParamList } from './CommonNavigator';
import ProtectedNavigator, { ProtectedStackParamList } from './ProtectedNavigator';
import { useTypedDispatch, useTypedSelector } from '../store/store';
import { setLoading, setUser } from '../store/app/appSlice';

export enum AppScreens {
  'CommonNavigator'= 'CommonNavigator',
  'ProtectedNavigator'= 'ProtectedNavigator',
}

export type AppStackParamList = {
 [AppScreens.CommonNavigator]: { screen: keyof CommonStackParamList; },
 [AppScreens.ProtectedNavigator]: { screen: keyof ProtectedStackParamList; },
};

export type AppScreenKeys = keyof AppStackParamList;
export type RouteAppStack<T extends AppScreenKeys> =
  RouteProp<AppStackParamList, T>;
export type NavigationAppStack<T extends AppScreenKeys> =
  NativeStackNavigationProp<AppStackParamList, T>;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);
  const loading = useTypedSelector((store) => store.app.loading);
  const dispatch = useTypedDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    dispatch(setUser(user));
    if (loading) {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {
          !user
            ? (
              <AppStack.Screen
                name={AppScreens.CommonNavigator}
                component={CommonNavigator}
                options={{ headerShown: false }}
              />
            )
            : (
              <AppStack.Screen
                name={AppScreens.ProtectedNavigator}
                component={ProtectedNavigator}
                options={{ headerShown: false }}
              />
            )
        }
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
