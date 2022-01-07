import React, { FC } from 'react';
import { FlatList, Text, ScrollView, View } from 'react-native';
import style from './CookersRecipesStyles';
import { Cookers } from '../../../../screens/Recipes/CookersDataArray';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../assets/Colors';
import RecipeAbstractComponent from '../../../RecipeAbstract/RecipeAbstactComponent';

interface Props {
  navigation: any;
}
// TODO: con datos cambiar name=Paula sin Culpas
const RecipesComponent: FC<Props> = (props: Props) => {
  const { navigation } = props;

  const onPressRecipe = (item: any) => {
    //sth
  };
  const renderRecipes = (cooker: any) => (
    <View style={style.cookersContainer}>
      <View style={style.cookersTitle}>
        <Text style={style.cookersName}> Paula Sin Culpas</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color={Colors.light.yellow}
          style={style.goToCookersProfile}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cooker['item'].map((recipe: any) => (
          <RecipeAbstractComponent
            navigation={navigation}
            time={recipe.time}
            likes={recipe.likes}
            title={recipe.title}
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={Cookers}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item}`}
      />
    </View>
  );
};
export default RecipesComponent;
