import React, { FC } from 'react';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import { View, StyleSheet, ScrollView, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SLSL from '../../assets/Languages/ShoppingListScreenLanguages';
import FL from '../../assets/Languages/FiltersLanguages';
import SL from '../../assets/Languages/SearchLanguages';
import TopBar from '../../components/Others/TopNavbar';
import SearchbarComponent from '../../components//HomeComponents/SearchComponents/SearchbarComponent';
import CategoryGridComponent from '../../components/HomeComponents/CategoryGridComponent';
import { Ingredients } from '../../data/IngredientsData';

interface Props {
  navigation: any;
}

const ChooseIngredient: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const { navigation } = props;
  const renderIngredient = (ingredient: any) => (
    <View style={ChooseIngredientStyle.ingredientRowContainer}>
      <CategoryGridComponent
        iconName="food-apple"
        image={ingredient.item.image}
        catgoryName={ingredient.item.title}
        isImage={true}
      />
    </View>
  );

  return (
    <>
      <TopBar
        title={SL[lang]?.searchIngredientTitle}
        navigation={navigation}
        goBack={true}
      />
      <View style={ChooseIngredientStyle.subtextContainer}>
        <Text style={ChooseIngredientStyle.capitalizedSubtext}>
          {SL[lang]?.searchIngredientSubTitleCapitalized}
        </Text>
        <Text style={ChooseIngredientStyle.normalSubtext}>
          {SL[lang]?.searchIngredientSubTitleNormal}
        </Text>
      </View>
      <SearchbarComponent
        placeholderText={SLSL[state.language].searchbarPlaceholder}
      />
      <View style={ChooseIngredientStyle.ingredientsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={4}
          data={Ingredients}
          renderItem={renderIngredient}
          keyExtractor={(item) => `${item}`}
        />
      </View>
    </>
  );
};

export default ChooseIngredient;

const ChooseIngredientStyle = StyleSheet.create({
  subtextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: normalizePx(10),
  },
  capitalizedSubtext: {
    textTransform: 'uppercase',
    fontFamily: 'nunito-semiBold',
  },
  normalSubtext: {
    fontFamily: 'nunito-light',
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: normalizePx(50),
  },
  ingredientRowContainer: {
    marginVertical: normalizePx(20),
  },
});
