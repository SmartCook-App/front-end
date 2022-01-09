import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/Colors';

const RecipeBackgroundStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  child: {
    flex: 1,
    backgroundColor: Colors.light.darkGrey4,
  },
  childtwo: {
    flex: 1,
    backgroundColor: Colors.light.lightGrey3,
  },
});

export default RecipeBackgroundStyle;
