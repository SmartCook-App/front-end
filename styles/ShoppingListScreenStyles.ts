import { StyleSheet } from "react-native";
import Colors from '../assets/Colors';
import { normalizePx } from '../styles/normalize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#020202D1",
  },
  searchbarContainer: {
    flex: 0.1,
    paddingTop: normalizePx(20),
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
  },
  searchbar: {
    borderRadius: normalizePx(30),
  },
  listContainer: {
    flex: 0.8,
    paddingBottom: normalizePx(30),
    paddingTop: normalizePx(30),
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: normalizePx(20),
    paddingBottom: normalizePx(20),
    paddingLeft: normalizePx(20),
    paddingRight: normalizePx(20),
  },
  ingredientIcon: {
    flex: 0.1,
    backgroundColor: "#FAB73D",
    color: "black",
    borderRadius: normalizePx(30),
    textAlign: "center",
    textAlignVertical: "center",
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
    paddingLeft: normalizePx(15),
  },
  divider: {
    flex: 0.1,
    backgroundColor: "gray",
    marginTop: normalizePx(15),
  },
  quantityContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  quantityIcons: {
    flex: 0.3,
    backgroundColor: "#FAB73D",
    color: "black",
    borderRadius: normalizePx(30),
    textAlign: "center",
  },
  quantityText: {
    flex: 0.4,
    paddingLeft: normalizePx(8),
    color: "white",
  },
  finishedListContainer: {
    flex: 0.1,
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
    alignItems: "stretch",
  },
  finishedListButton: {
    borderRadius: normalizePx(30),
    backgroundColor: "#FAB73D",
    alignItems: "center",
    height: normalizePx(50),
  },
  finishedListText: {
    paddingTop: 15,
  },
});
export default styles;