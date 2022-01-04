import { StyleSheet, Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
  homeButton: {
    backgroundColor: 'white',
    padding: 20,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    fontSize: 20,
    fontFamily: 'nunito-semiBold',
    position: 'relative',
    color: '#000000',
    left: '9%',
  },
  homeMailIcon: {
    left: 50,
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default HomeStyle;
