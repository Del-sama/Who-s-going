import React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppName from './AppName';

const MenuPage = () => {
    return (
        <View>
          <AppName
            color='#983B59'
            fontSize='18'
          />
          <Text>
                <Icon
                    name='facebook-f'
                    size={25}
                    color="#ffffff"
                />
                Facebook
            </Text>
            <Text >
                <Icon
                    name='twitter'
                    size={25}
                    color="#ffffff"
                />
                Twitter
            </Text>
            <Text >
                <Icon
                    name='map-marker'
                    size={25}
                    color="#ffffff"
                />
                Location
            </Text>
        </View>
      );
}

const styles = StyleSheet.create({
  });

export default MenuPage;
