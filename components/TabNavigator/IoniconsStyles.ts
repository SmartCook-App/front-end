import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizePx } from '../../styles/normalize';

const TabBarStyle = StyleSheet.create({
  icon: {
    width: normalizePx(35),
    alignItems: 'center',
    color: Colors.light.darkGrey2,
  },
});
export default TabBarStyle;
