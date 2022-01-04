import { StyleSheet, Dimensions } from "react-native";
import { normalizePx } from "../../../styles/normalize";

const { width, height } = Dimensions.get("window");
console.log(width);
const RecipesHomeStyles = StyleSheet.create({
  container: {
    marginHorizontal: normalizePx(width - 350),
    marginTop: normalizePx(12),
  },
  containerRoundFilters: {
    flexDirection: "row",
    width: normalizePx(370),
    marginHorizontal: normalizePx(20),
  },
});

export default RecipesHomeStyles;
