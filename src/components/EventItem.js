import React, { Component } from 'react'
import { View,
         Text,
         TouchableHighlight,
         StyleSheet} from 'react-native'
import { Card } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const TouchableMaterialIcons = ({ name, size, onPress }) => {
    return (
        <TouchableHighlight>
            <MaterialIcons 
                name={name} 
                size={size || 24} 
                onPress={onPress}
            />
        </TouchableHighlight>
    )
}

const EventItem = ({ title, date, selectHandler }) => {
    return (
        <Card containerStyle={styles.containerStyle}>
            <View style={styles.cardContent}>
                <View style={styles.eventDescription}>
                    <Text style={styles.titleText}>{title}</Text> 
                    <Text style={styles.dateStyle}>Date: {date}</Text>
                </View>
            </View>
        </Card>
    )
}

export default EventItem;


const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 18,
    },
    eventDescription: {
        flex: 8,
        flexDirection: 'column',
        height: 50,
        width: 80,
        justifyContent: 'space-between',
    },
    containerStyle: {
        height: 80,
        width: 315,
    },
    dateStyle: {
        fontSize: 14
    }
})
