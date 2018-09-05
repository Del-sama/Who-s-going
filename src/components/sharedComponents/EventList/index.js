import React from 'react';
import {
  FlatList, View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EventItem from '../EventItem';
import styles from './styles';

const eventData = [
  { title: 'Movie at Imax', date: '1/2/2018' },
  { title: 'Movie at genesis', date: '1/2/2018' },
];


const EventList = () => (
  <View style={styles.listContainer}>
    <FlatList
      data={eventData}
      renderItem={({ item }) => (
        <EventItem
          title={item.title}
          date={item.date}
        />
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  </View>);

export default EventList;
