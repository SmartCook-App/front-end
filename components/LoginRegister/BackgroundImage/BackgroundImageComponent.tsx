import React, { FC } from "react";
import { ImageBackground, View } from "react-native";
import styles from '../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles';

interface Props {
  children: any;
}

const BackgroundImage: FC<Props> = (props: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/Images/LoginImg/loginBackground.jpeg")}
      style={styles.image}
      blurRadius={1}
    >
      <View style={styles.child}>
        <View style={styles.childtwo}>{props.children}</View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundImage;
