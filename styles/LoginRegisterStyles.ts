import { StyleSheet } from 'react-native';

const logInRegisterStyle = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    button: {
        backgroundColor: "white",
        padding: 20,
        marginTop: '7%',
        borderRadius: 20,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLogIn: {
        backgroundColor: "white",
        padding: 20,
        marginTop: '40.5%',
        borderRadius: 20,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 14,
        position: 'relative',
        color: '#000000',
        textTransform: 'uppercase',
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        width: 300,
        color: 'white',
        padding: 5,
        margin: 15,
    },
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        left: -10,
        position: 'absolute',
    },
    viewInput: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        marginTop: 40,
        color: 'white',
        fontFamily: 'nunito-light',
        textAlign: 'center'
    },
    footerTextBold: {
        fontFamily: 'nunito-semiBold',
        textAlign: 'center'
    }
  });

export default logInRegisterStyle;