import { StyleSheet } from 'react-native';

const ChangeLanguageStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  optionContainer: {
    flex: 0.3,
    padding: 8,
    marginHorizontal: 5,
    alignSelf: 'stretch',
    marginTop: 8,
    backgroundColor: 'red',
  },
  optionTitle: {
    fontSize: 17,
    color: 'red',
  },
  switchContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    flex: 0.3,
    textAlign: 'center',
    paddingHorizontal: 8,
    color: 'red',
  },
});
export default ChangeLanguageStyles;
