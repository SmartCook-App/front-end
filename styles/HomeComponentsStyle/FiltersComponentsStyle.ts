import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

const FiltersComponentsStyle = StyleSheet.create({
  oval: {
    backgroundColor: Colors.light.greyOfFilters,
    borderRadius: 14,
    width: 80,
    height: 20,
    alignContent: "stretch",
    alignItems: "center",
    marginRight: 12,
    marginVertical: 20,
    justifyContent: "space-around",
  },
  letter: {
    fontFamily: "nunito-regular",
    fontSize: 10,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default FiltersComponentsStyle;
