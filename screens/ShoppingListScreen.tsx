import React, { FC, useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Text } from "react-native-animatable";
import styles from "../styles/ShoppingListScreenStyles";
import { Searchbar, Divider } from "react-native-paper";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import TopNavbar from "../components/Others/TopNavbar";
import SLSL from "../assets/Languages/ShoppingListScreenLanguages";
import SearchbarComponent from '../components/HomeComponents/SearchComponents/SearchbarComponent';

interface Props {
  navigation: any;
}

const ShoppingListScreen: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const { navigation } = props;
  const [visibleShowAddItem, setVisibleShowAddItem] = useState(false);
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
  
  const showItemToList = () => {
    setVisibleShowAddItem(!visibleShowAddItem)
  }

  const notWorkingYet = () => 
    Alert.alert(
      "Esta opción todavía no está disponible",
      "¿Estas segur@ que deseas marcar la lista como completada?",
      [
        {
          text: "Ok",
          onPress: () => console.log("OK")
        }
      ]
  )
  const Item = (title: any ) => (
    <View style={styles.itemContainer}>
      <IoniconsIcon
        name="pizza-outline"
        style={styles.ingredientIcon}
        size={30}
      />
      <View style={styles.ingredientContainer}>
        <View style={styles.textAndQuantityContainer}>
          <Text style={styles.ingredientText}>{title.title}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityIconsButton}>
              <IoniconsIcon
                name="remove-outline"
                style={styles.quantityIcons}
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.quantityText}>
              {1} {SLSL[state.language].units}
            </Text>
            <TouchableOpacity style={styles.quantityIconsButton}>
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

  const renderItem = (item: any) => <Item title={item.item['title']} />;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          source={require("../assets/Images/LoginImg/loginBackground.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.backgroundContainer}>
            <TopNavbar
              content={"LISTA DE COMPRAS"}
              path={"None"}
              navigation={navigation}
            />
            <SearchbarComponent placeholderText={SLSL[state.language].searchbarPlaceholder} />
            <View style={styles.listContainer}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.bottomContainer}>
            {visibleShowAddItem ? (
              <TextInput 
                style= {styles.addItemBar}
                placeholder="¿Qué deseas agregar?"
              />
            ) : (
              <TouchableOpacity style={styles.finishedListButton} onPress={notWorkingYet}>
                <Text style={styles.finishedListText}>
                  {SLSL[state.language].finishButtonLabel}
                </Text>
              </TouchableOpacity>
              )}
              
              <TouchableOpacity style={styles.addButton} onPress={showItemToList}>
                <Text style={styles.addButtonText}>
                  +
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
