import React, { FC, useState } from "react";
import { View, ScrollView, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import RoundFiltersComponents from "../components/HomeComponents/RoundFiltersComponents";
import ASL from "../assets/Languages/AccountScreenLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RecipiesComponent from "../components/HomeComponents/recipiesComponent";
import { Ionicons } from "@expo/vector-icons";
import styles from '../styles/AccountScreenStyles';
import { Text } from "../components/Themed";

const AccountScreen: FC = (props: any) => {
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  const [ownProfile, setOwnProfile] = useState(true);

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerRowContainer}>
            <Ionicons name={"person-circle-outline"} size={80} />
            <View style={styles.headerTextContainer}>
              <Text>Nombre</Text>{/* Aca hay que reemplazar con la informacion del usuario cuando */}
              <Text>Link Pagina</Text>{/* tengamos la data. */}
              <Text>Descripcion</Text>
            </View>
          </View>
          {ownProfile ? (
            <TouchableOpacity style={styles.followButton}>
              <Text>{ASL[state.language]?.editButton}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.followButton}>
              <Text>{ASL[state.language]?.followButton}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {state.homeIcons.iconArray.map((icon: any) => (
              <RoundFiltersComponents
                id={icon.id}
                name={icon.name}
                title={icon.title}
                isPressed={icon.press}
                updateOrderButtons={updateOrderButtons}
                setupdateOrderButtons={setupdateOrderButtons}
                cookersView={cookersView}
                setcookersView={setcookersView}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.switchContainer}>
          {ownProfile ? (
            <>
              <TouchableOpacity>
                <Text style={styles.switchContainerText}>{ASL[state.language]?.savedRecipes}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.switchContainerText}>{ASL[state.language]?.accountsFollowed}</Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
        <ScrollView style={styles.recipesContainer}>
          <RecipiesComponent
            name={"name"}
            image={"image"}
            cal={"cal"}
            time={"time"}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountScreen;
