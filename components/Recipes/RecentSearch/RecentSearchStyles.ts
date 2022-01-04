import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';

const RecentSearchStyle = StyleSheet.create({
    recentSearchElement: {
      paddingTop: normalizePx(10),
      paddingBottom: normalizePx(10),
      flexDirection: 'row',
      borderBottomWidth: normalizePx(1),
      borderColor: '#C4C4C4',
    },
    recentSearchElementText: {
      fontFamily: 'nunito-light',
      fontSize: normalizeFontSize(12),
      paddingHorizontal: normalizePx(15),
    },
  });
export default RecentSearchStyle;
