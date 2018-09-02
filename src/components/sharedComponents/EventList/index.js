import React from 'react';
import {
  FlatList, View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EventItem from '../EventItem';
import styles from './styles';

const EventList = ({ eventData, selectHandler }) => (
  <View style={styles.listContainer}>
    <FlatList
      data={eventData}
      renderItem={({ item }) => (
        <EventItem
          title={item.title}
          date={item.date}
          selectHandler={selectHandler}
        />
      )}
      keyExtractor={(item, index) => `${index}`}
    />
    <View style={styles.addButton}>
      <MaterialIcons
        name="add-circle"
        size={50}
        color="#983B59"
      />
    </View>
  </View>);

export default EventList;
