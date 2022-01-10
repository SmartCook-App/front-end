import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import window from '../../../../assets/Layout';

const TabBarStyle = StyleSheet.create({
  mainContainer: {
    padding: normalizePx(8),
    flex: 1
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
    backgroundColor: Colors.light.lineUpperTitle,
    height: normalizePx(0.6),
    width: normalizePx(440),
  },
  horizontalContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: window.window.width - normalizePx(10),
    alignSelf: 'center'
  },
  emptyView: {
    flex: 0.1,

  },
  textContainer: {
    justifyContent: 'center',
    flex: 0.8,
  },
  threeCircles: {
    flex: 0.1,
  }
});
export default TabBarStyle;
