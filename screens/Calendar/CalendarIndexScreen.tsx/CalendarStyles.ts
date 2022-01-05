import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const CalendarStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.light.background,
      fontFamily: 'nunito-regular',
    },
    calendarContainer: {
      flex: 0.8,
      borderBottomWidth: normalizePx(1),
      borderBottomColor: Colors.light.greyOfFilters,
    },
    calendarText: {
      fontFamily: 'nunito-semiBold',
      color: Colors.light.text,
    },
    selectedDateText: {
      fontSize: normalizeFontSize(17),
      fontFamily: 'nunito-semiBold',
      marginVertical: normalizePx(10),
    },
    savedRecipes: {
      flex: 1,
      marginHorizontal: normalizePx(10),
    },
  });
  
  export default CalendarStyle;