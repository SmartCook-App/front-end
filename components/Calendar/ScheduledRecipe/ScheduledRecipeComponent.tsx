import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CL from '../../../screens/Calendar/CalendarIndexScreen.tsx/CalendarLanguages';
import RecipeAbstractCalendarComponent from '../RecipeAbstractCalendar/RecipeAbstractCalendarComponent';
import styles from './ScheduledRecipeStyles';

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
    navigation.navigate('ChooseIngredientScreen');
  };

  return (
    <View style={styles.timeOfDayWithRecipe}>
      <View style={styles.timeOfDayTextContainer}>
        <Text style={styles.timeOfDayText}>{title}</Text>
      </View>
      <View style={styles.blackCircle} />
      <View style={styles.timeOfDayRecipeContainer}>
        {isRecipeSaved ? (
          <View style={styles.savedRecipeContainer}>
            <RecipeAbstractCalendarComponent
              navigation={navigation}
              time="30"
              likes="10"
              title="Cuscus con palta"
            />
          </View>
        ) : (
          <Text style={styles.textNoRecipe}>
            {CL[lang]?.noRecipeSavedText}
          </Text>
        )}
      </View>
    </View>
  );
};
export default ScheduledRecipeComponent;
