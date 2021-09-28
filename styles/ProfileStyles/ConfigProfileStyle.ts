import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const ConfigProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  showViewRegisterLogIn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  registerLoginButton: {
    marginTop: "20%",
  },
  registerLoginButtonText: {
    fontSize: 22,
    fontFamily: "nunito-semiBold",
    color: "white",
  },
  crossButton: {
    color: "white",
    marginTop: "15%",
    marginLeft: "5%",
  },
  buttonTextOpacity: {
    color: "rgba(255, 255, 255, 0.53)",
  },
  line: {
    backgroundColor: "white",
    height: 2,
    width: "100%",
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    marginTop: "7%",
    borderRadius: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogIn: {
    backgroundColor: "white",
    padding: 20,
    marginTop: "40.5%",
    borderRadius: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    position: "relative",
    color: "#000000",
    textTransform: "uppercase",
  },
  textInput: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    width: 300,
    color: "white",
    padding: 5,
    margin: 15,
  },
  errorText: {
    fontSize: 14,
    color: Colors.light.error,
    width: 300,
  },
  icon: {
    color: "white",
    resizeMode: "contain",
    left: -13,
    position: "absolute",
  },
  passwordIcon: {
    color: "white",
    resizeMode: "contain",
    right: 18,
    position: "absolute",
  },
  viewInput: {
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    marginTop: 40,
    color: "white",
    fontFamily: "nunito-light",
    textAlign: "center",
  },
  footerTextBold: {
    fontFamily: "nunito-semiBold",
    textAlign: "center",
  },
});
export default ConfigProfileStyle;
