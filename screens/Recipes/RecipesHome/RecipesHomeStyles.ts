import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizePx } from '../../../styles/normalize';

const RecipesHomeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.light.white,
    marginBottom: normalizePx(10),
  },
  topBar: {
    flex: 0.1,
  },
  secondContainer: {
    flex: 0.9,
  },
  container: {
    marginBottom: normalizePx(15),
    flex: 0.1,
    alignItems: 'center',
  },
  containerRoundFilters: {
    flexDirection: 'row',
    marginHorizontal: normalizePx(20),
    flex: 0.2,
  },
  flexOne: {
    flex: 1
  }
});

export default RecipesHomeStyles;
