import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';

const TabBarStyle = StyleSheet.create({
  container: {
    marginTop: normalizePx(30),
    height: normalizePx(60),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: normalizePx(8),
  },
  touch: {
    marginRight: normalizePx(350),
  },
  kababMenu: {
    fontSize: normalizeFontSize(30),
    transform: [{ rotate: '90deg' }],
    color: Colors.light.yellow,
    textAlign: 'right'
  },
  title: {
    color: Colors.light.yellow,
    fontSize: normalizeFontSize(16),
    fontFamily: 'nunito-black',
    textTransform: 'uppercase',
    textAlign: 'center'
  
  },
  line: {
    marginTop: normalizePx(0.5),
    backgroundColor: Colors.light.lineUpperTitle,
    height: normalizePx(0.6),
    width: normalizePx(420),
  },
});
export default TabBarStyle;
