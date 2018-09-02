import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import EventListContainer from '../EventListContainer';


const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings!</Text>
  </View>
);


const Messaging = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Messaging!</Text>
  </View>
);


const Search = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search!</Text>
  </View>
);

export default createMaterialTopTabNavigator(
  {
    Home: EventListContainer,
    Search,
    Messages: Messaging,
    Settings: SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Messages') {
          iconName = 'message';
        } else if (routeName === 'Settings') {
          iconName = 'settings';
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
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: '#983B59',
      },
    },
  },
);
