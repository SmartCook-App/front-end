import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import style from './ButtonLoginEmailStyles';

interface Props {
  navigation: any;
  content: any;
}

const ButtonLoginEmail: FC<Props> = (props: Props) => {
  const { content, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('LoginRegisterScreen')}
      style={style.homeButton}
    >
      <Text style={style.homeButtonText}>{content}</Text>
      <Feather name="mail" size={35} style={style.homeMailIcon} />
    </TouchableOpacity>
  );
};

export default ButtonLoginEmail;
