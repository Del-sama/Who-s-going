import React from 'react';
import { AppRegistry, Text } from 'react-native';
import MainScreen from './src/components/MainScreen';


const App = () => (
    <MainScreen  />
)
AppRegistry.registerComponent('who_s_going', () => App);
