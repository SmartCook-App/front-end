import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import { normalizeFontSize, normalizePx } from "../../../styles/normalize";

const EditProfileStyles = StyleSheet.create({
  textInput: {
    borderBottomColor: Colors.light.white,
    borderBottomWidth: normalizePx(1),
    width: normalizePx(300),
    color: Colors.light.white,
    padding: normalizePx(5),
    margin: normalizePx(15),
  },
  errorText: {
    fontSize: normalizeFontSize(14),
    color: Colors.light.yellow,
    width: normalizePx(300),
  },
  icon: {
    color: Colors.light.white,
    resizeMode: "contain",
    left: normalizePx(-13),
    position: "absolute",
  },
  viewInput: {
    alignItems: "center",
    justifyContent: "center",
  },
  textUploadPicture: {
    fontFamily: "nunito-bold",
    fontSize: normalizeFontSize(14),
    color: Colors.light.yellow,
  },
  personalInfoText: {
    fontSize: normalizeFontSize(9),
    textTransform: 'uppercase'
  },
  personalInfoView: {
    marginRight: normalizePx(200),
    marginTop: normalizePx(60),
    marginBottom: normalizePx(10),
  },
  pictureUploadPicture: {
    width: normalizePx(50),
    height: normalizePx(50),
    borderRadius: normalizePx(50),
  },
  firstcontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 5,
    flex: 1
  },
  pictureUploadContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: normalizePx(100),
    height: normalizePx(100),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalizePx(50),
    backgroundColor: Colors.light.lightGrey2,
  },
  changePasswordText: {
    fontFamily: "nunito-light",
    color: Colors.light.white,
    marginTop: normalizePx(40),
    fontSize: normalizeFontSize(14),
  },
});
export default EditProfileStyles;
