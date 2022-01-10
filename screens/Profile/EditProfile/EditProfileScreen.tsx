import React, { FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';
import LRL from '../../LoginRegister/LoginRegister/LogInRegisterLanguages';
import EPL from './EditProfilesLanguages';
import styles from './EditProfileStyles';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import BackgroundImage from '../../../components/LoginRegister/BackgroundImage/BackgroundImageComponent';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Image } from 'react-native-animatable';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import Colors from '../../../assets/Colors';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const EditProfileScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  // aqui tienen que ir los valores ya seteados al registrarse
  const initialValues = {
    name: 'Florencia',
    lastName: 'Valdivia',
    phoneNumber: '',
    email: 'fivaldivi@gmail.com',
    password: '1234567890',
    birthday: '',
    gender: '',
  };
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const [visible, setVisible] = useState(false);
  const handleSubmit = () => {
    console.log('submitting');
  };
  const [changePasswordButton, setChangePasswordButton] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const notWorkingYet = () =>
    Alert.alert('Hola!', 'Esta opción todavía no está disponible', [
      {
        text: 'Ok',
        onPress: () => console.log('OK'),
      },
    ]);

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
    <>
      <View style={{ flex: 1 }}>
        <BackgroundImage>
          <View style={{ flex: 0.1 }}>
            <TopNavbar title={'PERFIL'} goBack={true} navigation={navigation} />
          </View>
          <ScrollView style={{ flex: 0.9 }}>
            <View style={styles.firstcontainer}>
              {/* Hay que llevarlo a un componente  */}
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
                    <View style={styles.pictureUploadContainer}>
                      <View style={styles.circle}>
                        <TouchableOpacity onPress={toggleModal}>
                          <Image
                            style={styles.pictureUploadPicture}
                            source={require('../../../assets/Images/ProfileIcons/user.png')}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={notWorkingYet}
                      >
                        <Text style={styles.textUploadPicture}>
                          {EPL[lang]?.choosePicture}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.personalInfoView}>
                      <Text
                        style={[styles.textUploadPicture, styles.personalInfoText]}
                      >
                        {EPL[lang]?.infoAccount}
                      </Text>
                    </View>
                    <View style={styles.viewInput}>
                      <FontAwesome5
                        name="user-circle"
                        size={23}
                        style={styles.icon}
                      />
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                      />
                    </View>
                    <View>
                      {errors.name && touched.name ? (
                        <Text style={styles.errorText}>{errors.name}</Text>
                      ) : null}
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.lastName}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastNAme')}
                        value={values.lastName}
                      />
                    </View>
                    <View>
                      {errors.lastName && touched.lastName ? (
                        <Text style={styles.errorText}>{errors.lastName}</Text>
                      ) : null}
                    </View>
                    <View style={styles.viewInput}>
                      <Feather name="mail" size={23} style={styles.icon} />
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />
                    </View>
                    <View style={styles.viewInput}>
                      <Feather name="phone" size={23} style={styles.icon} />
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.phone}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                      />
                    </View>

                    <View style={styles.viewInput}>
                      <Feather name="mail" size={23} style={styles.icon} />
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.birthday}
                        onChangeText={handleChange('birthday')}
                        onBlur={handleBlur('birthday')}
                        value={values.birthday}
                      />
                    </View>
                    <View style={styles.viewInput}>
                      <Feather name="mail" size={23} style={styles.icon} />
                      <TextInput
                        placeholderTextColor={Colors.light.white}
                        style={styles.textInput}
                        placeholder={LRL[lang]?.gender}
                        onChangeText={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        value={values.gender}
                      />
                    </View>
                    <View>
                      {errors.email && touched.email ? (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      ) : null}
                    </View>
                    <View style={styles.viewInput}>
                      <Modal animationType="slide"
                        transparent visible={changePasswordButton}
                        presentationStyle="overFullScreen"
                      >
                        <View style={styles.viewWrapper}>
                          <View style={styles.modalView}>
                            <Text style={styles.forgetPasswordTitle}>{EPL[lang]?.changePassword}</Text>
                            <Text style={styles.forgetPassowordDescription}>{EPL[lang]?.description}</Text>

                            <TextInput placeholder={EPL[lang]?.currentPassword}
                              style={styles.textInput}
                            />
                            <View style={styles.line}></View>
                            <TextInput placeholder={EPL[lang]?.newPassword}
                              style={styles.textInput}
                            />
                            <View style={styles.line}></View>
                            <TextInput placeholder={EPL[lang]?.repeatNewPassword}
                              style={styles.textInput}
                            />
                            <View style={styles.line}></View>
                            <TouchableOpacity style={styles.uploadButtonContainer} onPress={sendEmailToUpdatePassword} >
                              <Text style={styles.uploadButton}>{EPL[lang]?.accept}</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </>
                )}
              </Formik>
              <Text style={styles.changePasswordText} onPress={changePassword}>{EPL[lang]?.changePassword}</Text>
            </View>
          </ScrollView>
        </BackgroundImage>
      </View>
    </>
  );
};

export default EditProfileScreen;
