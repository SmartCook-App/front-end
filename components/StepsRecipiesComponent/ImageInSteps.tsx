import React, { FC } from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import HomeStyle from '../../styles/HomeStyles';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';

const ImageInSteps: FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/Images/LoginImg/loginBackground.jpeg')}
      style={ImageInStepsStyle.image}
      blurRadius={1}
    >
      <Text style={ImageInStepsStyle.circle}>01.</Text>
    </ImageBackground>
  );
};

export default ImageInSteps;

const ImageInStepsStyle = StyleSheet.create({
  image: {
    height: normalizePx(240),
    marginTop: normalizePx(100),
  },
  circle: {
    backgroundColor: Colors.light.yellow,
    height: normalizePx(70),
    width: normalizePx(70),
    borderRadius: normalizePx(35),
    position: 'absolute',
    top: normalizePx(-50),
    alignSelf: 'center'
  },
});
