import React, { FC } from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import HomeStyle from '../../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

interface Props {
  numberOfStep: string;
  stepDescription: string;
}

const StepsDetails: FC<Props> = (props: Props) => {
  const { numberOfStep, stepDescription } = props;
  return (
    <View>
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={StepsDetailsStyle.image}
        blurRadius={1}
      >
        <Text style={StepsDetailsStyle.circle}>{numberOfStep}</Text>
      </ImageBackground>
      <Text style={StepsDetailsStyle.stepsDescription}>{stepDescription}</Text>
    </View>
  );
};

export default StepsDetails;

const StepsDetailsStyle = StyleSheet.create({
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
