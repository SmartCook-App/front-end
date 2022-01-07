import React, { FC } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import style from './StepsDetailsStyles';

interface Props {
  numberOfStep: string;
  stepDescription: string;
}

const StepsDetails: FC<Props> = (props: Props) => {
  const { numberOfStep, stepDescription } = props;
  return (
    <View>
      <ImageBackground
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={style.image}
        blurRadius={1}
      >
        <Text style={style.circle}>{numberOfStep}</Text>
      </ImageBackground>
      <Text style={style.stepsDescription}>{stepDescription}</Text>
    </View>
  );
};

export default StepsDetails;
