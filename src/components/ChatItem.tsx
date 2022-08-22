/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View } from 'react-native';

type IMessage = {
  message: string;
  displayName: string;
  uid: string;
}

type Props = {
  message: IMessage;
}

const ChatItem: React.FC<Props> = (props) => {
  return (
    <View style={{ borderWidth: 1, margin: 5, padding: 5 }}>
      <Text>{props.message.message}</Text>
    </View>
  );
};

export default ChatItem;
