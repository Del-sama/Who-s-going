import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';


const EventItem = ({ title, date, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Card containerStyle={styles.containerStyle}>
      <View style={styles.cardContent}>
        <View style={styles.eventDescription}>
          <Text
            style={styles.titleText}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text style={styles.dateStyle}>
            Date:
            {date}
          </Text>
        </View>
      </View>
    </Card>
  </TouchableOpacity>

);

export default EventItem;
