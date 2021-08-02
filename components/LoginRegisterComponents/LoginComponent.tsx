import React, { FC, useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Feather, MaterialIcons } from '@expo/vector-icons'; 

interface Props {
    navigation: any;
}
const LoginComponent: FC<Props> = (props: Props) =>  {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  return (
    <View>
      <View style={loginRegisterStyle.subContainer}>
        <View style={loginRegisterStyle.viewInput}>
          <Feather name="mail" size={23} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.email}
            value={email}
            onChangeText={setemail}
          />
        </View>
        <View style={loginRegisterStyle.viewInput}>
          <MaterialIcons name="vpn-key" size={23} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.password}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {showPassword ? (
              <Feather name="eye-off" onPress={() => setShowPassword(!showPassword)} size={23} style={loginRegisterStyle.passwordIcon} />
            ) : (
              <Feather name="eye" onPress={() => setShowPassword(!showPassword)} size={23} style={loginRegisterStyle.passwordIcon} />
            )}
        </View>
        <TouchableOpacity style={loginRegisterStyle.buttonLogIn}>
          <Text style={loginRegisterStyle.buttonText}>{LRL[lang]?.logIn}</Text>
        </TouchableOpacity>
        <Text style={loginRegisterStyle.footerText}>                                {LRL[lang]?.forgotPassword}                                </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
    </View>
  );
}
export default LoginComponent;
