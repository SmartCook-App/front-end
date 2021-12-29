import React, { FC, useState } from 'react';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import CalendarPicker from 'react-native-calendar-picker';
import ScheduledRecipeComponent from '../../components/CalendarComponents/ScheduledRecipe';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MaterialIcons } from '@expo/vector-icons';
// DOC: https://github.com/stephy/CalendarPicker
import CL from '../../assets/Languages/CalendarLanguage';
import TopBar from '../../components/Others/TopNavbar';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const Calendar: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const { navigation } = props;
  // DATE https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020
  const [selectedDate, setSelectedDate] = useState('Hoy');
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  // Función que obtiene el día seleccionado
  const onDateChange = (date: any) => {
    setSelectedDate(date.format('MMM DD').toLocaleString('es-Es'));
  };

  return (
    <View style={CalendarStyle.container}>
      <TopBar title={CL[lang]?.topBarTitle} navigation="None" goBack={false} />
      <View style={CalendarStyle.calendarContainer}>
        <CalendarPicker
          startFromMonday={true}
          todayBackgroundColor={Colors.light.greyOfFilters}
          selectedDayColor={Colors.light.yellow}
          selectedDayTextColor={Colors.light.white}
          onDateChange={onDateChange}
          weekdays={CL[lang]?.daysOfTheWeek}
          months={CL[lang]?.months}
          previousComponent={
            <MaterialIcons name="navigate-before" size={24} color="black" />
          }
          nextComponent={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          textStyle={CalendarStyle.calendarText}
        />
      </View>
      <ScrollView style={CalendarStyle.savedRecipies}>
        <Text style={CalendarStyle.selectedDateText}>{selectedDate}</Text>
        <ScheduledRecipeComponent
          navigation={navigation}
          isRecipeSaved={true}
          title={CL[lang]?.breakfast}
        />
        <ScheduledRecipeComponent
          navigation={navigation}
          isRecipeSaved={false}
          title={CL[lang]?.snack}
        />
        <ScheduledRecipeComponent
          navigation={navigation}
          isRecipeSaved={true}
          title={CL[lang]?.lunch}
        />
        <ScheduledRecipeComponent
          navigation={navigation}
          isRecipeSaved={false}
          title={CL[lang]?.tea}
        />
        <ScheduledRecipeComponent
          navigation={navigation}
          isRecipeSaved={false}
          title={CL[lang]?.dinner}
        />
      </ScrollView>
    </View>
  );
};

export default Calendar;

const CalendarStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  savedRecipies: {
    flex: 1,
    marginHorizontal: normalizePx(10),
  },
});
