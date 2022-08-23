/* eslint-disable react/destructuring-assignment */
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React from 'react';
import { Text, View } from 'react-native';
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
  const documentData = props.item.data();

  const handleDelete = () => {
    console.log(props.item.id);
    const docRef = props.item.ref;
    docRef.delete();
  };

  const date = new Date(documentData.createdAt.seconds * 1000);
  return (
    <View style={styles.сontainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{date.toDateString()}</Text>
          <Text>{documentData.message}</Text>
        </View>
        <CustomButton title="X" style={{ width: 40 }} onPress={handleDelete} />
      </View>
    </View>
  );
};

export default ChatItem;
