import { StyleSheet, Dimensions } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
  mainContainer:{
    flexDirection: 'row',
    flex: 1,
    padding: normalizePx(10),
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: Colors.light.white,
    padding: normalizePx(7),
    borderRadius: normalizePx(12),
    flex: 0.3,
  },
  homeButtonText: {
    fontSize: normalizeFontSize(20),
    fontFamily: 'nunito-semiBold',
    flex: 3,
    color: Colors.light.black,
    alignSelf: 'center'
  },
  homeMailIcon: {
    flex: 0.6,
  },
});

export default HomeStyle;
