import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const SearchIngredientStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.light.white,
    flex: 1,
  },
  recentSearchContainer: {
    paddingLeft: normalizePx(15),
    paddingRight: normalizePx(10),
  },
  recentSearchContainerTitle: {
    marginVertical: normalizePx(15),
    color: Colors.light.yellow,
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(14),
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: normalizePx(5),
  },
  categoryRowContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default SearchIngredientStyle;
