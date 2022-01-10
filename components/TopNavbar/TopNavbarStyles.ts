import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import window from '../../assets/Layout';

const TopNavbarStyle = StyleSheet.create({
  textContainerWithoutGoBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignContent: 'center',
    color: Colors.light.yellow,
    fontSize: normalizeFontSize(16),
    fontFamily: 'nunito-black',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  line: {
    backgroundColor: Colors.light.lineUpperTitle,
    height: normalizePx(0.6),
    width: normalizePx(440),
  },
  mainContainer: {
    flex: 1,
  },
  goBack: {
    fontSize: normalizePx(25),
    color: Colors.light.yellow,
    fontFamily: 'nunito-black',
  },
  goBackContainer: {
    justifyContent: 'center',
    flex: 0.1,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 0.8,
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
  }
});
export default TopNavbarStyle;
