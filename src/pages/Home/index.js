import React from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import HomeStyle from '../../styles/HomeStyle';
import BackgroundImage from '../../components/fontImage';
import ButtonLogin from '../../components/buttonLogin';

export default function Home({ navigation }) {
  return (
    <View style={HomeStyle.container}>
      <BackgroundImage>
        <View>
          <Text style={HomeStyle.title}>SMARTCOOK</Text>
          <Text style={HomeStyle.subtitle}>Tu tiempo importa, utízalo smart!</Text>
          <View style={HomeStyle.scroller}>
            <Text style={HomeStyle.text}>Desliza para saber más</Text>
          </View>
        </View>
        <View style={HomeStyle.containerFooter}>
        <ButtonLogin style={HomeStyle.hola}>
       
        </ButtonLogin>
          {/* <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          /> */}
          <View style={HomeStyle.rectanguleContainer}>
            <Text style={HomeStyle.textFooter}>Conectar con</Text>
            <View style={HomeStyle.buttonsLogin}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={HomeStyle.icons}>
                <Text>I'm a button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={HomeStyle.icons}>
                <Text>I'm a button</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[HomeStyle.textFooter, HomeStyle.textLater]}>Crear una cuenta más tarde</Text>
        </View>
      </BackgroundImage>
    </View>
  );
}

