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
import RecipiesComponentStyle from '../../styles/HomeComponentsStyle/RecipiesComponentStyle';
import { recipes } from '../../screens/Home/recipiesDataArray';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import RecipeAbstractComponent from '../HomeComponents/RecipeAbstactComponent';

interface Props {
  navigation: any;
  name: any;
  image: any;
  cal: any;
  time: any;
}

const RecipiesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time, navigation } = props;

  const onPressRecipe = (item: any) => {
    navigation.navigate('RecipieHome');
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
export default RecipiesComponent;
