import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';
import { StyleSheet } from 'react-native';


const StepsDetailsStyle = StyleSheet.create({
    image: {
      height: normalizePx(240),
    },
    circle: {
      backgroundColor: Colors.light.yellow,
      height: normalizePx(70),
      width: normalizePx(70),
      borderRadius: normalizePx(35),
      position: 'absolute',
      top: normalizePx(-35),
      alignSelf: 'center',
      textAlign: 'center',
      paddingVertical: normalizePx(5),
      color: Colors.light.white,
      fontWeight: 'bold',
      fontSize: normalizeFontSize(30),
    },
    stepsDescription: {
      padding: normalizePx(15),
      fontSize: normalizeFontSize(15),
      height: normalizePx(100),
      fontWeight: 'bold',
      color: Colors.light.white,
      backgroundColor: Colors.light.transparentBlack,
      fontFamily: "nunito-semiBold",
    },
  });
export default StepsDetailsStyle;
