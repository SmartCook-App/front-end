import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { recipes } from '../../screens/Recipes/recipesDataArray';
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
