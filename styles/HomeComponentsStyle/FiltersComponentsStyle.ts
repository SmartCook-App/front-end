import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

const FiltersComponentsStyle = StyleSheet.create({
  oval: {
    flex: 1,
    backgroundColor: Colors.light.greyOfFilters,
    borderRadius: 14,
    width: 80,
    height: 20,
    alignItems: "center",
    marginRight: 12,
    marginVertical: 20,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  letter: {
    fontFamily: "nunito-regular",
    fontSize: 10,
    width: 70,
    textAlign: "center",
  },
  filterOptions: {
    fontSize: 20,
  },
  arrow: {
    marginRight: 8,
  },
  container: {
    marginHorizontal: 28,
    marginTop: 12,
  },
  containerRoundFilters: {
    width: 370,
    marginHorizontal: 20,
  },
  circle: {
    marginRight: 10,
    width: 62,
    height: 62,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
  circlePress: {
    backgroundColor: Colors.light.yellow,
  },
  circleNotPress: {
    backgroundColor: Colors.light.greyOfFilters,
  },
  allCircles: {
    justifyContent: "space-around",
    height: 70,
  },
  direction: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "nunito-light",
    fontSize: 12,
    width: 65,
    textAlign: "center",
  },
  bottomPopUp: {
    backgroundColor: "white",
    height: 200,
    width: 500,
  },
});

export default FiltersComponentsStyle;
