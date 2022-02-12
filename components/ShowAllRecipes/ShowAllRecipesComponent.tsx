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
  const { name, image, cal, time, navigation } = props;
  // const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const recipesArray = state.recipesHome.allCurrentRecipes;

  // const recipesArray = dispatch(getRecipesInteractor());
  useEffect(() => {
    getRecipesInteractor();
  }, []);


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
