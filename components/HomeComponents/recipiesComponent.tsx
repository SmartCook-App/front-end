import React, { FC, useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import RecipiesComponentStyle from "../../styles/HomeComponentsStyle/RecipiesComponentStyle";
import { recipes } from "../../screens/Home/recipiesDataArray";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface Props {
  name: any;
  image: any;
  cal: any;
  time: any;
}

const RecipiesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time } = props;

  const onPressRecipe = (item: any) => {
    //sth
  };

  const renderRecipes = (item: any) => (
    <>
      <TouchableOpacity onPress={onPressRecipe}>
        <View style={RecipiesComponentStyle.container}>
          <ImageBackground
            source={require("../../assets/Images/ensalada.jpg")}
            style={RecipiesComponentStyle.photo}
          >
            <Text style={RecipiesComponentStyle.timeOval}>
              <MaterialIcons name="access-time" color="white" /> 30 min
            </Text>
            <Text style={RecipiesComponentStyle.likesOval}>
              <Feather name="heart" color="black" /> 90
            </Text>
          </ImageBackground>
          <Text style={RecipiesComponentStyle.title}>
            Sopa Tailandesa con dientes de ajo
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};
export default RecipiesComponent;
