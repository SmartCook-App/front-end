import React, { FC } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CIL from './ChooseIngredientLanguages';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import IngredientCategoryComponent from '../../../components/Recipes/IngredientCategory/IngredientCategoryComponent';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import styles from './ChooseIngredientStyles';

interface Props {
  navigation: any;
}

const ChooseIngredientScreen: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const { navigation } = props;
  const renderIngredient = (ingredient: any) => (
    <View style={styles.ingredientRowContainer}>
      <IngredientCategoryComponent
        ingredientId={ingredient.item.ingredientId}
        name={ingredient.item.name}
        iconName="None"
        image={ingredient.item.image}
        isImage={true}
        isPressed={ingredient.item.press}
      />
    </View>
  );

  const goToMatchView = () => {
    navigation.navigate('RecipeMatchScreen');
  };

  return (
    <View style={{flex: 2}}>
      <TopNavbar
        title={CIL[lang]?.searchIngredientTitle}
        navigation={navigation}
        goBack={true}
      />
      <View style={styles.subtextContainer}>
        <Text style={styles.capitalizedSubtext}>
          {CIL[lang]?.searchIngredientSubTitleCapitalized}
        </Text>
        <Text style={styles.normalSubtext}>
          {CIL[lang]?.searchIngredientSubTitleNormal}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchIngredientScreen')}
      >
        <View style={styles.searchIngredientButton}>
          <IoniconsIcon name={'search-outline'} color={'white'} size={25} />
          <Text style={styles.searchIngredientButtonText}>
            {CIL[state.language].searchbarPlaceholder}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.ingredientsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={4}
          data={state.paintChooseIngredient.ingredientsArray}
          renderItem={renderIngredient}
          keyExtractor={(item) => `${item}`}
        />
      </View>
      <TouchableOpacity onPress={goToMatchView}>
        <View style={styles.readyButton}>
          <AntDesign name="check" size={35} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseIngredientScreen;
