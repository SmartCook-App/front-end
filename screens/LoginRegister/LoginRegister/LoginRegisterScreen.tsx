import React, { FC, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import LRL from "./LogInRegisterLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./LoginRegisterStyles";
import BackgroundImage from "../../../components/LoginRegister/BackgroundImage/BackgroundImageComponent";
import RegisterComponent from "../../../components/LoginRegister/LoginRegister/Register/RegisterComponent";
import LoginComponent from "../../../components/LoginRegister/LoginRegister/Login/LoginComponent";
import { Entypo } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const Login: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const [showRegister, setShowRegister] = useState(false);
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  const registerView = () => {
    setShowRegister(!showRegister);
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainLoginRegisterScreen")}
        >
          <Entypo name="cross" size={30} style={styles.crossButton} />
        </TouchableOpacity>
        <View style={styles.showViewRegisterLogIn}>
          <TouchableOpacity
            onPress={() => registerView()}
            style={styles.registerLoginButton}
          >
            {showRegister ? (
              <>
                <Text style={styles.registerLoginButtonText}>
                  {LRL[lang]?.register}
                </Text>
                <View style={styles.line}></View>
              </>
            ) : (
              <Text
                style={[
                  styles.registerLoginButtonText,
                  styles.buttonTextOpacity,
                ]}
              >
                {LRL[lang]?.register}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => registerView()}
            style={styles.registerLoginButton}
          >
            {showRegister ? (
              <Text
                style={[
                  styles.registerLoginButtonText,
                  styles.buttonTextOpacity,
                ]}
              >
                {LRL[lang]?.logIn}
              </Text>
            ) : (
              <>
                <Text style={styles.registerLoginButtonText}>
                  {LRL[lang]?.logIn}
                </Text>
                <View style={styles.line}></View>
              </>
            )}
          </TouchableOpacity>
        </View>
        {showRegister ? (
          <RegisterComponent navigation={navigation} />
        ) : (
          <LoginComponent navigation={navigation} />
        )}
      </BackgroundImage>
    </View>
  );
};
export default Login;
