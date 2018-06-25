import React from 'react';
import { Text, View, ImageBackground, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Button from './Button';
import styles from '../styles/stylesheet';

const image = 'https://goo.gl/Xhb1Jr'

const HomeScreen = () => {
    return (
        <ImageBackground
            style={styles.homeScreenBackgroundImage}
            source={{ uri: image }}
            resizeMode= 'cover'
        >
            <LinearGradient
                colors={['#000000','#00405C', '#003E5A', '#003B59', '#003454','#003153', 'transparent']}
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

export default HomeScreen;
