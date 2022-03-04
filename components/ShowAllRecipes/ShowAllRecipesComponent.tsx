import React, { FC, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RecipeAbstractComponent from '../RecipeAbstract/RecipeAbstactComponent';
import { getRecipesInteractor } from '../../redux/interactors/recipeHomeInteractors';

interface Props {
  navigation: any;
  dishCategoriesArray: any;
}

const RecipesComponent: FC<Props> = (props: Props) => {
  const { navigation, dishCategoriesArray } = props;
  const state = useSelector((state: RootState) => state);
  const recipesArray = state.recipes.allCurrentRecipes;
  const [recipes, setRecipes] = useState<any>([]);

  useEffect(() => {
    var array: any = []
    dishCategoriesArray.forEach(function (recipe_id: string, i: number) {
      var recipe = state.recipes.allCurrentRecipes!.find(
        (filter: any) => filter.id === recipe_id
      );
      array.push(recipe);
    });
    setRecipes(array)
  }, [dishCategoriesArray]);

  const renderRecipes = (item: any) => (
    <RecipeAbstractComponent
      navigation={navigation}
      time={item.item.time}
      likes="10"
      title={item.item.name}
      calories={item.item.calories}
      fat={item.item.fat}
      proteins={item.item.proteins}
      carbs={item.item.carbs}
      portions={item.item.portions}
      owner={item.item.owner}
      tips={item.item.tips}
    />
  );

  return (
    <View>
      {dishCategoriesArray.length !=0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};
export default RecipesComponent;
