import { StyleSheet, Platform, Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

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
    top: "10%",
    left: "9%",
  },
  carousel: {
    top: 60
  },
  carouselItem: {
    backgroundColor:'transparent',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25
  },
  carouselItemTitle: {
    fontFamily: "nunito-light",
    fontSize: 20,
    textAlign: "center",
    color: "#DADADA",
  },
  carouselItembody: {
    fontFamily: "nunito-light",
    fontSize: 15,
    textAlign: "center",
    color: "#DADADA"
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
