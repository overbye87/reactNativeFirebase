import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Chat from '../screens/Chat';

export type AppStackParamList = {
  Main: undefined;
  Chat: undefined;
};

type ScreenKeys = keyof AppStackParamList;
export type RouteAppStack<T extends ScreenKeys> = RouteProp<
  AppStackParamList,
  T
>;
export type NavigationAppStack<T extends ScreenKeys> =
  NativeStackNavigationProp<AppStackParamList, T>;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false, orientation: 'portrait_up' }}
        />
        <AppStack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false, orientation: 'portrait_up' }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
