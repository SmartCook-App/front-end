import { StyleSheet, Dimensions } from 'react-native';
import { normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const IconFacebookGoogleStyle = StyleSheet.create({
  icons: {
    borderRadius: normalizePx(45),
    width: normalizePx(70),
    height: normalizePx(70),
    backgroundColor: Colors.light.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButtonFacebook: {
    height: normalizePx(50),
    width: normalizePx(50),
    resizeMode: 'contain',
  },
  imageButtonGoogle: {
    height: normalizePx(50),
    width: normalizePx(50),
    resizeMode: 'contain',
  },
});

export default IconFacebookGoogleStyle;
