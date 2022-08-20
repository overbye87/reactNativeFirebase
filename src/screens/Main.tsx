import React, { useEffect, useState } from 'react';
import {
  Alert, Button, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationAppStack } from '../navigation/AppNavigation';
import { styles } from './Main.styles';

const Main: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const { navigate } = useNavigation<NavigationAppStack<'Main'>>();

  const hello = () => {
    console.log('>>> hello');
    Alert.alert('Hello', 'OK');
  };

  useEffect(() => {

  }, []);

  // const login = async () => {
  //   try {
  //     console.log('try');
  //     auth().onAuthStateChanged((userState) => {
  //       setUser(userState);
  //       if (loading) {
  //         setLoading(false);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.сontainer}>
      <Text>This is Main Page</Text>
      <View style={styles.separator} />
      <Button title="CHAT PAGE" onPress={() => navigate('Chat')} />
      <View style={styles.separator} />
      {/* <Button title="LOGIN" onPress={login} /> */}
      <View style={styles.separator} />
      <Button title="HELLO" onPress={hello} />
      {/* <Text>{JSON.stringify(user, null, 2)}</Text> */}
    </View>
  );
};

export default Main;
