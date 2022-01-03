import React, { FC } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import RecipesComponentStyle from '../../styles/HomeComponentsStyle/RecipesComponentStyle';
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
    navigation.navigate('RecipesHomeScreen');
  };
  return (
    <TouchableOpacity onPress={onPressRecipe}>
      <View style={RecipesComponentStyle.container}>
        <ImageBackground
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={RecipesComponentStyle.photo}
        >
          <Text style={RecipesComponentStyle.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={RecipesComponentStyle.likesOval}>
            <Feather name="heart" color="black" /> {likes}
          </Text>
        </ImageBackground>
        <Text style={RecipesComponentStyle.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeAbstractComponent;
