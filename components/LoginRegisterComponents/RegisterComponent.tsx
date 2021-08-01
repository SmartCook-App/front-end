import React, { FC, useState, useContext } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import IoniconsIcon from 'react-native-vector-icons';

interface Props {
    navigation: any;
}
const RegisterComponent: FC<Props> = (props: Props) =>  {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  return (
    <View>
      <View style={loginRegisterStyle.subContainer}>
        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/userIcon.png')} style={loginRegisterStyle.icon} />
          <IoniconsIcon
            name="settings-outline"
            color={'black'}
            size={26}
          />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.name}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.lastName}
            value={lastName}
            onChangeText={setlastName}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/whiteEmail.png')} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.email}
            value={email}
            onChangeText={setemail}
          />
        </View>

        <View style={loginRegisterStyle.viewInput}>
          <Image source={require('../../assets/Images/LoginImg/password.png')} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor='white'
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.password}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={loginRegisterStyle.button}>
          <Text style={loginRegisterStyle.buttonText}>{LRL[lang]?.register}</Text>
        </TouchableOpacity>
        <Text style={loginRegisterStyle.footerText}>{LRL[lang]?.legalMessageAccept} 
          <Text style={loginRegisterStyle.footerTextBold}> {LRL[lang]?.legalMessageTerms}</Text> {LRL[lang]?.and} 
          <Text style={loginRegisterStyle.footerTextBold}> {LRL[lang]?.legalMessagePolitics}</Text>
        </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
    </View>
  );
}
export default RegisterComponent;
