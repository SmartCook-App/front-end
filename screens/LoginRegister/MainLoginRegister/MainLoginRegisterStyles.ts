import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
import { normalizeFontSize, normalizePx } from "../../../styles/normalize";

const MainLoginRegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    textTransform: "uppercase",
    color: Colors.light.yellow,
    fontFamily: "nunito-black",
    fontSize: normalizeFontSize(40),
    padding: normalizePx(30),
    top: normalizePx(70),
    textAlign: "center",
  },
  subtitle: {
    color: Colors.light.white,
    fontFamily: "nunito-semiBold",
    fontSize: normalizeFontSize(20),
    top: normalizePx(50),
    fontWeight: "bold",
    textAlign: "center",
  },
  rectanguleContainer: {
    height: normalizePx(140),
    backgroundColor: "rgba(52, 52, 52, 0.07)",
    borderWidth: normalizePx(1),
    borderColor: Colors.light.darkGrey2,
    top: "3%",
    borderRadius: normalizePx(7),
  },
  containerFooter: {
    flex: 1,
    width: normalizePx(340),
    top: "10%",
    left: "9%",
  },
  carousel: {
    top: normalizePx(60),
  },
  textFooter: {
    fontFamily: "nunito-light",
    fontSize: normalizeFontSize(21),
    textAlign: "center",
    top: "10%",
    color: Colors.light.white,
  },
  textLater: {
    top: "8%",
    fontSize: normalizeFontSize(18),
    color: Colors.light.lightGrey2,
    
  },
  buttonsLogin: {
    padding: normalizePx(25),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default MainLoginRegisterStyle;
