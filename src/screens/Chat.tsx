import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationAppStack } from '../navigation/AppNavigation';
import { styles } from './Chat.styles';

const Chat: React.FC = () => {
  const { navigate } = useNavigation<NavigationAppStack<'Chat'>>();
  return (
    <View style={styles.сontainer}>
      <Text>This is Chat Page</Text>
      <Button title="MAIN PAGE" onPress={() => navigate('Main')} />
    </View>
  );
};

export default Chat;
