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
import { Cookers } from '../../screens/Home/CookersDataArray';
import { Feather, MaterialIcons } from '@expo/vector-icons'; 

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

  return (
    <View style={CookersRecipiesComponentStyle.cookersContainer}>
        <View style={CookersRecipiesComponentStyle.cookersTitle}>
        <Text style={CookersRecipiesComponentStyle.cookersName}> Paula Cocina</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#FAB73D" style={CookersRecipiesComponentStyle.goToCookersProfile} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Cookers[1].map((cooker: any) => (
            <TouchableOpacity onPress={onPressRecipe}>
            <View style={CookersRecipiesComponentStyle.container}>
                <ImageBackground
                source={require("../../assets/Images/LoginImg/loginBackground.jpeg")}
                style={CookersRecipiesComponentStyle.photo}
                >
                <Text style={CookersRecipiesComponentStyle.timeOval}><MaterialIcons name="access-time" color="white" /> 30 min</Text>
                <Text style={CookersRecipiesComponentStyle.likesOval}><Feather name="heart" color="black" /> 90</Text>
                </ImageBackground>
                <Text style={CookersRecipiesComponentStyle.title}>Tostadas Francesas</Text>
            </View>
            </TouchableOpacity>
        ))}
        </ScrollView>
  </View>

    // <View>
    //   <FlatList
    //     showsVerticalScrollIndicator={false}
    //     numColumns={2}
    //     data={Cookers}
    //     renderItem={renderRecipes}
    //     keyExtractor={(item) => `${item.recipeId}`}
    //   />
    // </View>
  );
};
export default RecipiesComponent;