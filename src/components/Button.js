import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/stylesheet';

const Button = ({ text, backgroundColor, borderColor, iconName}) => {
    return (
        <TouchableOpacity style={[
            styles.buttonStyle,
            backgroundColor={backgroundColor},
            borderColor={borderColor}]
            }>
            <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                    <Icon
                        name={iconName}
                        size={25}
                        color="#ffffff"
                        style={styles.buttonIconStyle}
                    />
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
