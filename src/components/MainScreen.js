import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Navigation from './Navigation'


export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Who's going?</Text>
                </View>

                <View style={styles.navigationView}>
                    <Navigation />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 20
    },
    headerText: {
        fontSize: 24,
        color: '#983B59'
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationView: {
        flex: 9,
    }
})
