import { StyleSheet } from 'react-native';
import { normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

const ChangeLanguageStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.light.red,
  },
  optionContainer: {
    flex: 0.3,
    padding: normalizePx(8),
    marginHorizontal: normalizePx(5),
    alignSelf: 'stretch',
    marginTop: normalizePx(8),
    backgroundColor: Colors.light.red,
  },
  optionTitle: {
    fontSize: 17,
    color: Colors.light.red,
  },
  switchContainer: {
    flex: 1,
    marginTop: normalizePx(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    flex: 0.3,
    textAlign: 'center',
    paddingHorizontal: normalizePx(8),
    color: Colors.light.red,
  },
});
export default ChangeLanguageStyles;
