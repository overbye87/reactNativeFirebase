import React, { useState } from 'react';
import {
  Alert, Button, FlatList, ListRenderItem, Text, View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { styles } from './Chat.styles';
import { useTypedSelector } from '../store/store';
import TextInputForm from '../components/TextInputForm';
import useCollectionSnapshot from '../hooks/useCollectionSnapshot';

export enum Collections {
  'messages' = 'messages',
}

const Chat: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);
  const snapshot = useCollectionSnapshot(Collections.messages);

  const signOut = async () => {
    const result = await auth().signOut();
    // Alert.alert('signOut', JSON.stringify(result, null, 2));
  };

  const handleOnSubmit = (value: string) => {
    // Alert.alert('message', value);
    firestore().collection(Collections.messages).add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      displayName: user?.displayName,
      message: value,
      uid: user?.uid,
    })
  };

  console.log(snapshot?.docs)

  type IMessage = {
    message: string;
    displayName: string,
    uid: string,
  }

  const renderItem: ListRenderItem<FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>> = ({ item }) => {
    const message = item.data() as IMessage
    return (
      <View style={{ borderWidth: 1, margin: 5, padding: 5 }}>
        <Text>{message.message}</Text>
      </View>
    )
  };

  return (
    <View style={styles.сontainer}>
      <Text>Chat Page</Text>
      <View style={styles.header}>
        <Text style={{ flexGrow: 1 }}>User: {user?.email}</Text>
        <Button title="SIGN OUT" onPress={signOut} />
      </View>
      <View style={{ flexGrow: 1, width: '100%' }}>
        <Text>Chat List:</Text>
        <FlatList
          data={snapshot?.docs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.chatContainer}>
        <TextInputForm onSubmit={handleOnSubmit} />
      </View>
    </View>
  );
};

export default Chat;
