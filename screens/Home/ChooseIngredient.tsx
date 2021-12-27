import React, { FC, useState } from 'react';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SLSL from '../../assets/Languages/ShoppingListScreenLanguages';
import SL from '../../assets/Languages/SearchLanguages';
import TopBar from '../../components/Others/TopNavbar';
import SearchbarComponent from '../../components//HomeComponents/SearchComponents/SearchbarComponent';
import CategoryGridComponent from '../../components/HomeComponents/CategoryGridComponent';
import { Ingredients } from '../../data/IngredientsData';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  navigation: any;
}

const ChooseIngredient: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const [isPressed, setIsPressed] = useState(false);
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
        isPressed={isPressed}
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
      <TouchableOpacity onPress={() => navigation.navigate('SearchIngredient')}>
        <View style={ChooseIngredientStyle.searchIngredientButton}>
          <IoniconsIcon name={'search-outline'} color={'white'} size={25} />
          <Text style={ChooseIngredientStyle.searchIngredientButtonText}>
            {SLSL[state.language].searchbarPlaceholder}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={ChooseIngredientStyle.ingredientsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={4}
          data={Ingredients}
          renderItem={renderIngredient}
          keyExtractor={(item) => `${item}`}
        />
      </View>
      <TouchableOpacity>
        <View style={ChooseIngredientStyle.readyButton}>
          <AntDesign name="check" size={35} color="white" />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChooseIngredient;

const ChooseIngredientStyle = StyleSheet.create({
  subtextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: normalizePx(15),
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
    marginTop: normalizePx(30),
  },
  ingredientRowContainer: {
    marginVertical: normalizePx(20),
  },
  searchIngredientButton: {
    flexDirection: 'row',
    paddingTop: normalizePx(8),
    width: normalizePx(200),
    height: normalizePx(40),
    borderRadius: normalizePx(40),
    backgroundColor: Colors.light.transparentYellow,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  searchIngredientButtonText: {
    color: Colors.light.white,
    paddingLeft: normalizePx(7),
    fontFamily: 'nunito-bold',
  },
  readyButton: {
    marginRight: normalizePx(10),
    width: normalizePx(65),
    height: normalizePx(65),
    borderRadius: normalizePx(40),
    backgroundColor: Colors.light.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    right: normalizePx(15),
    bottom: normalizePx(20),
    alignSelf: 'flex-end',
  },
});
