import React, { useState } from 'react';
import { Button, Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';
import loginRegisterStyle from '../../styles/LoginRegisterStyles';
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesome5, Feather , MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {
    navigation: any;
}

const RegisterComponent = (props: Props) =>  {
  const initialValues = { name: '', lastName: '', email: '', password: '' };
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
            name: Yup.string()
              .min(2, LRL[lang]?.formErrorName)
              .required(LRL[lang]?.formErrorRequired),
            lastName: Yup.string()
              .required(LRL[lang]?.formErrorRequired),
            email: Yup.string()
              .email(LRL[lang]?.formErrorEmail)
              .required(LRL[lang]?.formErrorRequired),
            password: Yup.string()
              .min(5, ({ min }) => LRL[lang]?.formErrorPassword1+ `${min}`+LRL[lang]?.formErrorPassword2)
              .required(LRL[lang]?.formErrorRequired),
          })}
          onSubmit={(values, actions) => {
            handleSubmit()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <>
            <View style={loginRegisterStyle.viewInput}>
              <FontAwesome5 name="user-circle" size={23} style={loginRegisterStyle.icon} />
              <TextInput
                placeholderTextColor='white'
                style={loginRegisterStyle.textInput}
                placeholder={LRL[lang]?.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            <View>
              {errors.name && touched.name ? <Text style={loginRegisterStyle.errorText}>{errors.name}</Text> : null}
            </View>
            <View style={loginRegisterStyle.viewInput}>
              <TextInput
                placeholderTextColor='white'
                style={loginRegisterStyle.textInput}
                placeholder={LRL[lang]?.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastNAme')}
                value={values.lastName}
              />
            </View>
            <View>
              {errors.lastName && touched.lastName ? <Text style={loginRegisterStyle.errorText}>{errors.lastName}</Text> : null}
            </View>
            <View style={loginRegisterStyle.viewInput}>
              <Feather name="mail" size={23} style={loginRegisterStyle.icon} />
              <TextInput
                placeholderTextColor='white'
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
              <MaterialIcons name="vpn-key" size={23} style={loginRegisterStyle.icon}/>
              <TextInput
                placeholderTextColor='white'
                style={loginRegisterStyle.textInput}
                placeholder={LRL[lang]?.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={showPassword ? true : false}
              />
              {showPassword ? (
                  <Feather name="eye-off" onPress={() => setShowPassword(!showPassword)} size={23} style={loginRegisterStyle.passwordIcon} />
                ) : (
                  <Feather name="eye" onPress={() => setShowPassword(!showPassword)} size={23} style={loginRegisterStyle.passwordIcon} />
                )}
            </View>
            <View>
              {errors.password && touched.password ? <Text style={loginRegisterStyle.errorText}>{errors.password}</Text> : null}
            </View>
            <TouchableOpacity style={loginRegisterStyle.button} disabled={!isValid}>
              <Text style={loginRegisterStyle.buttonText}>{LRL[lang]?.register}</Text>
            </TouchableOpacity>
            </>
          )}
          </Formik>
        <Text style={loginRegisterStyle.footerText}>{LRL[lang]?.legalMessageAccept} 
          <Text style={loginRegisterStyle.footerTextBold}> {LRL[lang]?.legalMessageTerms}</Text> {LRL[lang]?.and} 
          <Text style={loginRegisterStyle.footerTextBold}> {LRL[lang]?.legalMessagePolitics}</Text>
        </Text>
        {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
      </View>
  );
}

export default RegisterComponent;
