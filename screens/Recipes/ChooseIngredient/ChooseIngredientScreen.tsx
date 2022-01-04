import React, { FC } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SLL from '../../ShoppingList/ShoppingListLanguages';
import SL from '../../../assets/Languages/Recipes/SearchLanguages';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import IngredientCategoryComponent from '../../../components/Recipes/IngredientCategory/IngredientCategoryComponent';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import styles from './ChooseIngredientStyles';

interface Props {
  navigation: any;
}

const ChooseIngredient: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  // const [isPressed, setIsPressed] = useState(false);
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
    console.log('estamos acr')
    navigation.navigate('Match', {
      screen: 'Match',
    });
  }

  return (
    <>
      <TopNavbar
        title={SL[lang]?.searchIngredientTitle}
        navigation={navigation}
        goBack={true}
      />
      <View style={styles.subtextContainer}>
        <Text style={styles.capitalizedSubtext}>
          {SL[lang]?.searchIngredientSubTitleCapitalized}
        </Text>
        <Text style={styles.normalSubtext}>
          {SL[lang]?.searchIngredientSubTitleNormal}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SearchIngredient')}>
        <View style={styles.searchIngredientButton}>
          <IoniconsIcon name={'search-outline'} color={'white'} size={25} />
          <Text style={styles.searchIngredientButtonText}>
            {SLL[state.language].searchbarPlaceholder}
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
    </>
  );
};

export default ChooseIngredient;
