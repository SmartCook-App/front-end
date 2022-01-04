import React, { FC } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SLL from '../../ShoppingList/ShoppingListLanguages';
import FL from '../../../assets/Languages/Recipes/RecipeFiltersHomeLanguages';
import SRL from './SearchRecipesLanguages';
import OvalFilterComponent from '../../../components/Recipes/OvalFilter/OvalFilterComponent';
import RecentSearchComponent from '../../../components/Recipes/RecentSearch/RecentSearchComponent';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import SearchbarComponent from '../../../components/Searchbar/SearchbarComponent';
import styles from './SearchRecipesStyles';

interface Props {
  navigation: any;
}

const SearchRecipes: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
        );
  var listNamesFilters = Object.values(FL[state.language]);
  const { navigation } = props;
  return (
    <>
      <TopNavbar
        title={SRL[lang]?.searchRecipesTitle}
        navigation={navigation}
        goBack={true}
      />
      <SearchbarComponent
        placeholderText={SLL[state.language].searchbarRecipePlaceholder}
      />
      <View style={styles.ovalFiltersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchContainerTitle}>
          {SRL[lang]?.recentSearchTitle}
        </Text>
        <RecentSearchComponent recentSearchText="Ensalada de atún" />
        <RecentSearchComponent recentSearchText="Curry de pollo" />
        <RecentSearchComponent recentSearchText="Porotos negros" />
        <RecentSearchComponent recentSearchText="Fideos con salsa de vegetales" />
      </View>
    </>
  );
};

export default SearchRecipes;

