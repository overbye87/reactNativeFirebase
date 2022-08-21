import React from 'react';
import {
  Alert, Button, Text, View,
} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { styles } from './Chat.styles';
import { useTypedSelector } from '../store/store';

const Chat: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);
  const signOut = async () => {
    const result = await auth().signOut();
    // Alert.alert('signOut', JSON.stringify(result, null, 2));
  };
  return (
    <View style={styles.сontainer}>
      <Text>This is Chat Page</Text>
      <Button title="SIGN OUT" onPress={signOut} />
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default Chat;
