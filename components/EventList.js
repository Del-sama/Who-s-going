import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import EventItem from './EventItem'


const EventList = ({ eventData, selectHandler }) => {
    const selectHandler = () => alert("select handler clicked")
    return(
        <View>
            <FlatList
              data={eventData}
              renderItem={({ item }) => {
                  return <EventItem 
                            title={item.title} 
                            date={item.date} 
                            selectHandler={selectHandler} />
                        }}
            />
        </View>)
}

export default EventList;
