import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

const FiltersComponentsStyle = StyleSheet.create({
  oval: {
    backgroundColor: Colors.light.greyOfFilters,
    borderRadius: 14,
    width: 80,
    height: 20,
    alignItems: "center",
    marginRight: 12,
    marginVertical: 20,
    justifyContent: "space-around",
  },
  letter: {
    fontFamily: "nunito-regular",
    fontSize: 10,
    width: 70,
    textAlign: "center",
  },
  container: {
    marginHorizontal: 22,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  circlePress: {
    backgroundColor: Colors.light.yellow,
  },
  circleNotPress: {
    backgroundColor: Colors.light.greyOfFilters,
  },
  allCircles: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    height: 70,
  },
  allText: {},
  textAndCircles: {
    flexDirection: "column",
  },
});

export default FiltersComponentsStyle;
