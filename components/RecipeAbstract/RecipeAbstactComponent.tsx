import React, { FC } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import style from './RecipeAbstractStyles';
import { Feather, MaterialIcons } from '@expo/vector-icons';

interface Props {
  navigation: any;
  time: any;
  likes: any;
  title: any;
}

const RecipeAbstractComponent: FC<Props> = (props: Props) => {
  const { navigation, time, likes, title } = props;
  const onPressRecipe = (item: any) => {
    navigation.navigate('RecipeDetailsScreen');
  };
  return (
    <TouchableOpacity onPress={onPressRecipe}>
      <View style={style.container}>
        <ImageBackground
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={style.photo}
        >
          <Text style={style.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={style.likesOval}>
            <Feather name="heart" color="black" /> {likes}
          </Text>
        </ImageBackground>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeAbstractComponent;
