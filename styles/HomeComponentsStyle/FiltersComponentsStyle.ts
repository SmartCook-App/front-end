import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../../assets/Colors";
import window from "../../assets/Layout";

const { width, height } = Dimensions.get("window");
console.log(width);
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
    // marginLeft: 12,
    padding: 3,
    flexDirection: "row",
  },
  iconFilterOptions: {
    marginLeft: 25,
    marginRight: 6,
  },
  arrow: {
    marginRight: 8,
  },
  buttonApply: {
    marginTop: 230,
    borderRadius: 8,
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "black",
    width: 340,
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
    marginHorizontal: width - 350,
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
  check: {
    marginLeft: 320,
    position: "absolute",
    color: Colors.light.yellow,
    opacity: 0.5,
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
    borderRadius: 8,
  },
  crossButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  pickerView: {
    padding: 8,
    width: 200,
  },
});

export default FiltersComponentsStyle;
