import React, {FC} from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

interface Props {
    navigation: any;
    contenido: any;
}

const ButtonLoginEmail : FC<Props> = (props: Props) =>  {
    const { contenido, navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>{contenido}</Text>
            <Image source={require('../../assets/Images/LoginImg/email.png')} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default ButtonLoginEmail;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        padding: 20,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'nunito-semiBold',
        position: 'relative',
        color: '#000000',
        left: '9%',
    },
    icon: {
        height: 50,
        width: 45,
        resizeMode: 'contain',
        left: 50,
        position: 'absolute',
    }
})