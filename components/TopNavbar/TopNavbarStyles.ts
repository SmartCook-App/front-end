import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';

const TopNavbarStyle = StyleSheet.create({
  firstContainer: {
    flex: 0.2,
    textAlign: 'center',
    justifyContent: 'center',
    padding: normalizePx(15),
  },
  containerWithoutGoBack:{
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: Colors.light.yellow,
    fontSize: normalizeFontSize(16),
    fontFamily: 'nunito-black',
    textTransform: 'uppercase',
    textAlign: 'center',
    flex: 1
  },
  line: {
    backgroundColor: Colors.light.lineUpperTitle,
    height: normalizePx(0.6),
    width: normalizePx(440),
  },
  containerWithGoBack:{
    flex: 0.15,
    justifyContent: 'center',
  },
  secondContainer: {
    flexDirection: 'row',
    flex:1,
  },
  goBack: {
    fontSize: normalizePx(25),
    color: 'black',
    fontFamily: 'nunito-black',
    backgroundColor: 'blue'
  },
  goBackView: {
    flex: 1,
    backgroundColor: 'red',

  },
  textView: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});
export default TopNavbarStyle;
