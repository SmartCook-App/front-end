import { StyleSheet, Dimensions } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
  homeButton: {
    backgroundColor: Colors.light.white,
    padding: normalizePx(20),
    height: normalizePx(60),
    borderRadius: normalizePx(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    fontSize: normalizeFontSize(20),
    fontFamily: 'nunito-semiBold',
    position: 'relative',
    color: Colors.light.black,
    left: '9%',
  },
  homeMailIcon: {
    left: normalizeFontSize(50),
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default HomeStyle;
