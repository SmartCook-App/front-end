import { normalizePx, normalizeFontSize } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';
import { StyleSheet } from 'react-native';

const AddSubButtonStyle = StyleSheet.create({
  changePortionButton: {
    height: normalizePx(70),
    width: normalizePx(70),
    borderRadius: normalizePx(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.transparentYellow,
  },
  portionText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(40),
    padding: normalizePx(5),
  },
});
export default AddSubButtonStyle;
