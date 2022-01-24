import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  Alert,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './RecipeAbstractCalendarStyles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import RAC from './RecipeAbstractCalendarLanguages';

interface Props {
  navigation: any;
  time: any;
  likes: any;
  title: any;
}

const RecipeAbstractCalendarComponent: FC<Props> = (props: Props) => {
  const { navigation, time, likes, title } = props;
  const onPressRecipe = (item: any) => {
    navigation.navigate('RecipeDetailsScreen');
  };
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const deleteFromCalendar = () => {
    Alert.alert(RAC[lang]?.delete, RAC[lang]?.areYouSure, [
      {
        text: RAC[lang]?.yes,
        onPress: () => console.log('Eliminar receta'),
      },
      {
        text: RAC[lang]?.cancel,
        onPress: () => console.log('Cancelar'),
      },
    ]);
  };
  return (
    <TouchableOpacity onPress={onPressRecipe} onLongPress={deleteFromCalendar}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }}
          style={styles.photo}
        >
          <Text style={styles.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={styles.likesOval}>
            <Feather name="heart" color="black" /> {likes}
          </Text>
        </ImageBackground>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeAbstractCalendarComponent;
