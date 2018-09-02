import React from 'react';
import { AppRegistry } from 'react-native';
import HomeScreen from './src/components/main/HomeScreen';

const App = () => (
  <HomeScreen />
);

AppRegistry.registerComponent('who_s_going', () => App);
