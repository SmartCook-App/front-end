import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';

const OvalFilterStyle = StyleSheet.create({
  oval: {
    flex: 1,
    backgroundColor: Colors.light.greyOfFilters,
    borderRadius: normalizePx(14),
    width: normalizePx(80),
    height: normalizePx(20),
    alignItems: 'center',
    marginRight: normalizePx(12),
    marginVertical: normalizePx(20),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  letter: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(10),
    width: normalizePx(70),
    textAlign: 'center',
  },
  titleItemFilter: {
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(22),
    textAlign: 'center',
  },
  filterOptions: {
    fontSize: normalizeFontSize(16),
    fontFamily: 'nunito-regular',
    padding: normalizePx(3),
    flexDirection: 'row',
  },
  iconFilterOptions: {
    marginLeft: normalizePx(25),
    marginRight: normalizePx(6),
  },
  arrow: {
    marginRight: normalizePx(8),
  },
  buttonApply: {
    marginTop: normalizePx(230),
    borderRadius: normalizePx(8),
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: normalizePx(340),
    height: normalizePx(60),
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'nunito-regular',
    alignSelf: 'center',
    fontSize: normalizeFontSize(20),
    color: 'white',
  },
  directionIconAndFilterText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalizePx(4),
    marginTop: normalizePx(8),
  },
  check: {
    marginLeft: normalizePx(320),
    position: 'absolute',
    color: Colors.light.yellow,
    opacity: 0.5,
  },
  bottomPopUp: {
    position: 'absolute',
    bottom: normalizePx(-21),
    left: normalizePx(-20),
    backgroundColor: 'white',
    height: normalizePx(320),
    width: normalizePx(410),
    borderRadius: normalizePx(8),
  },
  crossButton: {
    alignSelf: 'flex-end',
    marginRight: normalizePx(10),
    marginTop: normalizePx(10),
  },
  pickerView: {
    padding: normalizePx(8),
    width: normalizePx(200),
  },
});

export default OvalFilterStyle;
