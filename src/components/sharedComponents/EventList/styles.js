import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  addButton: {
    position: 'absolute',
    left: Dimensions.get('window').width - 70,
    top: Dimensions.get('window').height - 250,
    zIndex: 100,
  },
  listContainer: {
    alignItems: 'center',
  },
});
