import React, { useState, useContext } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import AuthContext from '../../config';

export default function Login({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { state, dispatch } = useContext(AuthContext);

  return (
    <View>
      <Text>Page Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} />
    </View>
  );
}
