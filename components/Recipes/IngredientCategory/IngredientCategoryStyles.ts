import { StyleSheet} from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { Dimensions } from 'react-native';
import Colors from '../../../assets/Colors';

const width = Dimensions.get('window').width;

const IngredientCategoryStyle = StyleSheet.create({
    eachCategoryContainer: {
      alignItems: 'center',
      right: normalizePx(5),
      width: width / 4,
    },
    categoryCircle: {
      marginRight: normalizePx(10),
      width: normalizePx(65),
      height: normalizePx(65),
      borderRadius: normalizePx(40),
      backgroundColor: Colors.light.greyOfFilters,
      alignItems: 'center',
      justifyContent: 'center',
      left: normalizePx(5),
    },
    categoryTitle: {
      fontFamily: 'nunito-light',
      fontSize: normalizeFontSize(10),
      width: width / 4,
      textAlign: 'center',
    },
    circlePress: {
      backgroundColor: Colors.light.yellowRecipeIcons,
    },
    circleNotPress: {
      backgroundColor: Colors.light.greyOfFilters,
    },
  });
export default IngredientCategoryStyle;
