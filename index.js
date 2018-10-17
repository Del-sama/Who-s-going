import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import HomeScreen from './src/components/main/HomeScreen';
import MainScreen from './src/components/main/MainScreen';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDQH4j-NDe7r6E_e6sVeJpOiI_fTQmBb0Y',
      authDomain: 'who-s-going.firebaseapp.com',
      databaseURL: 'https://who-s-going.firebaseio.com',
      projectId: 'who-s-going',
      storageBucket: 'who-s-going.appspot.com',
      messagingSenderId: '1098129629268',
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MainScreen />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('who_s_going', () => App);
