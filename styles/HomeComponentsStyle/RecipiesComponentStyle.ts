import { StyleSheet, Platform, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 115;
const RECIPE_ITEM_MARGIN = 18;

const RecipiesComponentStyle = StyleSheet.create({
  // image: {
  //   marginTop: 15,
  //   fontSize: 16,
  //   fontFamily: "nunito-regular",
  //   marginLeft: 15,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 25,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 26,
    borderColor: '#E9E9E9',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: "nunito-regular",
    textAlign: 'center',
    color: '#000000',
    marginRight: 7,
    marginLeft: 7,
  },
  oval: {
    width: 45,
    height: 16,
    borderRadius: 50,
    backgroundColor: "#FAB73D",
    transform: [{ scaleX: 1 }],
  }
});
export default RecipiesComponentStyle;
