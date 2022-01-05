import React, { FC } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './RecipeAbstractCalendarStyles';
import { Feather, MaterialIcons, Entypo } from '@expo/vector-icons';

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
  return (
    <TouchableOpacity onPress={onPressRecipe}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.photo}
        >
          <Text style={styles.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={styles.deleteButton}>
            <Entypo name="cross" size={20} color="black" />
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