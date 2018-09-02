import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    homeScreenBackgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 36,
        marginBottom: '15%',
        color: '#ffffff',
        fontFamily: 'DroidSans',

    },
    appDescription: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: '40%',
        color: '#ffffff',
        fontFamily: 'Lato-Italic',
    },
    backgroundLinearGradient: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.6
    }
  });
