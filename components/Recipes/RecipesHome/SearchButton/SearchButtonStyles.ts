import { StyleSheet } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';

const RoundFiltersStyle = StyleSheet.create({
  circle: {
    marginRight: normalizePx(10),
    width: normalizePx(62),
    height: normalizePx(62),
    borderRadius: normalizePx(50),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(12),
    width: normalizePx(65),
    textAlign: 'center',
  },
});

export default RoundFiltersStyle;
