import { StyleSheet, Platform, Dimensions } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
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
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    resizeMode: "cover",
    height: RECIPE_ITEM_HEIGHT - 25,
    borderRadius: BORDER_RADIUS,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    top: 0,
    position: "absolute",
    borderWidth: 0.1,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontFamily: "nunito-regular",
    textAlign: "center",
    // marginTop: 5,
    color: "#000000",
    marginHorizontal: 7,
  },
  ovalCal: {
    width: 45,
    height: 16,
    borderRadius: 50,
    backgroundColor: "#FAB73D",
    transform: [{ scaleX: 1 }],
  },
  ovalTime: {
    width: 55,
    height: 46,
    borderRadius: 50,
    backgroundColor: "#FAB73D",
    transform: [{ scaleX: 1 }],
  },
});
export default RecipiesComponentStyle;
