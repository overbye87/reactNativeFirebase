/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Alert, Text, View,
} from 'react-native';
import { useFormik } from 'formik';

import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import { styles } from './SignUpForm.styles';

const initialValues = {
  email: 'test@test.com',
  password: '123456',
};

export type ISignUpForm = typeof initialValues

type Props = {
  onSubmit: (values: ISignUpForm) => void;
  loading?: boolean;
}

const SignUpForm: React.FC<Props> = (props) => {
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
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
      />
      <CustomTextInput
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

export default SignUpForm;

SignUpForm.defaultProps = {
  loading: false,
};
