import React, { FC, useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import loginRegisterStyle from "../../styles/LoginRegisterStyles";
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Feather, MaterialIcons } from '@expo/vector-icons'; 
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {
  navigation: any;
}
const LoginComponent: FC<Props> = (props: Props) =>  {
  const initialValues = { email: '', password: '' };
  const [showPassword, setShowPassword] = useState(true);
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  const handleSubmit = () => {
    console.log('submitting');
  }

  return (
      <View style={loginRegisterStyle.subContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(LRL[lang]?.formErrorEmail)
              .required(LRL[lang]?.formErrorRequired),
            password: Yup.string()
              .required(LRL[lang]?.formErrorRequired),
          })}
          onSubmit={(values, actions) => {
            handleSubmit()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <>
        <View style={loginRegisterStyle.viewInput}>
          <Feather name="mail" size={23} style={loginRegisterStyle.icon} />
          <TextInput
            placeholderTextColor="white"
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
        </View>
        <View>
          {errors.email && touched.email ? <Text style={loginRegisterStyle.errorText}>{errors.email}</Text> : null}
        </View>
        <View style={loginRegisterStyle.viewInput}>
          <MaterialIcons
            name="vpn-key"
            size={23}
            style={loginRegisterStyle.icon}
          />
          <TextInput
            placeholderTextColor="white"
            style={loginRegisterStyle.textInput}
            placeholder={LRL[lang]?.password}
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
              style={loginRegisterStyle.passwordIcon}
            />
          ) : (
            <Feather
              name="eye"
              onPress={() => setShowPassword(!showPassword)}
              size={23}
              style={loginRegisterStyle.passwordIcon}
            />
          )}
        </View>
        <View>
          {errors.password && touched.password ? <Text style={loginRegisterStyle.errorText}>{errors.password}</Text> : null}
        </View>
        <TouchableOpacity style={loginRegisterStyle.buttonLogIn} disabled={!isValid}>
          <Text style={loginRegisterStyle.buttonText}>{LRL[lang]?.logIn}</Text>
        </TouchableOpacity>
        </>
          )}
        </Formik>
        <Text style={loginRegisterStyle.footerText}>
          {" "}
          {LRL[lang]?.forgotPassword}{" "}
        </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
  );
};
export default LoginComponent;
