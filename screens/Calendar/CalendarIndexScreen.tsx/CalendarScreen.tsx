import React, { FC, useState } from 'react';
import Colors from '../../../assets/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import ScheduledRecipeComponent from '../../../components/Calendar/ScheduledRecipe/ScheduledRecipeComponent';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { MaterialIcons } from '@expo/vector-icons';
// DOC: https://github.com/stephy/CalendarPicker
import CL from './CalendarLanguages';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import { ScrollView } from 'react-native-gesture-handler';
import CalendarStyle from './CalendarStyles';

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
  // Function that obtains the selected day
  const onDateChange = (date: any) => {
    setSelectedDate(date.format('MMM DD').toLocaleString('es-Es'));
  };

  return (
    <View style={CalendarStyle.container}>
      <View style={{ flex: 0.1 }}>
        <TopNavbar title={CL[lang]?.topBarTitle} navigation="None" goBack={false} />
      </View>
      <View style={{ flex: 0.9 }}>
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
        <ScrollView style={CalendarStyle.savedRecipes}>
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
    </View>
  );
};

export default Calendar;
