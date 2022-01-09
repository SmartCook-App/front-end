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
        source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }}
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
