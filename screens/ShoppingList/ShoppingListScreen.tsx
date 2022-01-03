import React, { FC, useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Keyboard,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Text } from "react-native-animatable";
import styles from "./ShoppingListStyles";
import { Searchbar, Divider } from "react-native-paper";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import TopNavbar from "../../components/TopNavbar/TopNavbarComponent";
import SLL from "./ShoppingListLanguages";
import SearchbarComponent from '../../components/HomeComponents/SearchComponents/SearchbarComponent';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setVisibleShowAddItem(false);
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);
  
  const showItemToList = () => {
    setVisibleShowAddItem(!visibleShowAddItem)
  }
  const addItemToList = () => {
    console.log('AGREGAR ITEMS')
  }
  const finishButtonLabel = () => 
    Alert.alert(
      "¿Estas segur@ que deseas marcar la lista como completada?",
      "Al realizar esta acción se te eliminaran todos los productos",
      [
        {
          text: "Sí",
          onPress: () => console.log("Sí")
        },
        {
          text: "No",
          onPress: () => console.log("No")
        }
      ]
  )

  const deleteButton = () => {
    console.log('delete')
  }
  const RenderRight = (progress: any, dragX: any) => {
    return (
      <TouchableOpacity onPress={deleteButton}>
        <View style={styles.rightActions}>
          <Text style={[styles.actionText]}>Delete</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const Item = (title: any ) => {
    return (
      <Swipeable 
        renderRightActions={RenderRight}
      >
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
                {1} {SLL[state.language].units}
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
      </Swipeable>
  )};

  const renderItem = (item: any) => <Item title={item.item['title']}/>;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          source={require("../../assets/Images/LoginImg/loginBackground.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.backgroundContainer}>
            <TopNavbar
              title={"LISTA DE COMPRAS"}
              goBack={false}
              navigation={navigation}
            />
            <SearchbarComponent placeholderText={SLL[state.language].searchbarPlaceholder} />
            <View style={styles.listContainer}>       
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  />
            </View>
            <View style={styles.bottomContainer}>
            {visibleShowAddItem ? (
              <View style={styles.bottomContainer}>
              <TextInput 
                autoFocus={true}
                style= {styles.addItemBar}
                placeholder="¿Qué deseas agregar?"
                />
                <TouchableOpacity style={styles.addButton} onPress={addItemToList}>
                <Text style={styles.addButtonText}>
                  +
                </Text>
              </TouchableOpacity>
              </View>
            ) : (
              <>
              <TouchableOpacity style={styles.finishedListButton} onPress={confirmDelete}>
                <Text style={styles.finishedListText}>
                  {SLL[state.language].finishButtonLabel}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.addButton} onPress={showItemToList}>
                <Text style={styles.addButtonText}>
                  +
                </Text>
              </TouchableOpacity>
              </>
                )}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ShoppingListScreen;
