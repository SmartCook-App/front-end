import { StyleSheet } from 'react-native';
import { normalizePx, normalizeFontSize } from '../../styles/normalize';
import Colors from '../../assets/Colors';

const SearchbarStyle = StyleSheet.create({
  searchbarContainer: {
    flex: 0.1,
    paddingTop: normalizePx(20),
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
  },
  searchListContainer: {
    flex: 1,
    paddingTop: normalizePx(40),
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
  },
  searchbar: {
    borderRadius: normalizePx(30),
  },
  searchContainer: {
    marginVertical: normalizePx(1),
    backgroundColor: Colors.light.white,
    alignSelf: 'center',
    width: '95%'
  },
  searchItem: {
    padding: normalizePx(10),
    fontSize: normalizeFontSize(14),
    fontFamily: 'nunito-regular',
    backgroundColor: Colors.light.lightGrey3,
  }
});
export default SearchbarStyle;
