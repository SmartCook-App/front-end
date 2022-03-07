import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './RecipesHomeStyles';
import OvalFilterComponent from '../../../components/Recipes/OvalFilter/OvalFilterComponent';
import RoundFiltersComponents from '../../../components/RoundFilters/RoundFiltersComponent';
import FL from '../../../assets/Languages/Recipes/RecipeFiltersHomeLanguages';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import RecipesComponent from '../../../components/ShowAllRecipes/ShowAllRecipesComponent';
import CookersRecipesComponent from '../../../components/Recipes/RecipesHome/CookersRecipes/CookersRecipesComponent';
import IngredientsButtonComponent from '../../../components/Recipes/RecipesHome/IngredientsButton/IngredientsButtonComponent';
import SearchButtonComponent from '../../../components/Recipes/RecipesHome/SearchButton/SearchButtonComponent';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import { getRecipesInteractor } from '../../../redux/interactors/recipeHomeInteractors';
import { getDishCategoryInteractor } from '../../../redux/interactors/dishCategoryInteractor';
import {
  Category,
  DishCategoryState,
} from '../../../redux/types/dishCategoryTypes';
interface Props {
  navigation: any;
}
const RecipesHomeScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState();
  // revisar si es mala practica importar todo el state
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  var listNamesFilters = Object.values(FL[state.language]);
  const [dishCategoriesArray, setDishCategoriesArray] = useState([]);

  useEffect(() => {
    dispatch(getRecipesInteractor());
    dispatch(getDishCategoryInteractor());
  }, []);

  useEffect(() => {
    const dishCategoryRecipes = state.dishCategories.dishCategories.find(
      (filter) => filter.id === selectedFilter
    )!;
    if (dishCategoryRecipes) {
      if (dishCategoryRecipes.dish_category_intermediate.length != 0) {
        setDishCategoriesArray(dishCategoryRecipes.dish_category_intermediate);
      }
    }
  }, [selectedFilter]);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.topBar}>
          <TopNavbar
            title={'SMARTCOOK'}
            goBack={false}
            navigation={navigation}
          />
        </View>
        {/* <TouchableWithoutFeedback onPress={clearAsyncStorage}>
          <View>
            <Text>hola</Text>
          </View>
        </TouchableWithoutFeedback> */}
        <View style={styles.secondContainer}>
          <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {listNamesFilters.map((item: any) => (
                <OvalFilterComponent item={item} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.containerRoundFilters}>
            <SearchButtonComponent navigation={navigation} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {state.dishCategories.dishCategories.map((icon: any) => (
                // {state.homeIcons.homeIconArray.map((icon: any) => (
                <RoundFiltersComponents
                  id={icon.id}
                  title={icon.name}
                  isPressed={icon.press}
                  updateOrderButtons={updateOrderButtons}
                  setupdateOrderButtons={setupdateOrderButtons}
                  cookersView={cookersView}
                  setcookersView={setcookersView}
                  setSelectedFilter={setSelectedFilter}
                  screen={'RecipesHomeScreen'}
                  //TODO: cambiar a imagen real
                  image={require('../../../assets/Images/Filters/Aperitivo.jpg')}
                />
              ))}
            </ScrollView>
          </View>
          {cookersView ? (
            <ScrollView style={styles.flexOne}>
              <CookersRecipesComponent navigation={navigation} />
            </ScrollView>
          ) : (
            <ScrollView style={styles.flexOne}>
              <RecipesComponent
                navigation={navigation}
                dishCategoriesArray={dishCategoriesArray}
              />
            </ScrollView>
          )}
        </View>
        <IngredientsButtonComponent
          navigation={navigation}
        ></IngredientsButtonComponent>
      </View>
    </>
  );
};

export default RecipesHomeScreen;
