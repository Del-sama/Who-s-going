import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Button from './Button';

const image = 'https://goo.gl/Xhb1Jr';

const HomeScreen = () => {
    return (
        <ImageBackground
            style={styles.homeScreenBackgroundImage}
            source={{ uri: image }}
            resizeMode='cover'
        >
            <LinearGradient
                colors={['#000000', '#00405C', '#003E5A', '#003B59', '#003454','#003153', 'transparent']}
                style={styles.backgroundLinearGradient}
            />
            <View>
                <Text style={styles.appName}>
                    Who's going?
                </Text>
                <Text style={styles.appDescription}>
                    Find events people are {"\n"} attending and connect
                </Text>
                <Button
                    backgroundColor='#1DA1F2'
                    text='Connect with Twitter'
                    borderColor='#1DA1F2'
                    iconName='twitter'
                />
                <Button
                    backgroundColor='#3B5998'
                    text='Connect with Facebook'
                    borderColor='#3B5998'
                    iconName='facebook-f'
                />
                <Button
                    backgroundColor='#983B59'
                    text='Connect with Location'
                    borderColor='#983B59'
                    iconName='map-marker'
                />
            </View>
        </ImageBackground>
      );
}

const styles = StyleSheet.create({
    homeScreenBackgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 36,
        marginBottom: '15%',
        color: '#ffffff',
        fontFamily: 'DroidSans',

    },
    appDescription: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: '40%',
        color: '#ffffff',
        fontFamily: 'Lato-Italic',
    },
    backgroundLinearGradient: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.6
    }
  });

export default HomeScreen;
