/* eslint-disable react/jsx-props-no-spreading */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import DrawerUserItem from './DrawerUserItem';

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const signOut = async () => {
    const result = await auth().signOut();
    // Alert.alert('signOut', JSON.stringify(result, null, 2));
  };
  return (
    <>
      <DrawerUserItem />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => { Alert.alert('Help', 'Help yourself'); }}
        />
        <DrawerItem
          label="Sign out"
          onPress={signOut}
        />
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawer;
