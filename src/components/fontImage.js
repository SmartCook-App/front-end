import React from 'react';
import { ImageBackground } from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import image2 from '../assets/frontLogin3.jpeg';

const Fondo = props => {
    return (
        <ImageBackground
        source={image2}
        style={HomeStyle.image}
        blurRadius={0.7}>
        {props.children}
      </ImageBackground>
    )
}

export default Fondo;