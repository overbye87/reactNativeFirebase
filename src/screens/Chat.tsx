import React, { useState } from 'react';
import {
  Alert, FlatList, ListRenderItem, Text, View,
} from 'react-native';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { styles } from './Chat.styles';
import { useTypedSelector } from '../store/store';
import TextInputForm from '../components/TextInputForm';
import useCollectionSnapshot from '../hooks/useCollectionSnapshot';
import ChatItem, { IMessage } from '../components/ChatItem';
import CustomButton from '../components/CustomButton';

export enum Collections {
  'messages' = 'messages',
}

const Chat: React.FC = () => {
  const user = useTypedSelector((store) => store.app.user);
  const snapshot = useCollectionSnapshot(Collections.messages);

  const handleOnSubmit = (value: string) => {
    // Alert.alert('message', value);
    firestore().collection(Collections.messages).add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      displayName: user?.displayName,
      message: value,
      uid: user?.uid,
    })
  };

  const renderItem: ListRenderItem<
    FirebaseFirestoreTypes.QueryDocumentSnapshot<
      FirebaseFirestoreTypes.DocumentData>> = ({ item }) => {
    return (
      <ChatItem item={item} />
    )
  };

  return (
    <View style={styles.сontainer}>
      <View style={styles.chat}>
        <FlatList
          data={snapshot?.docs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          nestedScrollEnabled
        />
      </View>
      <View style={styles.footer}>
        <TextInputForm onSubmit={handleOnSubmit} />
      </View>
    </View>
  );
};

export default Chat;
