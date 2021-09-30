import React, { FC, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LRL from "../../assets/Languages/LoginRegisterLanguage"; // Hay que crear archivo para ProfileLanguages
import ConfigProfileStyle from "../../styles/ProfileStyles/ConfigProfileStyle";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BackgroundImage from "../../components/ImagesComponents/LoginBackgroundImage";
import { Formik } from "formik";
import * as Yup from "yup";
import { Image } from "react-native-animatable";
import PopUp from "../../components/Others/PopUp";

const IndexScreen: FC = (props: any) => {
  // aqui tienen que ir los valores ya seteados al registrarse
  const initialValues = {
    name: "Florencia",
    lastName: "Valdivia",
    phoneNumber: "56988002548",
    email: "fivaldivi@gmail.com",
    password: "1234567890",
  };
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  const [visible, setVisible] = useState(false);
  const handleSubmit = () => {
    console.log("submitting");
  };

  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      <BackgroundImage>
        <View style={ConfigProfileStyle.firstcontainer}>
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
              // password: Yup.string()
              //   .min(
              //     5,
              //     ({ min }) =>
              //       LRL[lang]?.formErrorPassword1 +
              //       `${min}` +
              //       LRL[lang]?.formErrorPassword2
              //   )
              //   .required(LRL[lang]?.formErrorRequired),
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
                <View style={ConfigProfileStyle.pictureUploadContainer}>
                  <View style={ConfigProfileStyle.circle}>
                    <TouchableOpacity onPress={toggleModal}>
                      <Image
                        style={ConfigProfileStyle.pictureUploadPicture}
                        source={require("../../assets/Images/Icons/user.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  {visible ? <PopUp content={"HOLA"} /> : null}
                  <Text style={ConfigProfileStyle.textUploadPicture}>
                    Elige una nueva foto
                  </Text>
                </View>
                <View style={ConfigProfileStyle.viewInput}>
                  <FontAwesome5
                    name="user-circle"
                    size={23}
                    style={ConfigProfileStyle.icon}
                  />
                  <TextInput
                    placeholderTextColor="white"
                    style={ConfigProfileStyle.textInput}
                    placeholder={LRL[lang]?.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                </View>
                <View>
                  {errors.name && touched.name ? (
                    <Text style={ConfigProfileStyle.errorText}>
                      {errors.name}
                    </Text>
                  ) : null}
                </View>
                <View style={ConfigProfileStyle.viewInput}>
                  <TextInput
                    placeholderTextColor="white"
                    style={ConfigProfileStyle.textInput}
                    placeholder={LRL[lang]?.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastNAme")}
                    value={values.lastName}
                  />
                </View>
                <View>
                  {errors.lastName && touched.lastName ? (
                    <Text style={ConfigProfileStyle.errorText}>
                      {errors.lastName}
                    </Text>
                  ) : null}
                </View>
                <View style={ConfigProfileStyle.viewInput}>
                  <Feather
                    name="phone"
                    size={23}
                    style={ConfigProfileStyle.icon}
                  />
                  <TextInput
                    placeholderTextColor="white"
                    style={ConfigProfileStyle.textInput}
                    placeholder={"Teléfono"} // Hay que poner LRL[lang]?.phoneNumber
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                  />
                </View>
                <View style={ConfigProfileStyle.viewInput}>
                  <Feather
                    name="mail"
                    size={23}
                    style={ConfigProfileStyle.icon}
                  />
                  <TextInput
                    placeholderTextColor="white"
                    style={ConfigProfileStyle.textInput}
                    placeholder={LRL[lang]?.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                <View>
                  {errors.email && touched.email ? (
                    <Text style={ConfigProfileStyle.errorText}>
                      {errors.email}
                    </Text>
                  ) : null}
                </View>
                <View style={ConfigProfileStyle.viewInput}>
                  {/* <MaterialIcons
                  name="vpn-key"
                  size={23}
                  style={ConfigProfileStyle.icon}
                /> */}
                  {/* <TextInput
                  placeholderTextColor="white"
                  style={ConfigProfileStyle.textInput}
                  placeholder={LRL[lang]?.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                /> */}
                </View>
              </>
            )}
          </Formik>
        </View>
      </BackgroundImage>
    </>
  );
};

export default IndexScreen;
