import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import HomeStyle from '../../styles/HomeStyle';
import Fondo from '../../components/fontImage';


export default function Home({ navigation }) {
  return (
    <View style={HomeStyle.container}>
      <Fondo>
        <Text style={HomeStyle.title}>SMARTCOOK</Text>
        <Text style={HomeStyle.subtitle}>Tu tiempo importa, utízalo smart!</Text>
        <View style={HomeStyle.scroller}> 
          <Text style={HomeStyle.knowMore}>Aca va el desliza para saber más</Text>
        </View>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      <View style={HomeStyle.childBlurry} />
      </Fondo>

    </View>
  );
}

