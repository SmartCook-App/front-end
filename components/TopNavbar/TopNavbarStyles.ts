import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';

const TopNavbarStyle = StyleSheet.create({
  container: {
    marginTop: normalizePx(30),
    height: normalizePx(60),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: Colors.light.yellow,
    fontSize: normalizeFontSize(16),
    fontFamily: 'nunito-black',
    position: 'absolute',
    textTransform: 'uppercase',
  },
  line: {
    marginTop: normalizeFontSize(0.5),
    backgroundColor: Colors.light.lineUpperTitle,
    height: normalizeFontSize(0.4),
    width: normalizePx(420),
  },
  goBack: {
    fontSize: normalizePx(25),
    color: Colors.light.yellow,
    fontFamily: 'nunito-black',
  },
  touch: {
    marginRight: normalizePx(350),
  },
});
export default TopNavbarStyle;
