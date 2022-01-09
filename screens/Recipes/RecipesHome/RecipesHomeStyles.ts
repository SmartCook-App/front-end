import { StyleSheet } from "react-native";
import { normalizePx } from "../../../styles/normalize";

const RecipesHomeStyles = StyleSheet.create({
  mainContainer:{
    flex: 2,
    marginBottom: normalizePx(20),
  },
  container: {
    marginBottom: normalizePx(22),
    flex: 0.1,
    alignItems: 'center',
  },
  containerRoundFilters: {
    flexDirection: "row",
    marginHorizontal: normalizePx(20),
    flex: 0.3
  },
});

export default RecipesHomeStyles;
