import React from 'react';
import { AppRegistry, Text } from 'react-native';
import HomeScreen from './src/components/HomeScreen';

const App = () => (
    <HomeScreen />
)

AppRegistry.registerComponent('who_s_going', () => App);
