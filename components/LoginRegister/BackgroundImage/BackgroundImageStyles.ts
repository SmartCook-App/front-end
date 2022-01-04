import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../assets/Colors';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  child: {
    flex: 1,
    backgroundColor: Colors.light.lightGrey,
  },
  childtwo: {
    flex: 1,
    backgroundColor: Colors.light.darkGray,
  },
});

export default HomeStyle;
