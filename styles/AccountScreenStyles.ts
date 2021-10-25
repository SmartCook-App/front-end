import { StyleSheet } from "react-native";

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
    flex: 0.35,
    paddingTop: 10,
    paddingLeft: 30,
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
});

export default FiltersComponentsStyle;
