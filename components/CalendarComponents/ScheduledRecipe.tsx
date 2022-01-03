import React, { FC } from 'react';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CL from '../../screens/Calendar/CalendarIndexScreen.tsx/CalendarLanguages';
import RecipeAbstractCalendarComponent from '../../components/CalendarComponents/RecipeAbstractCalendarComponent';

interface Props {
  navigation: any;
  title: string;
  isRecipeSaved: boolean;
}

const ScheduledRecipeComponent: FC<Props> = (props: Props) => {
  const { navigation, isRecipeSaved, title } = props;
  const state = useSelector((state: RootState) => state);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const onPress = () => {
    navigation.navigate('ChooseIngredient');
  };

  return (
    <View style={CalendarStyle.timeOfDayWithRecipie}>
      <View style={CalendarStyle.timeOfDayTextContainer}>
        <Text style={CalendarStyle.timeOfDayText}>{title}</Text>
      </View>
      <View style={CalendarStyle.blackCircle} />
      <View style={CalendarStyle.timeOfDayRecipieContainer}>
        {isRecipeSaved ? (
          <View style={CalendarStyle.savedRecipeContainer}>
            <RecipeAbstractCalendarComponent
              navigation={navigation}
              time="30"
              likes="10"
              title="Cuscus con palta"
            />
          </View>
        ) : (
          <Text style={CalendarStyle.textNoRecipe}>
            {CL[lang]?.noRecipeSavedText}
          </Text>
        )}
      </View>
    </View>
  );
};
export default ScheduledRecipeComponent;

const CalendarStyle = StyleSheet.create({
  timeOfDayWithRecipie: {
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
  timeOfDayRecipieContainer: {
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
