import React, { FC, useState, useEffect } from "react";
import {
  FlatList,
  Text,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CookersRecipiesComponentStyle from "../../styles/HomeComponentsStyle/CookersRecipiesComponentStyle";
import { Cookers } from "../../screens/Home/CookersDataArray";
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
  const renderRecipes = (cooker: any) => (
    <View style={CookersRecipiesComponentStyle.cookersContainer}>
      <View style={CookersRecipiesComponentStyle.cookersTitle}>
        <Text style={CookersRecipiesComponentStyle.cookersName}>
          {" "}
          Paula Sin Culpas
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color="#FAB73D"
          style={CookersRecipiesComponentStyle.goToCookersProfile}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cooker["item"].map((recipie: any) => (
          <TouchableOpacity onPress={onPressRecipe}>
            <View style={CookersRecipiesComponentStyle.container}>
              <ImageBackground
                source={require("../../assets/Images/ensalada.jpg")}
                style={CookersRecipiesComponentStyle.photo}
              >
                <Text style={CookersRecipiesComponentStyle.timeOval}>
                  <MaterialIcons name="access-time" color="white" />{" "}
                  {recipie.time}
                </Text>
                <Text style={CookersRecipiesComponentStyle.likesOval}>
                  <Feather name="heart" color="black" /> {recipie.likes}
                </Text>
              </ImageBackground>
              <Text style={CookersRecipiesComponentStyle.title}>
                {recipie.title}
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
export default RecipiesComponent;
