import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';
import { StyleSheet } from 'react-native';


const CalendarStyle = StyleSheet.create({
    timeOfDayWithRecipe: {
      flexDirection: 'row',
      minHeight: normalizePx(200),
    },
    timeOfDayTextContainer: {
      flex: 1,
      borderRightWidth: normalizePx(1),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: Colors.light.greyOfFilters,
    },
    timeOfDayText: {
      fontSize: normalizeFontSize(15),
      marginVertical: normalizePx(5),
      fontFamily: 'nunito-light',
    },
    timeOfDayRecipeContainer: {
      flex: 2,
      alignItems: 'center',
      maxHeight: normalizePx(200),
    },
    blackCircle: {
      backgroundColor: Colors.light.black,
      height: normalizePx(10),
      width: normalizePx(10),
      borderRadius: normalizePx(40),
      alignSelf: 'center',
      left: normalizePx(-6),
    },
    textNoRecipe: {
      fontSize: normalizeFontSize(10),
      fontFamily: 'nunito-light',
      top: normalizePx(88),
    },
    savedRecipeContainer: {
      maxHeight: normalizePx(160),
    }
  });
  
  export default CalendarStyle;