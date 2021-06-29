import React, { useState, useContext } from 'react';
import { Button, Text, View, TextInput,  TouchableOpacity, Form } from 'react-native';
import AuthContext from '../../config';
import logInRegisterStyle from '../../styles/logInRegister';

export default function Login({ navigation }) {

  const [name, setName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { state, dispatch } = useContext(AuthContext);

  return (
    <View style={logInRegisterStyle.container}>
      <Text>Page Login</Text>
        <TextInput
          placeholderTextColor='white'
          style={logInRegisterStyle.textInput}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholderTextColor='white'
          style={logInRegisterStyle.textInput}
          placeholder="Apellido"
          value={lastName}
          onChangeText={setlastName}
        />
        <TextInput
          placeholderTextColor='white'
          style={logInRegisterStyle.textInput}
          placeholder="Correo"
          value={email}
          onChangeText={setemail}
        />
        <TextInput
          placeholderTextColor='white'
          style={logInRegisterStyle.textInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity title="Sign in" onPress={() => alert('Hello, world!')} style={logInRegisterStyle.button}>
          <Text style={logInRegisterStyle.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <Text>Al crear una cuenta estas aceptando los Términos del servicio y Política de privacidad</Text>
      {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
    </View>
  );
}
