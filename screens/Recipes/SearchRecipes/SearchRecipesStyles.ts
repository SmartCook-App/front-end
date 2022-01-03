import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';
import { StyleSheet } from 'react-native';

const SearchRecipesStyle = StyleSheet.create({
    ovalFiltersContainer: {
      alignItems: 'center',
    },
    recentSearchContainer: {
      paddingLeft: normalizePx(15),
      paddingRight: normalizePx(10),
    },
    recentSearchContainerTitle: {
      color: Colors.light.yellow,
      fontFamily: 'nunito-bold',
      fontSize: normalizeFontSize(14),
    },
  });
  
  export default SearchRecipesStyle;