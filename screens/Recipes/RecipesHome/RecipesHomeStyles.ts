import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizePx } from '../../../styles/normalize';

const RecipesHomeStyles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    backgroundColor: Colors.light.white,
    marginBottom: normalizePx(20),
  },
  container: {
    marginBottom: normalizePx(22),
    flex: 0.1,
    alignItems: 'center',
  },
  containerRoundFilters: {
    flexDirection: 'row',
    marginHorizontal: normalizePx(20),
    flex: 0.3,
  },
});

export default RecipesHomeStyles;
