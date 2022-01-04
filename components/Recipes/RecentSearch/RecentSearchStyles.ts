import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const RecentSearchStyle = StyleSheet.create({
    recentSearchElement: {
      paddingTop: normalizePx(10),
      paddingBottom: normalizePx(10),
      flexDirection: 'row',
      borderBottomWidth: normalizePx(1),
      borderColor: Colors.light.lightGrey1,
    },
    recentSearchElementText: {
      fontFamily: 'nunito-light',
      fontSize: normalizeFontSize(12),
      paddingHorizontal: normalizePx(15),
    },
  });
export default RecentSearchStyle;
