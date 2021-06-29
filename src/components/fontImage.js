import React from 'react';
import { ImageBackground, View } from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import ImageBackgroundLogin from '../assets/frontLogin3.jpeg';

const BackgroundImage = props => {
    return (
        <ImageBackground
        source={ImageBackgroundLogin}
        style={HomeStyle.image}
        blurRadius={1}>
          <View style={HomeStyle.child}>
            <View style={HomeStyle.childtwo}>
            {props.children}
            </View>
          </View>
      </ImageBackground>
    )
}

export default BackgroundImage;