import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';

const RegisterStyle = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: '7%',
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    position: 'relative',
    color: '#000000',
    textTransform: 'uppercase',
  },
  textInput: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    width: 300,
    color: 'white',
    padding: 5,
    margin: 15,
  },
  errorText: {
    fontSize: 14,
    color: Colors.light.error,
    width: 300,
  },
  icon: {
    color: 'white',
    resizeMode: 'contain',
    left: -13,
    position: 'absolute',
  },
  passwordIcon: {
    color: 'white',
    resizeMode: 'contain',
    right: 18,
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
    marginTop: 40,
    color: 'white',
    fontFamily: 'nunito-light',
    textAlign: 'center',
  },
  footerTextBold: {
    fontFamily: 'nunito-semiBold',
    textAlign: 'center',
  },
});

export default RegisterStyle;
