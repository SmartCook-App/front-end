import React, { FC, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { recipes } from '../../screens/Recipes/recipesDataArray';
import RecipeAbstractComponent from '../RecipeAbstract/RecipeAbstactComponent';
import { getRecipesInteractor } from '../../redux/interactors/recipeHomeInteractors';
interface Props {
  navigation: any;
  name: any;
  image: any;
  cal: any;
  time: any;
}

const RecipesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time, navigation } = props;
  const dispatch = useDispatch();
  const recipesArray = dispatch(getRecipesInteractor());

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
        data={Object.values(recipesArray)}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};
export default RecipesComponent;
