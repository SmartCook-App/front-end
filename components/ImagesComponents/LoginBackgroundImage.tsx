import React, { FC } from "react";
import { ImageBackground, View } from "react-native";
import HomeStyle from "../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles";

interface Props {
  children: any;
}

const BackgroundImage: FC<Props> = (props: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/Images/LoginImg/loginBackground.jpeg")}
      style={HomeStyle.image}
      blurRadius={1}
    >
      <View style={HomeStyle.child}>
        <View style={HomeStyle.childtwo}>{props.children}</View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundImage;
