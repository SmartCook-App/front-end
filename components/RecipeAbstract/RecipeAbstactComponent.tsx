import React, { FC } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import style from './RecipeAbstractStyles';
import { Feather, MaterialIcons } from '@expo/vector-icons';

interface Props {
  navigation: any;
  time: any;
  likes: any;
  title: any;
}

const RecipeAbstractComponent: FC<Props> = (props: Props) => {
  const { navigation, time, likes, title } = props;
  const onPressRecipe = (item: any) => {
    navigation.navigate('RecipeDetailsScreen');
  };

  return (
    <TouchableOpacity onPress={onPressRecipe}>
      <View style={style.container}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          }}
          style={style.photo}
        >
          <Text style={style.timeOval}>
            <MaterialIcons name="access-time" color="white" /> {time}min
          </Text>
          <Text style={style.likesOval}>
            <Feather name="heart" color="black" /> {likes}
          </Text>
        </ImageBackground>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeAbstractComponent;
