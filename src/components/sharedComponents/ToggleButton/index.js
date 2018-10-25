import React from 'react';
import {
  Text, TouchableOpacity, View, Image,
} from 'react-native';

import styles from './styles';


const ToggleButton = ({ onPress, text, source }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonStyle}
  >
    <View style={{ flexDirection: 'row', padding: 15 }}>
      <Text style={[styles.textStyle, { flex: 1 }]}>
        {text}
      </Text>
      <Image
        source={source}
        style={{ paddingTop: 20 }}
        resizeMode="contain"
      />
    </View>

  </TouchableOpacity>
);

export default ToggleButton;
