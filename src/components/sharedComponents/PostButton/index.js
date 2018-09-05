import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ onPress, text }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonStyle}
  >
    <Text style={styles.textStyle}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
