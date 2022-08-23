/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Alert, View,
} from 'react-native';
import { useFormik } from 'formik';

import { styles } from './SignInForm.styles';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';

const initialValues = {
  email: 'test@test.com',
  password: '123456',
};

export type ISignInForm = typeof initialValues

type Props = {
  onSubmit: (values: ISignInForm) => void;
  loading?: boolean;
}

const SignInForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit: props.onSubmit,
  });

  const isEmpty = (str: string) => {
    return (!str || str.length === 0);
  };

  return (
    <View style={styles.сontainer}>
      <CustomTextInput
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
      />
      <CustomTextInput
        style={styles.input}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        onBlur={formik.handleBlur('password')}
      />
      <CustomButton
        title="SIGN IN"
        onPress={props.loading ? undefined : () => formik.handleSubmit()}
        loading={props.loading}
        disabled={isEmpty(formik.values.email) || isEmpty(formik.values.password)}
      />
    </View>
  );
};

export default SignInForm;

SignInForm.defaultProps = {
  loading: false,
};
