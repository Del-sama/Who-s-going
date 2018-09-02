import React from 'react';
import { Text, View } from 'react-native';
import Navigation from '../../sharedComponents/Navigation';
import styles from './styles';

const MainScreen = () => (
  <View style={styles.mainView}>
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Who's going?</Text>
    </View>

    <View style={styles.navigationView}>
      <Navigation />
    </View>
  </View>
);

export default MainScreen;
