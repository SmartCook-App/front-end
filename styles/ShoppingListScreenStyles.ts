import { StyleSheet } from "react-native";
import Colors from '../assets/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#020202D1",
  },
  searchbarContainer: {
    flex: 0.1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchbar: {
    borderRadius: 30,
  },
  listContainer: {
    flex: 0.8,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ingredientIcon: {
    flex: 0.1,
    backgroundColor: "#FAB73D",
    color: "black",
    borderRadius: 30,
    textAlign: "center",
  },
  ingredientContainer: {
    flex: 0.9,
    flexDirection: "column",
  },
  textAndQuantityContainer: {
    flex: 0.9,
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientText: {
    flex: 0.7,
    color: "white",
    paddingLeft: 15,
  },
  divider: {
    flex: 0.1,
    backgroundColor: "gray",
    marginTop: 15,
  },
  quantityContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  quantityIcons: {
    flex: 0.3,
    backgroundColor: "#FAB73D",
    color: "black",
    borderRadius: 30,
    textAlign: "center",
  },
  quantityText: {
    flex: 0.4,
    paddingLeft: 8,
  },
  finishedListContainer: {
    flex: 0.1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "stretch",
  },
  finishedListButton: {
    borderRadius: 30,
    backgroundColor: "#FAB73D",
    alignItems: "center",
    height: 50,
  },
  finishedListText: {
    paddingTop: 15,
  },
});
export default styles;