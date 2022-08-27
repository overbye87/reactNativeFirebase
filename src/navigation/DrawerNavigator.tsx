import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import Chat from '../screens/Chat';

export enum DrawerScreens {
  'Chat'= 'Chat',
  'Settings'= 'Settings',
  'Profile'= 'Profile',
}

export type DrawerStackParamList = {
  [DrawerScreens.Chat]: undefined;
  [DrawerScreens.Settings]: undefined;
  [DrawerScreens.Profile]: undefined;
}

export type RouteDrawerStack<T extends DrawerScreens> =
  RouteProp<DrawerStackParamList, T>;
export type NavigationDrawerStack<T extends DrawerScreens> =
NativeStackNavigationProp<DrawerStackParamList, T>;

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator: React.FC = () => {
  return (
      <Drawer.Navigator
        initialRouteName={DrawerScreens.Chat}
        drawerContent={CustomDrawer}
      >
        <Drawer.Screen
          name={DrawerScreens.Chat}
          component={Chat}
        />
        <Drawer.Screen
          name={DrawerScreens.Settings}
          component={Chat}
        />
        <Drawer.Screen
          name={DrawerScreens.Profile}
          component={Chat}
        />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
