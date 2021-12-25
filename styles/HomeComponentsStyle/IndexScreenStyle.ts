import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizePx } from '../../styles/normalize';

const IndexScreenStyle = StyleSheet.create({
  ingredientsButton: {
    position: 'absolute',
    top: normalizePx(710),
    right: normalizePx(30),
    borderRadius: normalizePx(50),
    backgroundColor: Colors.light.yellow,
  },
});
export default IndexScreenStyle;
