/* eslint-disable react/jsx-props-no-spreading */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Alert, Text } from 'react-native';

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => { Alert.alert('Help', 'Help yourself'); }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
