/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Alert, Button, TextInput, View,
} from 'react-native';
import { useFormik } from 'formik';

import { styles } from './LogInForm.styles';

const initialValues = {
  email: 'test@test.com',
  password: '123456',
};

export type ILogInForm = typeof initialValues

type Props = {
  onSubmit: (values: ILogInForm) => void;
}

const LogInForm: React.FC<Props> = (props) => {
  const onSubmit = (values: ILogInForm) => {
  };

  const formik = useFormik({
    initialValues,
    onSubmit: props.onSubmit,
  });

  return (
    <View>
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
      <Button title="SUBMIT" onPress={() => formik.handleSubmit()} />
    </View>
  );
};

export default LogInForm;
