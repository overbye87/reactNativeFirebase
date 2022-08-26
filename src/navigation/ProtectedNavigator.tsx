/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Chat from '../screens/Chat';
import HamburgerLines from '../components/HamburgerLines';

export type ProtectedStackParamList = {
  Chat: undefined;
}

type ScreenKeys = keyof ProtectedStackParamList;
export type RouteProtectedStack<T extends ScreenKeys> =
  RouteProp<ProtectedStackParamList, T>;
export type NavigationProtectedStack<T extends ScreenKeys> =
  NativeStackNavigationProp<ProtectedStackParamList, T>;

const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

const ProtectedNavigator: React.FC = () => {
  return (
    <ProtectedStack.Navigator>
      <ProtectedStack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          headerRight: (props) => <HamburgerLines {...props}/>,
        }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedNavigator;
