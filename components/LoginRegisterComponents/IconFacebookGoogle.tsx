import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import HomeStyle from '../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles';
import { FontAwesome5 } from '@expo/vector-icons'; 

interface Props {
    navigation: any;
    imageIcon: any;
}

const IconFacebookGoogle : FC<Props> = (props: Props) => {
    const { imageIcon, navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Slide')}
            style={HomeStyle.icons}>
            {imageIcon === 'facebook' ? (
                <Image source={require(`../../assets/Images/LoginImg/facebook.png`)} style={HomeStyle.imageButtonFacebook} />
            ) : (
                <Image source={require(`../../assets/Images/LoginImg/google.png`)} style={HomeStyle.imageButtonGoogle} />
            )}

        </TouchableOpacity>
    )
}

export default IconFacebookGoogle;