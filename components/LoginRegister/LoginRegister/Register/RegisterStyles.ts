import { StyleSheet } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

const RegisterStyle = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.white,
    padding: normalizePx(20),
    //TODO
    marginTop: '7%',
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
    color: Colors.light.white,
    fontFamily: 'nunito-light',
    textAlign: 'center',
  },
  footerTextBold: {
    fontFamily: 'nunito-semiBold',
    textAlign: 'center',
  },
});

export default RegisterStyle;
