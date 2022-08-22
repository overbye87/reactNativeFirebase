/* eslint-disable react/destructuring-assignment */
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ChatItem.styles';

type IMessage = {
  message: string;
  displayName: string;
  email: string;
  uid: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

type Props = {
  message: IMessage;
}

const ChatItem: React.FC<Props> = (props) => {
  const date = new Date(props.message.createdAt.seconds * 1000);
  return (
    <View style={styles.сontainer}>
      <Text>{date.toDateString()}</Text>
      <Text>{props.message.message}</Text>
    </View>
  );
};

export default ChatItem;
