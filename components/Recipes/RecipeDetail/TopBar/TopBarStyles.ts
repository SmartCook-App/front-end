import { StyleSheet } from 'react-native';
import { normalizePx } from '../../../../styles/normalize';

const TopBarStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignLeft: {
    marginTop: normalizePx(50),
    marginBottom: normalizePx(25),
    left: normalizePx(240),
  },
  alignRight: {
    marginTop: normalizePx(50),
    marginBottom: normalizePx(30),
    left: normalizePx(20),
  },
  iconsContainer: {
    width: normalizePx(140),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default TopBarStyle;
