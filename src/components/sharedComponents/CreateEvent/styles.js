import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#983B59',
    bottom: 0,
    backgroundColor: '#ffffff',
    height: 250,
    justifyContent: 'space-around',
    position: 'absolute',
  },
  textStyle: {
    fontSize: 17,
    lineHeight: 19,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#272727',
    paddingTop: 9,
    flex: 1,
  },
  inputStyle: {
    height: 50,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 1,
    marginTop: 8,
    fontSize: 17,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 5,
    tintColor: '#272727',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
