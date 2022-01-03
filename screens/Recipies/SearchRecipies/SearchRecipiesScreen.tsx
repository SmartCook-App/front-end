import React, { FC } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SLL from '../../ShoppingList/ShoppingListLanguages';
import FL from '../../../assets/Languages/Recipies/RecipieFiltersHomeLanguages';
import SL from '../../../assets/Languages/Recipies/SearchLanguages';
import OvalFilterComponent from '../../../components/HomeComponents/OvalFilterComponent';
import RecentSearchComponent from '../../../components/HomeComponents/SearchComponents/RecentSearchComponent';
import TopBar from '../../../components/Others/TopNavbar';
import SearchbarComponent from '../../../components/HomeComponents/SearchComponents/SearchbarComponent';
import styles from './SearchRecipiesStyles';

interface Props {
  navigation: any;
}

const SearchRecipies: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
        );
  var listNamesFilters = Object.values(FL[state.language]);
  const { navigation } = props;
  return (
    <>
      <TopBar
        title={SL[lang]?.searchRecipiesTitle}
        navigation={navigation}
        goBack={true}
      />
      <SearchbarComponent
        placeholderText={SLL[state.language].searchbarRecipiePlaceholder}
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
          {SL[lang]?.recentSearchTitle}
        </Text>
        <RecentSearchComponent recentSearchText="Ensalada de atún" />
        <RecentSearchComponent recentSearchText="Curry de pollo" />
        <RecentSearchComponent recentSearchText="Porotos negros" />
        <RecentSearchComponent recentSearchText="Fideos con salsa de vegetales" />
      </View>
    </>
  );
};

export default SearchRecipies;

