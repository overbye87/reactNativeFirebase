/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import {
  Alert, Button, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationAppStack } from '../navigation/AppNavigation';
import { styles } from './Main.styles';
import LogInForm, { ILogInForm } from '../components/LogInForm';

const Main: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const { navigate } = useNavigation<NavigationAppStack<'Main'>>();

  const hello = () => {
    console.log('>>> hello');
    Alert.alert('Hello', 'OK');
  };

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  const userAuth = auth().currentUser;

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        // Alert.alert('signOut', 'User signed out!')
      });
  };

  const login = async (values: ILogInForm) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleOnSubmit = (values: ILogInForm) => {
    login(values);
    // Alert.alert('SUBMIT', JSON.stringify(values, null, 2));
  };

  return (
    <View style={styles.сontainer}>
      <Text>This is Main Page</Text>
      <View style={styles.separator} />
      <Button title="CHAT PAGE" onPress={() => navigate('Chat')} />
      <View style={styles.separator} />
      {/* <Button title="LOGIN" onPress={login} />
      <View style={styles.separator} /> */}
      <LogInForm onSubmit={handleOnSubmit} />
      <Button title="SIGN OUT" onPress={signOut} />
      <View style={styles.separator} />
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default Main;
