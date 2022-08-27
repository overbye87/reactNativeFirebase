import React, { useEffect } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import CommonNavigator, { CommonScreens } from './CommonNavigator';
import { useTypedDispatch, useTypedSelector } from '../store/store';
import { setLoading, setUser } from '../store/app/appSlice';
import DrawerNavigator, { DrawerScreens } from './DrawerNavigator';

export enum AppScreens {
  'CommonNavigator' = 'CommonNavigator',
  'DrawerNavigator' = 'DrawerNavigator',
}

export type AppStackParamList = {
  [AppScreens.CommonNavigator]: { screen: CommonScreens; },
  [AppScreens.DrawerNavigator]: { screen: DrawerScreens; },
};

export type RouteAppStack<T extends AppScreens> =
  RouteProp<AppStackParamList, T>;
export type NavigationAppStack<T extends AppScreens> =
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
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {
          !user
            ? (
              <AppStack.Screen
                name={AppScreens.CommonNavigator}
                component={CommonNavigator}
              />
            )
            : (
              <AppStack.Screen
                name={AppScreens.DrawerNavigator}
                component={DrawerNavigator}
              />
            )
        }
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
