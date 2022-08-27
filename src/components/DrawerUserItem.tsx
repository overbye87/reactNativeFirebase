import React from 'react';
import { Text, View } from 'react-native';
import { useTypedSelector } from '../store/store';
import CustomButton from './CustomButton';
import { styles } from './DrawerUserItem.styles';

const DrawerUserItem: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);
  return (
    <View style={styles.сontainer}>
      <View style={styles.avatar} />
      <View style={styles.header}>
        <Text>
          User:
          {' '}
          {user?.email}
        </Text>
      </View>

    </View>
  );
};

export default DrawerUserItem;
