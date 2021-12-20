import React, { FC } from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import HomeStyle from '../../styles/HomeStyles';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';

interface Props {
  numberOfStep: string;
  stepDescription: string;
}

const ImageInSteps: FC<Props> = (props: Props) => {
  const { numberOfStep, stepDescription } = props;
  return (
    <View>
      <ImageBackground
        source={require('../../assets/Images/LoginImg/loginBackground.jpeg')}
        style={ImageInStepsStyle.image}
        blurRadius={1}
      >
        <Text style={ImageInStepsStyle.circle}>{numberOfStep}</Text>
      </ImageBackground>
      <Text style={ImageInStepsStyle.stepsDescription}>{stepDescription}</Text>
    </View>
  );
};

export default ImageInSteps;

const ImageInStepsStyle = StyleSheet.create({
  image: {
    height: normalizePx(240),
  },
  circle: {
    backgroundColor: Colors.light.yellow,
    height: normalizePx(70),
    width: normalizePx(70),
    borderRadius: normalizePx(35),
    position: 'absolute',
    top: normalizePx(-35),
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: normalizePx(5),
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(30),
  },
  stepsDescription: {
    padding: normalizePx(15),
    fontSize: normalizeFontSize(15),
    height: normalizePx(100),
    fontWeight: 'bold',
    color: Colors.light.white,
    backgroundColor: Colors.light.transparentBlack,
    fontFamily: "nunito-semiBold",
  },
});
