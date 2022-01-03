import React, { FC } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import RecipiesComponentStyle from '../../styles/HomeComponentsStyle/RecipiesComponentStyle';
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
    navigation.navigate('RecipieHome');
  };
  return (
    <TouchableOpacity onPress={onPressRecipe}>
      <View style={RecipiesComponentStyle.container}>
        <ImageBackground
          source={require('../../assets/Images/Eliminar/ensalada.jpg')}
          style={RecipiesComponentStyle.photo}
        >
          <Text style={RecipiesComponentStyle.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={RecipiesComponentStyle.likesOval}>
            <Feather name="heart" color="black" /> {likes}
          </Text>
        </ImageBackground>
        <Text style={RecipiesComponentStyle.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeAbstractComponent;
