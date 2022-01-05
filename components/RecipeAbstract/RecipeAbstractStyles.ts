import { StyleSheet, Dimensions } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = normalizePx(131);
const RECIPE_ITEM_MARGIN = normalizePx(18);
const BORDER_RADIUS = normalizePx(15);

const RecipeAbstractStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.greyOfFilters,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: normalizePx(25),
    width:
      (SCREEN_WIDTH - (recipeNumColums + normalizePx(1)) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderColor: Colors.light.greyOfFilters,
    borderWidth: normalizePx(0.5),
    borderRadius: BORDER_RADIUS,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + normalizePx(1)) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT - normalizePx(21),
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    borderBottomLeftRadius: normalizePx(0),
    borderBottomRightRadius: normalizePx(0),
  },
  title: {
    flex: 1,
    fontSize: normalizeFontSize(12),
    fontFamily: 'nunito-regular',
    textAlign: 'center',
    color: Colors.light.black,
    marginRight: normalizePx(6),
    marginLeft: normalizePx(6),
  },
  likesOval: {
    alignItems: 'center',
    width: normalizePx(45),
    height: normalizePx(16),
    fontSize: normalizeFontSize(10),
    textAlign: 'center',
    borderRadius: normalizePx(50),
    backgroundColor: Colors.light.greyOfFilters,
    transform: [{ scaleX: 1 }],
    alignSelf: 'flex-end',
    right:
      (SCREEN_WIDTH -
        (recipeNumColums + normalizePx(20)) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    top: RECIPE_ITEM_HEIGHT - normalizePx(60),
  },
  timeOval: {
    alignItems: 'center',
    width: normalizePx(60),
    height: normalizePx(16),
    textAlign: 'center',
    borderRadius: normalizePx(50),
    backgroundColor: Colors.light.darkGray1,
    color: Colors.light.white,
    left: normalizePx(12),
    top: normalizePx(5),
    fontSize: normalizePx(10),
  },
});
export default RecipeAbstractStyle;
