import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';

const logInRegisterStyle = StyleSheet.create({
  buttonLogIn: {
    backgroundColor: Colors.light.white,
    padding: normalizePx(20),
    //TODO
    marginTop: '40.5%',
    borderRadius: normalizePx(20),
    width: normalizePx(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: normalizeFontSize(14),
    position: 'relative',
    color: Colors.light.black,
    textTransform: 'uppercase',
  },
  textInput: {
    borderBottomColor: Colors.light.background,
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
    resizeMode: 'contain',
    left: normalizePx(-13),
    position: 'absolute',
  },
  passwordIcon: {
    color: Colors.light.white,
    resizeMode: 'contain',
    right: normalizePx(18),
    position: 'absolute',
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginTop: normalizePx(40),
    alignSelf: 'center',
    color: Colors.light.white,
    fontFamily: 'nunito-light',
    textAlign: 'center',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.darkGrey3,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: normalizePx(5),
    transform: [{ translateX: -(400 * 0.4) }, { translateY: -90 }],
    height: normalizePx(250),
    width: normalizePx(400 * 0.8),
    backgroundColor: Colors.light.background,
    borderRadius: normalizePx(7),
  },
  uploadButtonContainer: {
    backgroundColor: Colors.light.black,
    height: normalizePx(30),
    width: normalizePx(80),
    justifyContent: 'center',
    borderRadius: normalizePx(20),
  },
  forgetPasswordTitle: {
    fontSize: normalizeFontSize(20),
    fontWeight: 'bold'
  },
  uploadButton: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,
    alignSelf: 'center',
  },
  forgetPassowordDescription: {
    fontSize: normalizeFontSize(12),
    padding: normalizePx(10)
  }
});

export default logInRegisterStyle;
