import React, { useState } from 'react';
import {
  Alert, Button, Text, View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { styles } from './Chat.styles';
import { useTypedSelector } from '../store/store';
import TextInputForm from '../components/TextInputForm';

const Chat: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);

  const mescol = firestore().collection('messages');

  const signOut = async () => {
    const result = await auth().signOut();
    // Alert.alert('signOut', JSON.stringify(result, null, 2));
  };

  const handleOnSubmit = (value: string) => {
    Alert.alert('message', value);
  };

  return (
    <View style={styles.сontainer}>
      <Text>This is Chat Page</Text>
      <Button title="SIGN OUT" onPress={signOut} />
      <View style={styles.chatContainer}>
        <TextInputForm onSubmit={handleOnSubmit} />
      </View>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default Chat;
