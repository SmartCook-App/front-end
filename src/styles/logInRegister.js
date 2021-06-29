import { StyleSheet } from 'react-native';

const logInRegisterStyle = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'black'
    },
    button: {
        backgroundColor: "white",
        padding: 20,
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
  });

export default logInRegisterStyle;