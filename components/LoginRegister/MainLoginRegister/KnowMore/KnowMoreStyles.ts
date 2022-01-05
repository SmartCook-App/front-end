import { StyleSheet, Dimensions } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const KnowMoreStyle = StyleSheet.create({
  carouselItem: {
    backgroundColor: Colors.light.transparent,
    borderRadius: normalizePx(5),
    height: normalizePx(250),
    padding: normalizePx(50),
    marginLeft: normalizePx(25),
    marginRight: normalizePx(25),
  },
  carouselItemTitle: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(20),
    textAlign: 'center',
    color: Colors.light.lightGrey2,
  },
  carouselItembody: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(15),
    textAlign: 'center',
    color: Colors.light.lightGrey2,
  },
});
export default KnowMoreStyle;
