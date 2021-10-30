import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../assets/Colors";

const TopNavbarStyle = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    color: Colors.light.yellow,
    fontSize: 25,
    fontFamily: "nunito-black",
  },
  line: {
    marginTop: 20,
    backgroundColor: Colors.light.lineUpperTitle,
    height: 0.4,
    width: 100,
  },
  goBack: {
    fontSize: 30,
    color: Colors.light.yellow,
    fontFamily: "nunito-black",
  },
  view: {
    flexDirection: "row",
    // alignItems: "flex-start",
    // padding: 45,
  },
});
export default TopNavbarStyle;
