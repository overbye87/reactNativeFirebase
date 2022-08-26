import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './HamburgerLines.styles';

const HamburgerLines: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.сontainer}
    >
      <View style={[styles.line, styles.color]} />
      <View style={[styles.line]} />
      <View style={[styles.line, styles.color]} />
      <View style={[styles.line]} />
      <View style={[styles.line, styles.color]} />
    </TouchableOpacity>
  );
};

export default HamburgerLines;
