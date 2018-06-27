import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import EventItem from './EventItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const EventList = ({ eventData, selectHandler }) => {
    return(
        <View style={styles.listContainer}>
            <FlatList
                data={eventData}
                renderItem={({ item }) => (
                    <EventItem 
                        title={item.title} 
                        date={item.date} 
                        selectHandler={selectHandler} />
                )}
                keyExtractor={(item, index) => index+""}
            />
            <View style={styles.addButton}>
                <MaterialIcons 
                    name={"add-circle"}
                    size={50}
                    color={'#983B59'}
                />
            </View>
        </View>)
}

export default EventList;

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width - 70,
        top: Dimensions.get('window').height - 150,
        zIndex: 100},
    listContainer: {
        alignItems: 'center'
    }
})
