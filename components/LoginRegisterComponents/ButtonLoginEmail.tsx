import React, {FC} from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import styles from '../../styles/HomeStyles';

interface Props {
    navigation: any;
    contenido: any;
}

const ButtonLoginEmail : FC<Props> = (props: Props) =>  {
    const { contenido, navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('LoginRegisterScreen')} style={styles.homeButton}>
            <Text style={styles.homeButtonText}>{contenido}</Text>
            <Feather name="mail" size={35} style={styles.homeMailIcon} />
        </TouchableOpacity>
    )
}

export default ButtonLoginEmail;
