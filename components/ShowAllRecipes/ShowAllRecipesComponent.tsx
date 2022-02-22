import React, { FC, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RecipeAbstractComponent from '../RecipeAbstract/RecipeAbstactComponent';
import { getRecipesInteractor } from '../../redux/interactors/recipeHomeInteractors';

interface Props {
  navigation: any;
}

const RecipesComponent: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const state = useSelector((state: RootState) => state);
  const recipesArray = state.recipes.allCurrentRecipes;

  const renderRecipes = (item: any) => (
    <RecipeAbstractComponent
      navigation={navigation}
      time={item.item.time}
      likes="10"
      title={item.item.name}
      calories= {item.item.calories}
      fat= {item.item.fat}
      proteins= {item.item.proteins}
      carbs= {item.item.carbs}
      portions= {item.item.portions}
      owner= {item.item.owner}
      tips= {item.item.tips}
    />
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};
export default RecipesComponent;
