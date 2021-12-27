import { StyleSheet } from "react-native";
import Colors from '../assets/Colors';
import { normalizeFontSize, normalizePx } from '../styles/normalize';

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
    paddingBottom: normalizePx(10),
    paddingTop: normalizePx(10),
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: normalizePx(20),
    paddingTop: normalizePx(20),
    paddingBottom: normalizePx(15),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ingredientIcon: {
    backgroundColor: "#FAB73D",
    color: "black",
    width: normalizePx(40),
    height: normalizePx(40),
    borderRadius: normalizePx(50),
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
    flex: 0.01,
    backgroundColor: "gray",
  },
  quantityContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  quantityIconsButton: {
    flex: 0.3
  },
  quantityIcons: {
    width: normalizePx(20),
    height: normalizePx(20),
    backgroundColor: "#FAB73D",
    color: "black",
    borderRadius: normalizePx(10),
    textAlign: "center",
  },
  quantityText: {
    flex: 0.4,
    color: "white",
  },
  bottomContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  },
  finishedListButton: {
    backgroundColor: 'rgba(56, 56, 56, .9)',
    alignItems: "center",
    justifyContent: 'center',
    height: normalizePx(40),
    width: normalizePx(250),
    fontFamily: 'nunito-light',
    borderColor: 'black',
    borderWidth: 2,
  },
  finishedListText: {
    padding: 15,
    color: 'white'
  },
  addButton: {
    marginLeft: 20,
    backgroundColor: Colors.light.yellow,
    width: normalizePx(50),
    height: normalizePx(50),
    borderRadius: normalizePx(30)
  },
  addButtonText: {
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: normalizePx(30)
  },
  addItemBar: {
    backgroundColor: 'white',
    width: normalizePx(300),
    height: normalizePx(40),
    borderRadius: normalizePx(30),
    paddingLeft: normalizePx(20),
    fontSize: normalizeFontSize(12),
    fontFamily: 'nunito-light'
  }
});
export default styles;