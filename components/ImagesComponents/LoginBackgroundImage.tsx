import React, {FC} from 'react';
import { ImageBackground, View } from 'react-native';
import HomeStyle from '../../styles/HomeStyles';
// import ImageBackgroundLogin from '../../assets/Images/LoginImg/LoginBackground.jpeg';

const image = { uri: "https://reactjs.org/logo-og.png" };
interface Props {
    children: any;
}

const BackgroundImage : FC<Props> = (props: Props) => {
    return (
        <ImageBackground
        source={image}
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