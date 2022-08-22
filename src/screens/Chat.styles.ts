import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  chat: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
  footer: {
    marginHorizontal: 20,
  },
});
