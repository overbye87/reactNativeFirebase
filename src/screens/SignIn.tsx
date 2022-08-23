import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SignInForm, { ISignInForm } from '../components/SignInForm';
import { styles } from './SignIn.styles';
import { useTypedSelector } from '../store/store';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const user = useTypedSelector((state) => state.app.user);
  const handleSignIn = async (values: ISignInForm) => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <View style={styles.сontainer}>
      <Text>Sign In</Text>
      <SignInForm onSubmit={handleSignIn} loading={loading} />
    </View>

  );
};

export default SignIn;
