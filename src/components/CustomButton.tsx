/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './CustomButton.styles';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, props.style]}
    >
      {props.loading ? <ActivityIndicator size="small" color="gray" /> : <Text>{props.title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  loading: false,
};
