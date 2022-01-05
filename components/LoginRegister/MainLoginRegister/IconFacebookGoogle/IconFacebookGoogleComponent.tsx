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
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={style.imageButtonFacebook} />
            ) : (
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={style.imageButtonGoogle} />
            )}

        </TouchableOpacity>
    )
}

export default IconFacebookGoogle;