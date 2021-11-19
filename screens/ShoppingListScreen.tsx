import React, { FC, useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Text } from "react-native-animatable";
import styles from "../styles/ShoppingListScreenStyles";
import { Searchbar, Divider } from "react-native-paper";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const ShoppingListScreen: FC = (props: any) => {
  const state = useSelector((state: RootState) => state);

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
  ];

  const Item = ({ title }) => (
    <View style={styles.itemContainer}>
      <IoniconsIcon name="home" style={styles.ingredientIcon} size={30} />
      <View style={styles.ingredientContainer}>
        <View style={styles.textAndQuantityContainer}>
          <Text style={styles.ingredientText}>{title}</Text>
          <View style={styles.quantityContainer}>
            <IoniconsIcon
              name="remove-outline"
              style={styles.quantityIcons}
              size={20}
            />
            <Text style={styles.quantityText}>0 un</Text>
            <IoniconsIcon
              name="add-outline"
              style={styles.quantityIcons}
              size={20}
            />
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
        <View style={styles.searchbarContainer}>
          <Searchbar
            style={styles.searchbar}
            placeholder="Buscar ingredientes seleccionados"
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
              Marcar Lista como completada
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ShoppingListScreen;
