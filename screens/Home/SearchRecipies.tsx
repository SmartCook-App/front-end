import React, { FC } from 'react';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SLSL from '../../assets/Languages/ShoppingListScreenLanguages';
import FL from '../../assets/Languages/FiltersLanguages';
import SL from '../../assets/Languages/SearchLanguages';
import OvalFilterComponent from '../../components/HomeComponents/OvalFilterComponent';
import RecentSearchComponent from '../../components/HomeComponents/SearchComponents/RecentSearchComponent';
import TopBar from '../../components/Others/TopNavbar';
import SearchbarComponent from '../../components//HomeComponents/SearchComponents/SearchbarComponent';

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
        placeholderText={SLSL[state.language].searchbarRecipiePlaceholder}
      />
      <View style={SearchRecipiesStyle.ovalFiltersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={SearchRecipiesStyle.recentSearchContainer}>
        <Text style={SearchRecipiesStyle.recentSearchContainerTitle}>
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

const SearchRecipiesStyle = StyleSheet.create({
  ovalFiltersContainer: {
    alignItems: 'center',
  },
  recentSearchContainer: {
    paddingLeft: normalizePx(15),
    paddingRight: normalizePx(10),
  },
  recentSearchContainerTitle: {
    color: Colors.light.yellow,
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(14),
  },
});
