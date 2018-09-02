import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


const EventItem = ({ title, date }) => (
  <Card containerStyle={styles.containerStyle}>
    <View style={styles.cardContent}>
      <View style={styles.eventDescription}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dateStyle}>
          Date:
          {' '}
          {date}
        </Text>
      </View>
    </View>
  </Card>
);

export default EventItem;
