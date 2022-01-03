import React, { FC, useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import RecipesComponentStyle from '../../styles/HomeComponentsStyle/RecipesComponentStyle';
import { recipes } from '../../screens/Recipes/recipesDataArray';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import RecipeAbstractComponent from '../RecipeAbstract/RecipeAbstactComponent';

interface Props {
  navigation: any;
  name: any;
  image: any;
  cal: any;
  time: any;
}

const RecipesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time, navigation } = props;

  const onPressRecipe = (item: any) => {
    navigation.navigate('RecipeDetailsScreen');
  };

  const renderRecipes = (item: any) => (
    <RecipeAbstractComponent
      navigation={navigation}
      time={item.item.time}
      likes={item.item.likes}
      title={item.item.title}
    />
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};
export default RecipesComponent;
