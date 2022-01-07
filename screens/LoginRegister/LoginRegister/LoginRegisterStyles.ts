import { StyleSheet } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';

const logInRegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
    },
    showViewRegisterLogIn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    registerLoginButton: {
        marginTop: '20%'
    },
    registerLoginButtonText: {
        fontSize: normalizeFontSize(22),
        fontFamily: 'nunito-semiBold',
        color: Colors.light.white,
    },
    crossButton: {
        color: Colors.light.white,
        marginTop: '15%',
        marginLeft: '5%',
    },
    buttonTextOpacity: {
        color: Colors.light.white,
        opacity: 0.53,
    },
    line: {
        backgroundColor: Colors.light.white,
        height: normalizePx(2),
        width: '100%'
    },
  });

export default logInRegisterStyle;