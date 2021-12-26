import React, { FC } from 'react';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SLSL from '../../assets/Languages/ShoppingListScreenLanguages';
import FL from '../../assets/Languages/FiltersLanguages';
import SL from '../../assets/Languages/SearchLanguages';
import CL from '../../assets/Languages/CategoryLanguage';
import RecentSearchComponent from '../../components/HomeComponents/SearchComponents/RecentSearchComponent';
import TopBarWithGoBack from '../../components/Others/TopBarWithGoBack';
import SearchbarComponent from '../../components/HomeComponents/SearchComponents/SearchbarComponent';
import CategoryGridComponent from '../../components/HomeComponents/CategoryGridComponent';

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
      <TopBarWithGoBack
        title={SL[lang]?.searchIngredientTitle}
        navigation={navigation}
      />
      <SearchbarComponent
        placeholderText={SLSL[state.language].searchbarPlaceholder}
      />
      <View style={SearchIngredientStyle.recentSearchContainer}>
        <Text style={SearchIngredientStyle.recentSearchContainerTitle}>
          {SL[lang]?.recentSearchTitle}
        </Text>
        <RecentSearchComponent recentSearchText="Legumbres" />
        <RecentSearchComponent recentSearchText="Porotos" />
        <RecentSearchComponent recentSearchText="Verduras" />
      </View>
      <View style={SearchIngredientStyle.recentSearchContainer}>
        <Text style={SearchIngredientStyle.recentSearchContainerTitle}>
          {SL[lang]?.categories}
        </Text>
      </View>
      <View style={SearchIngredientStyle.categoryContainer}>
        <View style={SearchIngredientStyle.categoryRowContainer}>
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.legumes} />
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.vegetables} />
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.cereals} />
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.fat} />
        </View>
        <View style={SearchIngredientStyle.categoryRowContainer}>
          <CategoryGridComponent iconName="cupcake" catgoryName={CL[lang]?.flours} />
          <CategoryGridComponent iconName="fruit-cherries" catgoryName={CL[lang]?.fruits} />
          <CategoryGridComponent iconName="peanut" catgoryName={CL[lang]?.driedFruits} />
          <CategoryGridComponent iconName="food-steak" catgoryName={CL[lang]?.meats} />
        </View>
        <View style={SearchIngredientStyle.categoryRowContainer}>
          <CategoryGridComponent iconName="fish" catgoryName={CL[lang]?.fish} />
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.dairyProducts} />
          <CategoryGridComponent iconName="food-apple" catgoryName={CL[lang]?.potatoes} />
          <CategoryGridComponent iconName="spoon-sugar" catgoryName={CL[lang]?.sugars} />
        </View>
      </View>
    </>
  );
};

export default SearchIngredient;

const SearchIngredientStyle = StyleSheet.create({
  recentSearchContainer: {
    paddingLeft: normalizePx(15),
    paddingRight: normalizePx(10),
  },
  recentSearchContainerTitle: {
    marginVertical: normalizePx(15),
    color: Colors.light.yellow,
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(14),
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: normalizePx(5),
  },
  categoryRowContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
});
