/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './CustomTextInput.styles';

interface Props extends TextInputProps {}

const CustomTextInput: React.FC<Props> = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  );
};

export default CustomTextInput;
