import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SLL from '../../ShoppingList/ShoppingListLanguages';
import FL from '../../../assets/Languages/Recipes/RecipeFiltersHomeLanguages';
import SL from '../../../assets/Languages/Recipes/SearchLanguages';
import SISL from './SearchIngredientLanguages';
import RecentSearchComponent from '../../../components/Recipes/RecentSearch/RecentSearchComponent';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import SearchbarComponent from '../../../components/Searchbar/SearchbarComponent';
import IngredientCategoryComponent from '../../../components/Recipes/IngredientCategory/IngredientCategoryComponent';
import styles from './SearchIngredientStyle';

interface Props {
  navigation: any;
}

const SearchIngredient: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  var listNamesFilters = Object.values(FL[state.language]);
  const { navigation } = props;
  return (
    <>
      <TopNavbar
        title={SL[lang]?.searchIngredientTitle}
        navigation={navigation}
        goBack={true}
      />
      <SearchbarComponent
        placeholderText={SLL[state.language].searchbarPlaceholder}
      />
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchContainerTitle}>
          {SL[lang]?.recentSearchTitle}
        </Text>
        <RecentSearchComponent recentSearchText="Legumbres" />
        <RecentSearchComponent recentSearchText="Porotos" />
        <RecentSearchComponent recentSearchText="Verduras" />
      </View>
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchContainerTitle}>
          {SL[lang]?.categories}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryRowContainer}>
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.legumes}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.vegetables}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.cereals}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.fat}
            isImage={false}
            image="None"
          />
        </View>
        <View style={styles.categoryRowContainer}>
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="cupcake"
            name={SISL[lang]?.flours}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="fruit-cherries"
            name={SISL[lang]?.fruits}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="peanut"
            name={SISL[lang]?.driedFruits}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-steak"
            name={SISL[lang]?.meats}
            isImage={false}
            image="None"
          />
        </View>
        <View style={styles.categoryRowContainer}>
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="fish"
            name={SISL[lang]?.fish}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.dairyProducts}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="food-apple"
            name={SISL[lang]?.potatoes}
            isImage={false}
            image="None"
          />
          <IngredientCategoryComponent
            ingredientId="None"
            isPressed="None"
            iconName="spoon-sugar"
            name={SISL[lang]?.sugars}
            isImage={false}
            image="None"
          />
        </View>
      </View>
    </>
  );
};

export default SearchIngredient;

