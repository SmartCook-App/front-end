import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';

const SelectBarStyles = StyleSheet.create({
  accordionBarText: {
    fontSize: normalizeFontSize(14),
    fontFamily: 'nunito-regular',
  },
  accordionBar: {
    padding: normalizePx(5),
    width: normalizePx(300),
    alignSelf: 'center',
    backgroundColor: Colors.light.lightGrey2,
  },
  listItemsContainer: {
    height: normalizePx(150),
    width: normalizePx(300),
    alignSelf: 'center',
  },
  listItemText: {
    fontSize: normalizeFontSize(12),
    fontFamily: 'nunito-regular',
  },
});

export default SelectBarStyles;
