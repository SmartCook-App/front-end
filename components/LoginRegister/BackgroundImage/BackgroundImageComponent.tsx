import React, { FC } from 'react';
import { ImageBackground, View } from 'react-native';
import style from './BackgroundImageStyles';

interface Props {
  children: any;
}

const BackgroundImage: FC<Props> = (props: Props) => {
  return (
    <ImageBackground
      source={require('../../../assets/Images/LoginImg/loginBackground.jpeg')}
      style={style.image}
      blurRadius={1}
    >
      <View style={style.child}>
        <View style={style.childtwo}>{props.children}</View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundImage;
