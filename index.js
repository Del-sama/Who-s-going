import React from 'react';
import { AppRegistry } from 'react-native';
import HomeScreen from './src/components/main/HomeScreen';
import MainScreen from './src/components/main/MainScreen';

const App = () => (
  // <HomeScreen />
  <MainScreen />
);

AppRegistry.registerComponent('who_s_going', () => App);
