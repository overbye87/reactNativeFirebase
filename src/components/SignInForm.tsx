/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Alert, Button, TextInput, View,
} from 'react-native';
import { useFormik } from 'formik';

import { styles } from './SignInForm.styles';

const initialValues = {
  email: 'test@test.com',
  password: '123456',
};

export type ISignInForm = typeof initialValues

type Props = {
  onSubmit: (values: ISignInForm) => void;
}

const SignInForm: React.FC<Props> = (props) => {
  const onSubmit = (values: ISignInForm) => {
  };

  const formik = useFormik({
    initialValues,
    onSubmit: props.onSubmit,
  });

  const isEmpty = (str: string) => {
    return (!str || str.length === 0);
  };

  return (
    <View style={styles.сontainer}>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
      />
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        onBlur={formik.handleBlur('password')}
      />
      <Button
        title="SIGN IN"
        onPress={() => formik.handleSubmit()}
        disabled={isEmpty(formik.values.email) || isEmpty(formik.values.password)}
      />
    </View>
  );
};

export default SignInForm;
