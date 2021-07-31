import React, { FC, useState, useContext } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import AuthContext from '../../config';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';

interface Props {
    navigation: any;
}
const RegisterComponent: FC<Props> = (props: Props) =>  {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
//   const [showRegister, setShowRegister] = useState(false)
//   const { state, dispatch } = useContext(AuthContext);
//   const registerView = () => {
//     setShowRegister(!register);
//   }

  return (
    <View>
      <View style={loginRegisterStyle.subContainer}>
        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/userIcon.png')} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder="Apellido"
            value={lastName}
            onChangeText={setlastName}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/whiteEmail.png')} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder="Correo"
            value={email}
            onChangeText={setemail}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/password.png')} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={loginRegisterStyle.button}>
          <Text style={loginRegisterStyle.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <Text style={loginRegisterStyle.footerText}>Al crear una cuenta estas aceptando los 
          <Text style={loginRegisterStyle.footerTextBold}> Términos del servicio</Text> y 
          <Text style={loginRegisterStyle.footerTextBold}> Política de privacidad</Text>
        </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
    </View>
  );
}
export default RegisterComponent;
