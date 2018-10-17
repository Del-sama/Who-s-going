import React, { Component } from 'react';
import {
  FlatList, View,
} from 'react-native';
import { connect } from 'react-redux';
import { map } from 'rsvp';
import EventItem from '../EventItem';
import styles from './styles';
import CreateEvent from '../CreateEvent';


// const EventList = () => (
//   <View style={styles.container}>
//     <View style={styles.listContainer}>
//       <FlatList
//         data={eventData}
//         renderItem={({ item }) => (
//           <EventItem
//             title={item.title}
//             date={item.date}
//           />
//         )}
//         keyExtractor={(item, index) => `${index}`}
//       />
//     </View>
//     <View style={styles.createEvent}>
//       <CreateEvent />
//     </View>
//   </View>);

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <EventItem
                title={item.title}
                date={item.date}
              />
            )}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
        <View style={styles.createEvent}>
          <CreateEvent />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

export default connect(mapStateToProps)(EventList);
