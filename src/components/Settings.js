import React, { Component } from 'react'
import { View,
         Text,
         TouchableHighlight,
         StyleSheet} from 'react-native'

import { Card } from 'react-native-elements'
import FontAwesomeIcons  from 'react-native-vector-icons/FontAwesome';

const settings = [
    {
        name: 'Facebook',
        logo: 'facebook-square'
    },
    {
        name: 'Twitter',
        logo: 'twitter'
    },
    {
        name: 'Location',
        logo: 'map-marker'
    }
];


const colors = {
    Facebook: '#3B5998',
    Twitter: '#1DA1F2',
    Location: '#983B59'
}


const onPress = () => (alert("Settings button pressed"))

const SettingsItem = ({ name, logo, isConnected, onPress }) => {
    return (
            <View style={styles.itemContainer}>
                <View style={styles.itemDescription}>
                    <FontAwesomeIcons
                        name={logo}
                        color={colors[name]}
                        size={20}
                    />
                    <Text style={styles.descText}>{name}</Text>
                </View>
                <View style={styles.itemButton}>
                    <TouchableHighlight
                        onPress = {onPress}
                    >
                        <Text style={styles.buttonText} >
                            {isConnected ? 'Disconnect' : 'Connect'}
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
    )
}


const SettingsList = () => {
    return (
        <View style={styles.page}>
            <View style={styles.listContainer}>
                {settings.map((setting) => (
                    <SettingsItem
                        name={setting.name}
                        logo={setting.logo}
                        isConnected={false}
                        onPress={onPress}
                    />
                ))}
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    itemDescription: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemContainer: {
        flex: 0.05,
        flexDirection: 'row',
        padding: 20,
    },
    itemButton: {
        flex: 1,
    },
    descText: {
        paddingLeft: 10,
        paddingTop: 2,
        textAlign: 'center',
        color: '#983B59',
        fontSize: 14,
        fontFamily: 'Lato'
    },
    buttonText: {
        color: '#983B59',
        fontFamily: 'Lato',
        fontSize: 14
    },
    listContainer: {
        flex: 1,
        padding: 5,
    },
    page: {
        flex: 1,
    }
})


export default SettingsList;
