import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        flex:2
    },
    buttonStyle: {
        borderRadius: 1,
        borderWidth: 1,
        padding: 6,
        margin: 6,
        justifyContent:'center',
        alignItems:'center',
        width: '90%'
    },
    buttonViewStyle: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonIconStyle :{
        alignSelf:'center',
        letterSpacing: 15
    }
  });
