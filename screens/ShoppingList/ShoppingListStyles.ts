import { StyleSheet } from "react-native";
import { colorsDark } from "react-native-elements/dist/config";
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';

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
    backgroundColor: Colors.light.semiTransparent,
  },
  listContainer: {
    flex: 1,
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
    backgroundColor: Colors.light.yellow,
    color: Colors.light.black,
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
    color: Colors.light.white,
    paddingLeft: normalizePx(15),
  },
  divider: {
    flex: 0.01,
    backgroundColor: Colors.light.lightGrey,
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
    backgroundColor: Colors.light.yellow,
    color: Colors.light.black,
    borderRadius: normalizePx(10),
    textAlign: "center",
  },
  quantityText: {
    flex: 0.4,
    color: Colors.light.white,
  },
  bottomContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  },
  finishedListButton: {
    backgroundColor: Colors.light.lightGrey,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: 'center',
    height: normalizePx(40),
    width: normalizePx(250),
    fontFamily: 'nunito-light',
    borderColor: Colors.light.black,
    borderWidth: normalizePx(2),
  },
  finishedListText: {
    padding: normalizePx(15),
    color: Colors.light.white,
  },
  addButton: {
    marginLeft: normalizePx(20),
    backgroundColor: Colors.light.yellow,
    width: normalizePx(50),
    height: normalizePx(50),
    borderRadius: normalizePx(30)
  },
  addButtonText: {
    color: Colors.light.black,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: normalizePx(30)
  },
  addItemBar: {
    backgroundColor: Colors.light.white,
    width: normalizePx(300),
    height: normalizePx(40),
    borderRadius: normalizePx(30),
    paddingLeft: normalizePx(20),
    fontSize: normalizeFontSize(12),
    fontFamily: 'nunito-light'
  },
  // SWIPE
  rightActions: {
    backgroundColor: Colors.light.red,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: normalizePx(4)
  },
  actionText: {
    color: Colors.light.white,
    fontWeight: '600',
    padding: normalizePx(20)
  },
});
export default styles;