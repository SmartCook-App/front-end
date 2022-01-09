import React, { FC } from 'react';
import { ImageBackground, View } from 'react-native';
import style from './RecipeBackgroundStyles';

interface Props {
  children: any;
}

const BackgroundImage: FC<Props> = (props: Props) => {
  return (
    <ImageBackground
    source={{
        uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      }}
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