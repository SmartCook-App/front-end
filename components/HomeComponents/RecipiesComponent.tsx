import React, { FC, useState, useEffect } from "react";
import { FlatList, Text, TouchableHighlight, View, ImageBackground, Image } from "react-native";
import RecipiesComponentStyle from "../../styles/HomeComponentsStyle/RecipiesComponentStyle";
import { recipes } from '../../screens/Home/recipiesDataArray';


interface Props {
    name: any;
    image: any;
    cal: any;
    time: any;
  }

const RecipiesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time } = props;

  const onPressRecipe = (item:any) => {
    //sth
  };
  
  const renderRecipes = (item:any) => (
    <>
        <TouchableHighlight onPress={onPressRecipe} underlayColor='rgba(73,182,77,0.9)'>
        <View style={RecipiesComponentStyle.container}>
        <ImageBackground
          source={require("../../assets/Images/LoginImg/loginBackground.jpeg")}
          style={RecipiesComponentStyle.photo}
        >
          <Text style={RecipiesComponentStyle.oval}>90</Text>
          <Text style={RecipiesComponentStyle.title}>Sopa Tailandesa con dientes de ajo</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>

    </>
  );

  return(
    <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
    </View>
  )
}
export default RecipiesComponent;

