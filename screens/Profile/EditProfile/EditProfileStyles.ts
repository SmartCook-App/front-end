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
    marginBottom: normalizePx(10),
    padding: normalizePx(5),
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
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.darkGrey3,
  },
  modalView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: normalizePx(250),
    width: normalizePx(380),
    backgroundColor: Colors.light.background,
    borderRadius: normalizePx(7),
    padding: normalizePx(15),
  },
  forgetPasswordTitle: {
    fontSize: normalizeFontSize(20),
    fontWeight: 'bold'
  },
  forgetPassowordDescription: {
    fontSize: normalizeFontSize(12),
    padding: normalizePx(10)
  },
  uploadButtonContainer: {
    backgroundColor: Colors.light.yellow,
    height: normalizePx(30),
    width: normalizePx(80),
    justifyContent: 'center',
    borderRadius: normalizePx(20),
    marginTop: normalizePx(10)
  },
  uploadButton: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,
    alignSelf: 'center',
  },
  line: {
    backgroundColor: Colors.light.lightGrey,
    height: normalizePx(0.6),
    width: '80%'
  }
});
export default EditProfileStyles;
