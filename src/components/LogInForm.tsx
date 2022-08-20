import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './LogInForm.styles';

const LogInForm = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={password}
      />
    </View>
  );
};

export default LogInForm;
