import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import EventListContainer from './EventListContainer';
import SettingsList from './Settings';


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class Messaging extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messaging!</Text>
      </View>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
    Home: EventListContainer,
    Search: Search,
    Messages: Messaging,
    Settings: SettingsList
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "home"
        } else if (routeName === 'Search') {
          iconName = "search"
        } else if (routeName === 'Messages') {
          iconName = "message"
        } else if (routeName === 'Settings') {
          iconName = "settings"
        } 

        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#983B59',
      inactiveTintColor: '#983B59',
      style: {
        backgroundColor: 'white'
      },
        indicatorStyle: {
            backgroundColor: '#983B59'
        }
    },
  }
);
