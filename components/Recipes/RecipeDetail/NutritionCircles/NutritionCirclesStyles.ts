import { StyleSheet } from 'react-native';
import { normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

const NutritionCircleStyle = StyleSheet.create({
  nutriCircles: {
    borderRadius: normalizePx(50),
    width: normalizePx(70),
    height: normalizePx(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.light.lightGrey1,
    borderWidth: normalizePx(2),
  },
  nutriCirclesText: {
    color: Colors.light.white,
  },
  nutriCirclesNumber: {
    color: Colors.light.yellow,
    fontWeight: 'bold',
  },
});
export default NutritionCircleStyle;
