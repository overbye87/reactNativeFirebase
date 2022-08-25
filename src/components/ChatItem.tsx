/* eslint-disable react/destructuring-assignment */
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React from 'react';
import {
  Alert, Text, TouchableOpacity, View,
} from 'react-native';
import { styles } from './ChatItem.styles';
import CustomButton from './CustomButton';

export interface IMessage extends FirebaseFirestoreTypes.DocumentData {
  message: string;
  displayName: string;
  email: string;
  uid: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

type Props = {
  item: FirebaseFirestoreTypes.QueryDocumentSnapshot;
}

const ChatItem: React.FC<Props> = (props) => {
  const documentData = props.item.data() as IMessage;
  console.log(documentData);

  const handleDelete = () => {
    console.log(props.item.id);
    const docRef = props.item.ref;
    docRef.delete();
  };

  const handleOnPress = () => {
    Alert.alert(props.item.id, JSON.stringify(documentData, null, 2));
  };
  if (documentData.createdAt) {
    const date = new Date(
      documentData.createdAt.seconds * 1000
      + documentData.createdAt.nanoseconds / 1000,
    );
  }
  return (
    <TouchableOpacity style={styles.сontainer} onPress={handleOnPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          {/* <Text>{date?.toDateString()}</Text> */}
          <Text>{documentData.message}</Text>
        </View>
        <CustomButton
          style={{ width: 40, backgroundColor: undefined }}
          onPress={handleDelete}
          title="✖"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
