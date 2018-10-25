import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import HomeScreen from './src/components/main/HomeScreen';
import reducers from './src/reducers';

export default class App extends Component {
  store = createStore(reducers, applyMiddleware(thunk))

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
      <Provider store={this.store}>
        <HomeScreen />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('who_s_going', () => App);
