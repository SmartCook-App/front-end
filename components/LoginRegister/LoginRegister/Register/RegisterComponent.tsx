import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import style from './RegisterStyles';
import LRL from '../../../../screens/LoginRegister/LoginRegister/LogInRegisterLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {
  navigation: any;
}

const RegisterComponent = (props: Props) => {
  const initialValues = { name: '', lastName: '', email: '', password: '' };
  const [showPassword, setShowPassword] = useState(true);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const handleSubmit = () => {
    console.log('submitting');
  };

  return (
    <View style={style.subContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, LRL[lang]?.formErrorName)
            .required(LRL[lang]?.formErrorRequired),
          lastName: Yup.string().required(LRL[lang]?.formErrorRequired),
          email: Yup.string()
            .email(LRL[lang]?.formErrorEmail)
            .required(LRL[lang]?.formErrorRequired),
          password: Yup.string()
            .min(
              5,
              ({ min }) =>
                LRL[lang]?.formErrorPassword1 +
                `${min}` +
                LRL[lang]?.formErrorPassword2
            )
            .required(LRL[lang]?.formErrorRequired),
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
              <FontAwesome5 name="user-circle" size={23} style={style.icon} />
              <TextInput
                placeholderTextColor="white"
                style={style.textInput}
                placeholder={LRL[lang]?.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            <View>
              {errors.name && touched.name ? (
                <Text style={style.errorText}>{errors.name}</Text>
              ) : null}
            </View>
            <View style={style.viewInput}>
              <TextInput
                placeholderTextColor="white"
                style={style.textInput}
                placeholder={LRL[lang]?.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastNAme')}
                value={values.lastName}
              />
            </View>
            <View>
              {errors.lastName && touched.lastName ? (
                <Text style={style.errorText}>{errors.lastName}</Text>
              ) : null}
            </View>
            <View style={style.viewInput}>
              <Feather name="mail" size={23} style={style.icon} />
              <TextInput
                placeholderTextColor="white"
                style={style.textInput}
                placeholder={LRL[lang]?.email}
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
                placeholderTextColor="white"
                style={style.textInput}
                placeholder={LRL[lang]?.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={showPassword ? true : false}
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
            <TouchableOpacity style={style.button} disabled={!isValid}>
              <Text style={style.buttonText}>{LRL[lang]?.register}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Text style={style.footerText}>
        {LRL[lang]?.legalMessageAccept}
        <Text style={style.footerTextBold}>
          {' '}
          {LRL[lang]?.legalMessageTerms}
        </Text>{' '}
        {LRL[lang]?.and}
        <Text style={style.footerTextBold}>
          {' '}
          {LRL[lang]?.legalMessagePolitics}
        </Text>
      </Text>
      {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
    </View>
  );
};

export default RegisterComponent;
