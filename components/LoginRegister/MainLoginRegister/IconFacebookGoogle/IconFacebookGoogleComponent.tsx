import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import style from './IconFacebookGoogleStyles';

interface Props {
    navigation: any;
    imageIcon: any;
}

const IconFacebookGoogle : FC<Props> = (props: Props) => {
    const { imageIcon, navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Slide')}
            style={style.icons}>
            {imageIcon === 'facebook' ? (
                <Image source={require('../../assets/Images/LoginImg/facebook.png')} style={style.imageButtonFacebook} />
            ) : (
                <Image source={require(`../../assets/Images/LoginImg/google.png`)} style={style.imageButtonGoogle} />
            )}

        </TouchableOpacity>
    )
}

export default IconFacebookGoogle;