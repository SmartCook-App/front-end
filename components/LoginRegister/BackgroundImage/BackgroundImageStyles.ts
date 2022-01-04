import { StyleSheet, Platform, Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(109,108,108,0.41)',
  },
  childtwo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.57)',
  },
});

export default HomeStyle;
