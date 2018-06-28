import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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

const styles = StyleSheet.create({
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        flex:2
    },
    buttonStyle: {
        borderRadius: 1,
        borderWidth: 1,
        padding: 6,
        margin: 6,
        justifyContent:'center',
        alignItems:'center',
        width: '90%'
    },
    buttonViewStyle: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonIconStyle :{
        alignSelf:'center',
        letterSpacing: 15
    }
  });

export default Button;
