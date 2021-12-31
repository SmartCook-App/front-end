import React, { FC, useState } from "react";
import { View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import RoundFiltersComponents from "../../components/HomeComponents/RoundFiltersComponents";
import ASL from "../../assets/Languages/AccountScreenLanguages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipiesComponent from "../../components/HomeComponents/recipiesComponent";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/AccountScreenStyles";
import { Text } from "../../components/Themed";
import { addFilterHomeInteractor } from "../../redux/interactors/homeIconsInteractors";
import { HomeIconTypes } from "../../redux/types/homeIconsTypes";
import TopNavbar from "../../components/Others/TopNavbar";


interface Props {
  navigation: any;
}

const AccountScreen:  FC<Props> = (props: Props) =>  {
  const { navigation } = props;
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  const [ownProfile, setOwnProfile] = useState(true);
  const dispatch = useDispatch();

  const onPressEditProfile = (item: any) => {
    navigation.navigate('ConfigProfileScreen');
  };

  const addFilter = () => {
    const newFilter: HomeIconTypes = {
      id: "7",
      name: "cart-outline",
      title: "new filter",
      press: false,
      height: 150,
    };
    dispatch(addFilterHomeInteractor(newFilter));
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
      <TopNavbar
          title={"PERFIL"}
          goBack={false}
          navigation={navigation}
        />
        <View style={styles.headerContainer}>
          <View style={styles.headerRowContainer}>
            <Ionicons name={"person-circle-outline"} size={80} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.textProfile}>Nombre</Text>
              {/* Aca hay que reemplazar con la informacion del usuario cuando */}
              <Text style={styles.textProfile}>Link Página</Text>
              {/* tengamos la data. */}
              <Text style={styles.textProfile}>Descripcion</Text>
            </View>
          </View>
          {ownProfile ? (
            <TouchableOpacity style={styles.followButton} onPress={onPressEditProfile}>
              <Text>{ASL[state.language]?.editButton}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.followButton}>
              <Text>{ASL[state.language]?.followButton}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.filtersContainer}>
          {ownProfile ? (
            <View style={styles.addFilterContainer}>
              <TouchableOpacity
                style={styles.addFilterButton}
                onPress={addFilter}
              >
                <Ionicons
                  name={"add-circle-outline"}
                  size={45}
                  color={"black"}
                />
              </TouchableOpacity>
              <Text style={styles.addFilterButtonTitle}>
                {ASL[state.language]?.addFilter}
              </Text>
            </View>
          ) : null}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {state.homeIcons.accountsIconArray.map((icon: any) => (
              <RoundFiltersComponents
                id={icon.id}
                name={icon.name}
                title={icon.title}
                isPressed={icon.press}
                updateOrderButtons={updateOrderButtons}
                setupdateOrderButtons={setupdateOrderButtons}
                cookersView={cookersView}
                setcookersView={setcookersView}
                screen={"AccountScreen"}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.switchContainer}>
          {ownProfile ? (
            <>
              <TouchableOpacity>
                <Text style={styles.switchContainerText}>
                  {ASL[state.language]?.savedRecipes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.switchContainerText}>
                  {ASL[state.language]?.accountsFollowed}
                </Text>
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
