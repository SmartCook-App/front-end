import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';


const NutritionCircleStyle = StyleSheet.create({
  nutriCirclesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalizePx(40),
    paddingVertical: normalizePx(30),
    justifyContent: 'space-between',
  },
  nutriCircles: {
    borderRadius: normalizePx(50),
    width: normalizePx(70),
    height: normalizePx(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C4C4',
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

