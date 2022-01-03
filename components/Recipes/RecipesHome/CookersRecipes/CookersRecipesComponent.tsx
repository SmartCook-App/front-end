import React, { FC, useState, useEffect } from "react";
import {
  FlatList,
  Text,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CookersRecipesComponentStyle from "../../../../styles/HomeComponentsStyle/CookersRecipesComponentStyle";
import { Cookers } from "../../../../screens/Recipes/CookersDataArray";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface Props {
  name: any;
  image: any;
  cal: any;
  time: any;
}

const RecipesComponent: FC<Props> = (props: Props) => {
  const { name, image, cal, time } = props;

  const onPressRecipe = (item: any) => {
    //sth
  };
  const renderRecipes = (cooker: any) => (
    <View style={CookersRecipesComponentStyle.cookersContainer}>
      <View style={CookersRecipesComponentStyle.cookersTitle}>
        <Text style={CookersRecipesComponentStyle.cookersName}>
          {" "}
          Paula Sin Culpas
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color="#FAB73D"
          style={CookersRecipesComponentStyle.goToCookersProfile}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cooker["item"].map((recipe: any) => (
          <TouchableOpacity onPress={onPressRecipe}>
            <View style={CookersRecipesComponentStyle.container}>
              <ImageBackground
                source={require(`../../assets/Images/Eliminar/ensalada.jpg`)}
                style={CookersRecipesComponentStyle.photo}
              >
                <Text style={CookersRecipesComponentStyle.timeOval}>
                  <MaterialIcons name="access-time" color="white" />{" "}
                  {recipe.time}
                </Text>
                <Text style={CookersRecipesComponentStyle.likesOval}>
                  <Feather name="heart" color="black" /> {recipe.likes}
                </Text>
              </ImageBackground>
              <Text style={CookersRecipesComponentStyle.title}>
                {recipe.title}
              </Text>
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
