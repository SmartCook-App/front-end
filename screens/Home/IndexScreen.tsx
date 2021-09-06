import React, { FC, useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import UpperTitle from "../../components/UpperTitleComponent";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import OvalFilterComponent from "../../components/HomeComponents/OvalFilterComponent";
import RoundFiltersComponents from "../../components/HomeComponents/RoundFiltersComponents";
import FL from "../../assets/Languages/FiltersLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { animated } from "@react-spring/native";
import RecipiesComponent from "../../components/HomeComponents/recipiesComponent";
import CookersRecipiesComponent from "../../components/HomeComponents/CookersRecipiesComponent";

// const AnimatedView: any = animated(View);

const IndexScreen: FC = (props: any) => {
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
        <View>
          <CookersRecipiesComponent
            name={"name"}
            image={"image"}
            cal={"cal"}
            time={"time"}
          />
        </View>
      ) : (
        <View>
          <RecipiesComponent
            name={"name"}
            image={"image"}
            cal={"cal"}
            time={"time"}
          />
        </View>
      )}
    </>
  );
};


export default IndexScreen;
