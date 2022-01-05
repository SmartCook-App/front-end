import React, { FC, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import style from './LoginStyles';
import LL from './LoginLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import Colors from '../../../../assets/Colors';
import * as Yup from 'yup';

interface Props {
  navigation: any;
}
const LoginComponent: FC<Props> = (props: Props) => {
  const initialValues = { email: '', password: '' };
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
          </>
        )}
      </Formik>
      <Text style={style.footerText}> {LL[lang]?.forgotPassword} </Text>
      {/* onPress={() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })} */}
    </View>
  );
};
export default LoginComponent;
