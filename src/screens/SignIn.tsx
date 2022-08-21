import React from 'react';
import { Alert, Text, View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SignInForm, { ISignInForm } from '../components/SignInForm';
import { styles } from './SignIn.styles';

const SignIn: React.FC = () => {
  const handleSignIn = async (values: ISignInForm) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        values.email.toString() || 'email',
        values.password.toString() || 'password',
      );
      console.info(userCredential);
    } catch (error) {
      console.error(error);
      Alert.alert(
        (error as FirebaseAuthTypes.NativeFirebaseAuthError).code,
        (error as FirebaseAuthTypes.NativeFirebaseAuthError).message,
      );
    }
  };

  return (
    <View style={styles.сontainer}>
      <Text>Sign In</Text>
      <SignInForm onSubmit={handleSignIn} />
    </View>

  );
};

export default SignIn;
