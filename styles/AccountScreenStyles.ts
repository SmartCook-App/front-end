import { StyleSheet } from "react-native";
import Colors from "../assets/Colors";

const FiltersComponentsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "column",
    flex: 0.5,
    justifyContent: "space-evenly",
  },
  headerRowContainer: {
    flexDirection: "row",
    paddingLeft: 30,
  },
  headerTextContainer: {
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 10,
  },
  filtersContainer: {
    flexDirection: "row",
    flex: 0.35,
    paddingTop: 10,
    paddingLeft: 30,
  },
  addFilterContainer: {
    flexDirection: "column",
  },
  switchContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontWeight: "bold",
  },
  switchContainerText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#FAB73D",
  },
  recipesContainer: {
    flex: 4,
  },
  followButton: {
    backgroundColor: "#FAB73D",
    color: "#FAB73D",
    borderRadius: 50,
    alignItems: "center",
    padding: 10,
    alignSelf: "stretch",
  },
  addFilterButton: {
    marginRight: 10,
    width: 62,
    height: 62,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.light.greyOfFilters,
  },
  addFilterButtonTitle: {
    fontFamily: "nunito-light",
    fontSize: 12,
    width: 65,
    textAlign: "center",
  },
  textProfile: {
    color: 'black',
  }
});

export default FiltersComponentsStyle;
