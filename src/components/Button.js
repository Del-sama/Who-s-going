import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ text, backgroundColor, borderColor}) => {
    return (
        <TouchableOpacity style={[
            styles.buttonStyle,
            backgroundColor={backgroundColor},
            borderColor={borderColor}]
            }>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        // fontFamily: 'Lato',
    },
    buttonStyle: {
        // flex: 1,
        // alignSelf: 'stretch',
        // backgroundColor: '#fff',
        borderRadius: 1,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    // icon: {
    //     width: 50,
    //     height: 50,
    //     backgroundColor: '#ffffff'
    // }
});

export default Button;