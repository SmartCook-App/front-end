import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';

const StepsRecipiesStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  ingredientsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientsText: {
    color: Colors.light.white,
    fontSize: normalizeFontSize(15),
  },
  portionText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(40),
    padding: 5,
  },
  portions: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: normalizePx(15),
    paddingHorizontal: normalizePx(110),
    justifyContent: 'space-between',
  },
  containerImages:{
  
  }
});
export default StepsRecipiesStyle;
