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
    }
];


const onPress = () => (alert("Settings button pressed"))

const SettingsItem = ({ name, logo, isConnected, onPress }) => {
    return (
            <View style={styles.itemContainer}>
                <View style={styles.itemDescription}>
                    <FontAwesomeIcons
                        name={logo}
                        color="black"
                        size={20}
                    />
                    <Text style={styles.descText}>{name}</Text>
                </View>
                <View style={styles.itemButton}>
                    <TouchableHighlight
                        onPress = {onPress}
                    >
                        <Text>{isConnected ? Disconnect : Connect}</Text>
                    </TouchableHighlight>
                </View>
            </View>
    )
}


const SettingsList = () => {
    return (
        <View>
            {settings.map((setting) => {
                <SettingsItem
                    name={setting.name}
                    logo={setting.logo}
                    isConnected={True}
                    onPress={onPress}
            })}
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
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        // justifyContent: 'space-between'
    },
    itemButton: {
        flex: 1,
    },
    descText: {
        paddingLeft: 10,
        textAlign: 'center'
    }
})


export default SettingsList;
