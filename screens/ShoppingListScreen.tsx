import React, { FC, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Text } from "react-native-animatable";
import styles from "../styles/ShoppingListScreenStyles";
import { Searchbar, Divider } from "react-native-paper";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import TopNavbar from "../components/Others/TopNavbar";
import SLSL from "../assets/Languages/ShoppingListScreenLanguages";

interface Props {
  navigation: any;
}

const ShoppingListScreen: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const { navigation } = props;

  const DATA = [
    {
      id: "1",
      title: "Fideos",
    },
    {
      id: "2",
      title: "Quix",
    },
    {
      id: "3",
      title: "Queso Parmesano",
    },
    {
      id: "4",
      title: "Salmon",
    },
    {
      id: "5",
      title: "Tomate",
    },
    {
      id: "6",
      title: "Pan",
    },
    {
      id: "7",
      title: "Lechuga",
    },
    {
      id: "8",
      title: "Mantequilla",
    },
    {
      id: "9",
      title: "Sal",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.itemContainer}>
      <IoniconsIcon
        name="pizza-outline"
        style={styles.ingredientIcon}
        size={30}
      />
      <View style={styles.ingredientContainer}>
        <View style={styles.textAndQuantityContainer}>
          <Text style={styles.ingredientText}>{title}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityIcons}>
              <IoniconsIcon
                name="remove-outline"
                style={styles.quantityIcons}
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.quantityText}>
              {0} {SLSL[state.language].units}
            </Text>
            <TouchableOpacity style={styles.quantityIcons}>
              <IoniconsIcon
                name="add-outline"
                style={styles.quantityIcons}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <TopNavbar
          content={"SMARTCOOK"}
          path={"None"}
          navigation={navigation}
        />
        <ImageBackground
          source={require("../assets/Images/LoginImg/loginBackground.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.backgroundContainer}>
            <View style={styles.searchbarContainer}>
              <Searchbar
                style={styles.searchbar}
                placeholder={SLSL[state.language].searchbarPlaceholder}
                value=""
              />
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.finishedListContainer}>
              <TouchableOpacity style={styles.finishedListButton}>
                <Text style={styles.finishedListText}>
                  {SLSL[state.language].finishButtonLabel}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ShoppingListScreen;
