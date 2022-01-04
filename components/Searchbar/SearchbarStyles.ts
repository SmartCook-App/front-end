import { StyleSheet } from 'react-native';
import { normalizePx } from '../../styles/normalize';

const SearchbarStyle = StyleSheet.create({
  searchbarContainer: {
    flex: 0.1,
    paddingTop: normalizePx(20),
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
  },
  searchbar: {
    borderRadius: normalizePx(30),
  },
});
export default SearchbarStyle;
