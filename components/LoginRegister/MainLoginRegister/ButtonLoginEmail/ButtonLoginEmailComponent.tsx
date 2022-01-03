import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles";

interface Props {
  navigation: any;
  content: any;
}

const ButtonLoginEmail: FC<Props> = (props: Props) => {
  const { content, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("LoginRegisterScreen")}
      style={styles.homeButton}
    >
      <Text style={styles.homeButtonText}>{content}</Text>
      <Feather name="mail" size={35} style={styles.homeMailIcon} />
    </TouchableOpacity>
  );
};

export default ButtonLoginEmail;
