import React, { Component } from 'react';
import {
  FlatList, View,
} from 'react-native';
import { connect } from 'react-redux';
import EventItem from '../EventItem';
import { eventsFetch } from '../../../actions';
import styles from './styles';
import CreateEvent from '../CreateEvent';


class EventList extends Component {
  componentWillMount() {
    this.props.eventsFetch();
  }

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

const mapStateToProps = state => ({
  events: state.events,
});


export default connect(mapStateToProps, { eventsFetch })(EventList);
