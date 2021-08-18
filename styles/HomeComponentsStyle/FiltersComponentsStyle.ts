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
    fontFamily: "nunito-light",
    fontSize: 10,
    width: 70,
    textAlign: "center",
  },
  titleItemFilter: {
    fontFamily: "nunito-bold",
    fontSize: 22,
    textAlign: "center",
  },
  filterOptions: {
    fontSize: 16,
    fontFamily: "nunito-regular",
    marginLeft: 12,
    padding: 3,
    flexDirection: "row",
  },
  iconFilterOptions: {
    marginLeft: 10,
  },
  arrow: {
    marginRight: 8,
  },
  buttonApply: {
    marginTop: 230,
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "black",
    width: 320,
    height: 60,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "nunito-regular",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
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
  directionIconAndFilterText: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    marginTop: 8,
  },
  title: {
    fontFamily: "nunito-light",
    fontSize: 12,
    width: 65,
    textAlign: "center",
  },
  bottomPopUp: {
    //tengo que cambiar
    position: "absolute",
    bottom: -21,
    left: -20,
    backgroundColor: "white",
    height: 320,
    width: 410,
  },
  crossButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
});

export default FiltersComponentsStyle;
