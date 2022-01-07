import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';

const RecipesStepsStyle = StyleSheet.create({
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
    padding: normalizePx(5),
  },
  portions: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: normalizePx(15),
    paddingHorizontal: normalizePx(110),
    justifyContent: 'space-between',
  },
  containerImages:{
    marginTop: normalizePx(100),
  },
  ButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.transparentBlack,
  },
  markAsCookedButton: {
    backgroundColor: Colors.light.yellow,
    padding: normalizePx(10),
    borderRadius: normalizePx(35),
    height: normalizePx(50),
    width: normalizePx(275),
    alignItems: "center",
    justifyContent: "center",
    margin: normalizePx(15),
  },
  markAsCookedButtonText: {
    fontSize: normalizeFontSize(15),
    position: 'absolute',
    textAlign: 'center',
    fontFamily: "nunito-semiBold",
    color: Colors.light.white,
  }
});
export default RecipesStepsStyle;
