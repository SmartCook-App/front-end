import { StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

const IndexScreenStyle = StyleSheet.create({
  welcomeText: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: "nunito-regular",
    marginLeft: 15,
  },
  ingredientsButton: {
    position: "absolute",
    bottom: 35,
    right: 30,
    borderRadius: 50,
    backgroundColor: Colors.light.yellow,
  },
});
export default IndexScreenStyle;
