import React, { Component } from 'react';
import { View } from 'react-native';
import EventList from '../EventList';


export default class EventListContainer extends Component {
  constructor() {
    super();
  }

  selectHandler() {
    alert('the handler was clicked!');
  }

  render() {
    return (
      <View>
        <EventList
          eventData={
                [
                  { title: 'Movie at Imax', date: '1/2/2018' },
                  { title: 'Movie at genesis', date: '1/2/2018' },
                ]
            }
          selectHandler={this.selectHandler}
        />
      </View>
    );
  }
}
