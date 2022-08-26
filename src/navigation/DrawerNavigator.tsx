import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Chat from '../screens/Chat';

export enum DrawerScreens {
  'Chat'= 'Chat',
}

export type DrawerStackParamList = {
  [DrawerScreens.Chat]: undefined;
}

type ScreenKeys = keyof DrawerStackParamList;
export type RouteDrawerStack<T extends ScreenKeys> =
  RouteProp<DrawerStackParamList, T>;
export type NavigationDrawerStack<T extends ScreenKeys> =
NativeStackNavigationProp<DrawerStackParamList, T>;

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator: React.FC = () => {
  return (
      <Drawer.Navigator initialRouteName={DrawerScreens.Chat}>
        <Drawer.Screen name={DrawerScreens.Chat} component={Chat} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
