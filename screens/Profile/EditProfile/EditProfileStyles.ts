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
    fontSize: normalizeFontSize(10),
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  deleteButton: {
    fontFamily: "nunito-light",
    color: Colors.light.white,
    marginTop: normalizePx(50),
    fontSize: normalizeFontSize(14),
  },
});
export default EditProfileStyles;
