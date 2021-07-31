import React, { FC, useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import AuthContext from '../../config';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';
import BackgroundImage from '../../components/ImagesComponents/LoginBackgroundImage';

interface Props {
    navigation: any;
}
const LoginComponent: FC<Props> = (props: Props) =>  {
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
        <TouchableOpacity style={loginRegisterStyle.buttonLogIn}>
          <Text style={loginRegisterStyle.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={loginRegisterStyle.footerText}>                                ¿Olvidaste tu contraseña?                                </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
    </View>
  );
}
export default LoginComponent;
