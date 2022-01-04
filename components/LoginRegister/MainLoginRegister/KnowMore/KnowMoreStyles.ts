import { StyleSheet, Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const KnowMoreStyle = StyleSheet.create({
  carouselItem: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  carouselItemTitle: {
    fontFamily: 'nunito-light',
    fontSize: 20,
    textAlign: 'center',
    color: '#DADADA',
  },
  carouselItembody: {
    fontFamily: 'nunito-light',
    fontSize: 15,
    textAlign: 'center',
    color: '#DADADA',
  },
});
export default KnowMoreStyle;
