import React, { FC, useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./RecipesHomeStyles";
import OvalFilterComponent from "../../../components/Recipes/OvalFilter/OvalFilterComponent";
import RoundFiltersComponents from "../../../components/RoundFilters/RoundFiltersComponent";
import FL from "../../../assets/Languages/Recipes/RecipeFiltersHomeLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import RecipesComponent from "../../../components/ShowAllRecipes/ShowAllRecipesComponent";
import CookersRecipesComponent from "../../../components/Recipes/RecipesHome/CookersRecipes/CookersRecipesComponent";
import IngredientsButtonComponent from "../../../components/Recipes/RecipesHome/IngredientsButton/IngredientsButtonComponent";
import SearchButtonComponent from "../../../components/Recipes/RecipesHome/SearchButton/SearchButtonComponent";
import TopNavbar from "../../../components/TopNavbar/TopNavbarComponent";

interface Props {
  navigation: any;
}
const RecipesHomeScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  var listNamesFilters = Object.values(FL[state.language]);

  return (
    <>
      <View>
        <TopNavbar
          title={"SMARTCOOK"}
          goBack={false}
          navigation={navigation}
        />
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {listNamesFilters.map((item: any) => (
              <OvalFilterComponent item={item} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.containerRoundFilters}>
          <SearchButtonComponent navigation={navigation} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {state.homeIcons.homeIconArray.map((icon: any) => (
              <RoundFiltersComponents
                id={icon.id}
                name={icon.name}
                title={icon.title}
                isPressed={icon.press}
                updateOrderButtons={updateOrderButtons}
                setupdateOrderButtons={setupdateOrderButtons}
                cookersView={cookersView}
                setcookersView={setcookersView}
                screen={"RecipesHomeScreen"}
              />
            ))}
          </ScrollView>
        </View>
        {cookersView ? (
          <ScrollView>
            <CookersRecipesComponent
              name={"name"}
              image={"image"}
              cal={"cal"}
              time={"time"}
            />
          </ScrollView>
        ) : (
          <ScrollView>
            <RecipesComponent
              name={"name"}
              image={"image"}
              cal={"cal"}
              time={"time"}
              navigation={navigation}
            />
          </ScrollView>
        )}
        <IngredientsButtonComponent navigation={navigation}></IngredientsButtonComponent>
      </View>
    </>
  );
};

export default RecipesHomeScreen;
