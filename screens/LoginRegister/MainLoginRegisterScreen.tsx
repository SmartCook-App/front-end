import React, { FC } from "react";
import { Text, View } from "react-native";
import HomeStyle from "../../styles/HomeStyles";
import { useSelector } from "react-redux";
import { Link } from "@react-navigation/native";
import { RootState } from "../../redux/store";
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import BackgroundImage from "../../components/ImagesComponents/LoginBackgroundImage";
import ButtonLoginEmail from "../../components/LoginRegisterComponents/ButtonLoginEmail";
import SlideComponent from "../../components/LoginRegisterComponents/SlideComponent";
import IconFacebookGoogle from "../../components/LoginRegisterComponents/IconFacebookGoogle";
import KnowMore from "../../components/LoginRegisterComponents/KnowMore";
 
interface Props {
  navigation: any;
}

const LoginRegister: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  return (
    <View style={HomeStyle.container}>
      <BackgroundImage>
        <View>
          <Text style={HomeStyle.title}>{LRL[lang]?.appName}</Text>
          <Text style={HomeStyle.subtitle}>{LRL[lang]?.slogan}</Text>
          <View>
            <Text style={HomeStyle.text}>{LRL[lang]?.knowMore} </Text>
            <View style={HomeStyle.scroller}>
              <KnowMore id={0}/>
            </View>
          </View>
        </View>
        <View style={HomeStyle.containerFooter}>
          <ButtonLoginEmail
            content={LRL[lang]?.buttonEmail}
            navigation={navigation}
          ></ButtonLoginEmail>
          <View style={HomeStyle.rectanguleContainer}>
            <Text style={HomeStyle.textFooter}>{LRL[lang]?.conectWith}</Text>
            <View style={HomeStyle.buttonsLogin}>
              <IconFacebookGoogle
                imageIcon={"facebook"}
                navigation={navigation}
              />
              <IconFacebookGoogle
                imageIcon={"google"}
                navigation={navigation}
              />
            </View>
          </View>
          <Text
            style={[HomeStyle.textFooter, HomeStyle.textLater]}
            onPress={() => navigation.navigate("IndexScreen")}
          >
            {LRL[lang]?.signInLater}
          </Text>
        </View>
      </BackgroundImage>
    </View>
  );
};
export default LoginRegister;
