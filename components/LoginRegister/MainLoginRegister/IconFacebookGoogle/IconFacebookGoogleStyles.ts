import { StyleSheet, Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

const IconFacebookGoogleStyle = StyleSheet.create({
  icons: {
    borderRadius: 45,
    width: 70,
    height: 70,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  imageButtonFacebook: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  imageButtonGoogle: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default IconFacebookGoogleStyle;