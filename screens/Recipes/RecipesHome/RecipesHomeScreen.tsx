import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './RecipesHomeStyles';
import OvalFilterComponent from '../../../components/Recipes/OvalFilter/OvalFilterComponent';
import RoundFiltersComponents from '../../../components/RoundFilters/RoundFiltersComponent';
import FL from '../../../assets/Languages/Recipes/RecipeFiltersHomeLanguages';
import { useSelector, connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../../redux/store';
import RecipesComponent from '../../../components/ShowAllRecipes/ShowAllRecipesComponent';
import CookersRecipesComponent from '../../../components/Recipes/RecipesHome/CookersRecipes/CookersRecipesComponent';
import IngredientsButtonComponent from '../../../components/Recipes/RecipesHome/IngredientsButton/IngredientsButtonComponent';
import SearchButtonComponent from '../../../components/Recipes/RecipesHome/SearchButton/SearchButtonComponent';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import { getRecipesInteractor } from '../../../redux/interactors/recipeHomeInteractors';
interface Props {
  navigation: any;
}
const RecipesHomeScreen: FC<Props> = (props: Props) => {
  // const { navigation, getRecipesInteractor } = props;
  const { navigation } = props;
  const dispatch = useDispatch();
  // revisar si es mala practica importar todo el state
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  var listNamesFilters = Object.values(FL[state.language]);
  
  useEffect(() => {
    dispatch(getRecipesInteractor())
  }, []);

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
              {state.homeIcons.homeIconArray.map((icon: any) => (
                <RoundFiltersComponents
                  id={icon.id}
                  title={icon.title}
                  isPressed={icon.press}
                  updateOrderButtons={updateOrderButtons}
                  setupdateOrderButtons={setupdateOrderButtons}
                  cookersView={cookersView}
                  setcookersView={setcookersView}
                  screen={'RecipesHomeScreen'}
                  image={icon.image}
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
              <RecipesComponent navigation={navigation} />
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

//cambiar esto por un useDispatch
// const mapDispatchToProps = (dispatch: any): DispatchProps => ({
//   ...bindActionCreators(
//     {
//       ...recipeHomeInteractors,
//     },
//     dispatch,
//   ),
// })

// export default connect(null, mapDispatchToProps)(RecipesHomeScreen);

export default RecipesHomeScreen;