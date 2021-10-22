import React, { FC, useState } from "react";
import { View, ScrollView } from "react-native";
import UpperTitle from "../components/UpperTitleComponent";
import FiltersComponentsStyle from "../styles/HomeComponentsStyle/FiltersComponentsStyle";
import OvalFilterComponent from "../components/HomeComponents/OvalFilterComponent";
import RoundFiltersComponents from "../components/HomeComponents/RoundFiltersComponents";
import FL from "../assets/Languages/FiltersLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RecipiesComponent from "../components/HomeComponents/recipiesComponent";
import CookersRecipiesComponent from "../components/HomeComponents/CookersRecipiesComponent";
import IngredientsButtonComponent from "../components/HomeComponents/IngredientsButtonComponent";

const ProfileScreen: FC = (props: any) => {
  // const { icons, lang } = props;
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  var listNamesFilters = Object.values(FL[state.language]);

  return (
    <>
      <View>
        <UpperTitle content="SMARTCOOK" />
      </View>
      <View style={FiltersComponentsStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={FiltersComponentsStyle.containerRoundFilters}>
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
      {cookersView ? (
        <ScrollView>
          <CookersRecipiesComponent
            name={"name"}
            image={"image"}
            cal={"cal"}
            time={"time"}
          />
        </ScrollView>
      ) : (
        <ScrollView>
          <RecipiesComponent
            name={"name"}
            image={"image"}
            cal={"cal"}
            time={"time"}
          />
        </ScrollView>
      )}
      <IngredientsButtonComponent></IngredientsButtonComponent>
    </>
  );
};


export default ProfileScreen;
