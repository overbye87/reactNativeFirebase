/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './TextInputForm.styles';

type Props = {
  onSubmit: (value: string) => void;
}

const TextInputForm: React.FC<Props> = (props) => {
  const [value, setValue] = useState('Hello my dear frend!');

  const handleOnPress = () => {
    props.onSubmit(value);
  };
  return (
    <View style={styles.сontainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
      />
      <Button title="SEND" onPress={handleOnPress} />
    </View>
  );
};

export default TextInputForm;
