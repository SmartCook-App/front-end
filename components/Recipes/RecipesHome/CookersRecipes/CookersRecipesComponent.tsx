import React, { FC } from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import style from './CookersRecipesStyles';
import { Cookers } from '../../../../screens/Recipes/CookersDataArray';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../assets/Colors';

interface Props {
  name: any;
  image: any;
  cal: any;
  time: any;
}
// TODO: datos de props se deben usar como por ejemplo name=Paula sin Culpas
const RecipesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time } = props;

  const onPressRecipe = (item: any) => {
    //sth
  };
  const renderRecipes = (cooker: any) => (
    <View style={style.cookersContainer}>
      <View style={style.cookersTitle}>
        <Text style={style.cookersName}> Paula Sin Culpas</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color={Colors.light.yellow}
          style={style.goToCookersProfile}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cooker['item'].map((recipe: any) => (
          <TouchableOpacity onPress={onPressRecipe}>
            <View style={style.container}>
              <ImageBackground
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={style.photo}
              >
                <Text style={style.timeOval}>
                  <MaterialIcons name="access-time" color="white" />{' '}
                  {recipe.time}
                </Text>
                <Text style={style.likesOval}>
                  <Feather name="heart" color="black" /> {recipe.likes}
                </Text>
              </ImageBackground>
              <Text style={style.title}>{recipe.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={Cookers}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item}`}
      />
    </View>
  );
};
export default RecipesComponent;
