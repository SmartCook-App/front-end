import { StyleSheet } from 'react-native';
import { normalizePx } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';

const ChooseIngredientStyles = StyleSheet.create({
    subtextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginVertical: normalizePx(15),
      minHeight: normalizePx(70)
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

  export default ChooseIngredientStyles;