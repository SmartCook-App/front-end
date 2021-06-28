import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import HomeStyle from '../../styles/HomeStyle';

const image2 = require('../../assets/frontLogin3.jpeg')

export default function Home({ navigation }) {
  return (
    <View style={HomeStyle.container}>
      <ImageBackground
        source={image2}
        style={HomeStyle.image}
        blurRadius={0.7}>
        <Text style={HomeStyle.title}>SMARTCOOK</Text>
        <Text style={HomeStyle.subtitle}>Tu tiempo importa, utízalo smart!</Text>
        <View style={HomeStyle.scroller}> 
          <Text style={HomeStyle.knowMore}>Aca va el desliza para saber más</Text>
        </View>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      <View style={HomeStyle.childOpaque} />
      <View style={HomeStyle.childBlurry} />
      </ImageBackground>

    </View>
  );
}

