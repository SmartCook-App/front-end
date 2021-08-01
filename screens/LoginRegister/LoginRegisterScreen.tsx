import React, { FC, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BackgroundImage from '../../components/ImagesComponents/LoginBackgroundImage';
import RegisterComponent from '../../components/LoginRegisterComponents/RegisterComponent';
import LoginComponent from '../../components/LoginRegisterComponents/LoginComponent';

interface Props {
    navigation: any;
}

const Login: FC<Props> = (props: Props) =>  {
  const { navigation } = props;
  const [showRegister, setShowRegister] = useState(true)
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  const registerView = () => {
    setShowRegister(!showRegister);
  }

  return (
    <View style={loginRegisterStyle.container}>
      <BackgroundImage>
        <TouchableOpacity
        //   style={styles.goBack}
          onPress={() => navigation.navigate('MainLoginRegisterScreen')}>
          <Image source={require('../../assets/Images/LoginImg/cross.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.showViewRegisterLogIn}>
          <TouchableOpacity onPress={() => registerView()} style={styles.button}>
            {showRegister ? (
              <>
                <Text style={styles.buttonText}>{LRL[lang]?.register}</Text>
                <View style={styles.line} ></View>
              </>
            ) : (
              <Text style={[styles.buttonText, styles.buttonTextOpacity]}>{LRL[lang]?.register}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => registerView()} style={styles.button}>
            {showRegister ? (
              <Text style={[styles.buttonText, styles.buttonTextOpacity]}>{LRL[lang]?.logIn}</Text>
            ) : (
              <>
                <Text style={styles.buttonText}>{LRL[lang]?.logIn}</Text>
                <View style={styles.line} ></View>
              </>
            )}

          </TouchableOpacity>
        </View>
        {showRegister ? (
          < RegisterComponent navigation={navigation} />
        ) : (
          <LoginComponent navigation={navigation}/>
        )}
      </BackgroundImage>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  showViewRegisterLogIn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    marginTop: '20%'
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'nunito-semiBold',
    color: 'white',
  },
  icon: {
    fontSize: 27,
    fontFamily: 'nunito-semiBold',
    color: 'white',
    marginHorizontal: '10%',
    marginVertical: '10%'
  },
  buttonTextOpacity: {
    color: 'rgba(255, 255, 255, 0.53)',
  },
  line: {
    backgroundColor: 'white',
    height: 2,
    width: '100%'
  }
})