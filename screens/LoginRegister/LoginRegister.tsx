import React, { FC } from "react";
import { Text, View } from "react-native";
import HomeStyle from '../../styles/HomeStyles';
import BackgroundImage from '../../components/ImagesComponents/LoginBackgroundImage';
import ButtonLoginEmail from '../../components/LoginRegisterComponents/ButtonLoginEmail';
import SlideComponent from '../../components/LoginRegisterComponents/SlideComponent';

interface Props {
  navigation: any;
}

const LoginRegister: FC<Props> = (props: Props) => {
  return (
    <View style={HomeStyle.container}>
      <BackgroundImage>
        <View>
          <Text style={HomeStyle.title}>SMARTCOOK</Text>
          <Text style={HomeStyle.subtitle}>Tu tiempo importa, utízalo smart!</Text>
          <View style={HomeStyle.scroller}>
            <Text style={HomeStyle.text}>Desliza para saber más </Text>
            <View>
              < SlideComponent />
            </View>
          </View>
        </View>
        <View style={HomeStyle.containerFooter}>
          <ButtonLoginEmail contenido={'Entrar con correo'} navigation={props.navigation.navigate('')}>
          </ButtonLoginEmail>
          <View style={HomeStyle.rectanguleContainer}>
            <Text style={HomeStyle.textFooter}>Conectar con</Text>
            <View style={HomeStyle.buttonsLogin}>
              {/* <IconFacebookGoogle imageIcon={"facebook"} navigation={navigation} />
              <IconFacebookGoogle imageIcon={"google"} navigation={navigation} /> */}
            </View>
          </View>
          <Text style={[HomeStyle.textFooter, HomeStyle.textLater]}>Crear una cuenta más tarde</Text>
        </View>
      </BackgroundImage>
    </View>
 );
}
export default LoginRegister;
