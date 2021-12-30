import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 131;
const RECIPE_ITEM_MARGIN = 18;
const BORDER_RADIUS = 15;

const RecipiesComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 25,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderColor: "#E9E9E9",
    borderWidth: 0.5,
    borderRadius: BORDER_RADIUS,
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT - 21,
    borderRadius: BORDER_RADIUS, 
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0

  },
  title: {
    flex: 1,
    fontSize: 12,
    fontFamily: "nunito-regular",
    textAlign: 'center',
    color: '#000000',
    marginRight: 6,
    marginLeft: 6,
  },
  likesOval: {
    alignItems: 'center',
    width: 45,
    height: 16,
    fontSize: 10,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: "#FAB73D",
    transform: [{ scaleX: 1 }],
    alignSelf: 'flex-end',
    right: (SCREEN_WIDTH - (recipeNumColums + 20) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    top: RECIPE_ITEM_HEIGHT - 60
  },
  timeOval: {
    alignItems: 'center', 
    width: 60,
    height: 16,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: '#ffffff',
    left: 12,
    top: 5,
    fontSize: 10,
  },
});
export default RecipiesComponentStyle;
