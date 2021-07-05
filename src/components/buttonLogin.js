import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import logInRegisterStyle from '../styles/logInRegister';

const ButtonLogin = props => {
    const {contenido, title} = props;
    return (
        <TouchableOpacity title={title} onPress={() => alert('Hello, world!')} style={logInRegisterStyle.button}>
            <Text style={logInRegisterStyle.buttonText}>{contenido}</Text>
        </TouchableOpacity>
    )
}

export default ButtonLogin;

