import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import SignInForm, { ISignInForm } from '../components/SignInForm';
import { styles } from './SignIn.styles';
import { useTypedSelector } from '../store/store';
import CustomButton from '../components/CustomButton';
import { NavigationAppStack, AppScreenKeys, AppScreens } from '../navigation/AppNavigation';
import { CommonScreens } from '../navigation/CommonNavigator';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation<NavigationAppStack<AppScreenKeys>>();
  const [loading, setLoading] = useState(false);
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
      <SignInForm onSubmit={handleSignIn} loading={loading} />
      <Text>or</Text>
      <CustomButton
        style={styles.createAccauntButton}
        title="CREATE ACCAUNT"
        onPress={() => navigate(AppScreens.CommonNavigator, { screen: CommonScreens.SignUp })}
      />
    </View>

  );
};

export default SignIn;
