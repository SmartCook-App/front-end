import React, { FC, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import style from './LoginStyles';
import LL from './LoginLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import Colors from '../../../../assets/Colors';
import * as Yup from 'yup';
import { createIconSetFromFontello } from 'react-native-vector-icons';

interface Props {
  navigation: any;
}
const LoginComponent: FC<Props> = (props: Props) => {
  const initialValues = { email: '', password: '' };
  const [showPassword, setShowPassword] = useState(true);
  const [changePasswordButton, setChangePasswordButton] = useState(false);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const handleSubmit = () => {
    console.log('submitting');
  };

  const changePassword = () => {
    setChangePasswordButton(!changePasswordButton)
  }

  const sendEmailToUpdatePassword = () => {
    Alert.alert('Hola', 'Esta opción no esta disponible todavía. Para cambiar tu contraseña contáctate con nuestro equipo', [
      {
        text: 'Ok',
        onPress: () => setChangePasswordButton(!changePasswordButton),
      },
    ]);
  }

  return (
    <View style={style.subContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(LL[lang]?.formErrorEmail)
            .required(LL[lang]?.formErrorRequired),
          password: Yup.string().required(LL[lang]?.formErrorRequired),
        })}
        onSubmit={(values, actions) => {
          handleSubmit();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={style.viewInput}>
              <Feather name="mail" size={23} style={style.icon} />
              <TextInput
                placeholderTextColor={Colors.light.white}
                style={style.textInput}
                placeholder={LL[lang]?.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View>
              {errors.email && touched.email ? (
                <Text style={style.errorText}>{errors.email}</Text>
              ) : null}
            </View>
            <View style={style.viewInput}>
              <MaterialIcons name="vpn-key" size={23} style={style.icon} />
              <TextInput
                placeholderTextColor={Colors.light.white}
                style={style.textInput}
                placeholder={LL[lang]?.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {showPassword ? (
                <Feather
                  name="eye-off"
                  onPress={() => setShowPassword(!showPassword)}
                  size={23}
                  style={style.passwordIcon}
                />
              ) : (
                <Feather
                  name="eye"
                  onPress={() => setShowPassword(!showPassword)}
                  size={23}
                  style={style.passwordIcon}
                />
              )}
            </View>
            <View>
              {errors.password && touched.password ? (
                <Text style={style.errorText}>{errors.password}</Text>
              ) : null}
            </View>
            <TouchableOpacity style={style.buttonLogIn} disabled={!isValid}>
              <Text style={style.buttonText}>{LL[lang]?.logIn}</Text>
            </TouchableOpacity>
            <Modal animationType="slide" 
                   transparent visible={changePasswordButton} 
                   presentationStyle="overFullScreen" 
                  >
                  <View style={style.viewWrapper}>
                      <View style={style.modalView}>
                        <Text style={style.forgetPasswordTitle}>{LL[lang]?.forgetPasswordTitlePopUp}</Text>
                        <Text style={style.forgetPassowordDescription}>{LL[lang]?.description}</Text>

                          <TextInput placeholder={LL[lang]?.email} 
                                      style={style.textInput} 
                                      />
  
                          <TouchableOpacity style={style.uploadButtonContainer} onPress={sendEmailToUpdatePassword} >
                            <Text style={style.uploadButton}>{LL[lang]?.send}</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
            </Modal>
          </>
        )}
      </Formik>
      <Text style={style.footerText} onPress={changePassword}> {LL[lang]?.forgotPassword} </Text>
    </View>
  );
};
export default LoginComponent;
