import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './Button';

const image = 'https://goo.gl/Xhb1Jr'

const HomeScreen = () => {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={{ uri: image }}
        >
            <Text style={styles.name}>
                Who's going?
            </Text>

            <Text style={styles.description}>
                Find events people are {"\n"} attending and connect
            </Text>
            <Icon.Button name="facebook" backgroundColor="#3b5998">
                Login with Facebook
            </Icon.Button>
            {/* <Button
                backgroundColor='#1DA1F2'
                text='Connect with Twitter'
                borderColor='#1DA1F2'>
                <Icon name="twitter" size={25} color="#bf1313" />
            </Button> */}
            <Button
                backgroundColor='#3B5998'
                text='Connect with Facebook'
                borderColor='#3B5998'/>
            <Button
                backgroundColor='#983B59'
                text='Connect with Location'
                borderColor='#983B59'/>
        </ImageBackground>

      );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // backgroundColor: '#00405C',
    },
    name: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 36,
        // fontFamily: 'Droid Sans'
    },
    description: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 18,
    },
    icon: {
        width: '100px',
        height: '100px'
    }

  });

export default HomeScreen;