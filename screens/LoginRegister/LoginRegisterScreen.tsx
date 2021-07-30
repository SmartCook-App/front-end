import React, { FC } from "react";
import { Text, View } from "react-native";
import HomeStyle from '../../styles/HomeStyles';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import BackgroundImage from '../../components/ImagesComponents/LoginBackgroundImage';
import ButtonLoginEmail from '../../components/LoginRegisterComponents/ButtonLoginEmail';
import SlideComponent from '../../components/LoginRegisterComponents/SlideComponent';
import IconFacebookGoogle from '../../components/LoginRegisterComponents/iconFacebookGoogle';

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
          <View style={HomeStyle.scroller}>
            <Text style={HomeStyle.text}>{LRL[lang]?.knowMore} </Text>
            <View>
              < SlideComponent />
            </View>
          </View>
        </View>
        <View style={HomeStyle.containerFooter}>
          <ButtonLoginEmail contenido={LRL[lang]?.buttonEmail} navigation={props.navigation.navigate('')}>
          </ButtonLoginEmail>
          <View style={HomeStyle.rectanguleContainer}>
            <Text style={HomeStyle.textFooter}>{LRL[lang]?.conectWith}</Text>
            <View style={HomeStyle.buttonsLogin}>
              <IconFacebookGoogle imageIcon={"facebook"}  navigation={navigation} />
              <IconFacebookGoogle imageIcon={"google"} navigation={navigation} />
            </View>
          </View>
          <Text style={[HomeStyle.textFooter, HomeStyle.textLater]}>{LRL[lang]?.signInLater}</Text>
        </View>
      </BackgroundImage>
    </View>
 );
}
export default LoginRegister;
