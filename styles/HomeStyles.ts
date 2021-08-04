import { StyleSheet, Platform, Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
// Fix for ios
// let marginTopIos = 0;
// if (Platform.OS === "ios") {
//   if (windowHeight >= 920) {
//     marginTopIos = -90;
//   } else if (windowHeight >= 840 && windowHeight < 920) {
//     marginTopIos = -85;
//   } else if (windowHeight >= 800 && windowHeight < 840) {
//     marginTopIos = -80;
//   } else {
//     marginTopIos = -35;
//   }
// }

// let modalFlex;
// if (Platform.OS === "ios") {
//   if (windowHeight >= 920) {
//     modalFlex = 0.25;
//   } else if (windowHeight >= 840 && windowHeight < 920) {
//     modalFlex = 0.25;
//   } else if (windowHeight >= 730 && windowHeight < 840) {
//     modalFlex = 0.3; // iPhone 6/7/8 Plus (736)
//   } else if (windowHeight >= 650 && windowHeight < 730) {
//     modalFlex = 0.35;
//   } else if (windowHeight >= 550 && windowHeight < 650) {
//     modalFlex = 0.6;
//   } else {
//     modalFlex = 0.25;
//   }
// } else if (Platform.OS === "android") {
//   if (windowHeight >= 920) {
//     modalFlex = 0.25;
//   } else if (windowHeight >= 840 && windowHeight < 920) {
//     modalFlex = 0.35;
//   } else if (windowHeight >= 650 && windowHeight < 840) {
//     modalFlex = 0.35; // Nexus 6/Pixel 2 XL/Pixel 3a XL (683)
//   } else if (windowHeight >= 590 && windowHeight < 650) {
//     modalFlex = 0.43; // WXGA/Nexus 4 (4.7")
//   } else {
//     modalFlex = 0.5; // WVGA Nexus S/Nexus S (4") (533)
//   }
// } else {
//   modalFlex = 0.25;
// }

const HomeStyle = StyleSheet.create({
  // boardContainerFixIos: {
  //   marginTop: marginTopIos,
  // },
  // modalView: {
  //   flex: modalFlex,
  // },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(109,108,108,0.41)",
  },
  childtwo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.57)",
  },
  title: {
    textTransform: "uppercase",
    color: "#FAB73D",
    fontFamily: "nunito-black",
    fontSize: 40,
    padding: 30,
    top: 70,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontFamily: "nunito-semiBold",
    fontSize: 20,
    top: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontFamily: "nunito-light",
    fontSize: 20,
    top: 50,
    textAlign: "center",
    color: "#DADADA",
  },
  rectanguleContainer: {
    height: 140,
    backgroundColor: "rgba(52, 52, 52, 0.07)",
    borderWidth: 1,
    borderColor: "#959595",
    top: "3%",
    borderRadius: 7,
  },
  containerFooter: {
    flex: 1,
    width: 340,
    top: "45%",
    left: "9%",
  },
  scroller: {
    flex: 1,
  },
  textFooter: {
    fontFamily: "nunito-light",
    fontSize: 21,
    textAlign: "center",
    top: "10%",
    color: "#FFFFFF",
  },
  textLater: {
    top: "8%",
    fontSize: 18,
    color: "#DADADA",
  },
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
  buttonsLogin: {
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  homeButton: {
    backgroundColor: "white",
    padding: 20,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonText: {
    fontSize: 20,
    fontFamily: "nunito-semiBold",
    position: "relative",
    color: "#000000",
    left: "9%",
  },
  homeMailIcon: {
    left: 50,
    resizeMode: "contain",
    position: "absolute",
  },
});

export default HomeStyle;
