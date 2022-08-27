import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AppScreens, NavigationAppStack } from '../navigation/AppNavigation';
import { CommonScreens } from '../navigation/CommonNavigator';
import { styles } from './SignUp.styles';

const SignUp = () => {
  const { navigate, goBack } = useNavigation<NavigationAppStack<AppScreens>>();
  return (
    <View style={styles.сontainer}>
      <CustomButton
        style={styles.backButton}
        title="BACK"
        onPress={goBack}
      />
    </View>
  );
};

export default SignUp;
