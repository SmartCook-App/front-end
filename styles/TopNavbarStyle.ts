import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../assets/Colors";
import { normalizeFontSize, normalizePx } from "./normalize";

const TopNavbarStyle = StyleSheet.create({
  container: {
    marginTop: normalizePx(30),
    height: normalizePx(60),
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
  },
  title: {
    color: Colors.light.yellow,
    fontSize: normalizeFontSize(18),
    fontFamily: "nunito-black",
    
  },
  line: {
    marginTop: 0.5,
    backgroundColor: Colors.light.lineUpperTitle,
    height: 0.4,
    width: normalizePx(420),
  },
  goBack: {
    marginLeft:-130,
    fontSize: normalizePx(25),
    color: Colors.light.yellow,
    fontFamily: "nunito-black",
  },
  view: {
    flexDirection: "row",
  },
});
export default TopNavbarStyle;
