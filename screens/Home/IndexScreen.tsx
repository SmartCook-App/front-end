import React, { FC, useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import UpperTitle from "../../components/UpperTitleComponent";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import OvalFilterComponent from "../../components/HomeComponents/OvalFilterComponent";
import RoundFiltersComponents from "../../components/HomeComponents/RoundFiltersComponents";
import FL from "../../assets/Languages/FiltersLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CFL from "../../assets/Languages/CircleFiltersLanguages";
import IndexScreenStyle from "../../styles/HomeComponentsStyle/IndexScreenStyle";
import { useTransition, animated } from "@react-spring/native";
import { boolean } from "yup/lib/locale";
import RecipiesComponent from "../../components/HomeComponents/RecipiesComponent";
import CookersRecipiesComponent from "../../components/HomeComponents/CookersRecipiesComponent";

const AnimatedView: any = animated(View);

const IndexScreen: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  const state = useSelector((state: RootState) => state);
  var listNamesFilters = Object.values(FL[lang]);
  const sortByKey = (key: any) => (a: any, b: any) =>
    a[key] === b[key] ? 0 : a[key] ? -1 : 1;
  // const sorted = data.slice().sort(sortByKey('press'));

  useEffect(() => {
    if (updateOrderButtons) {
      // state.homeIconFilter.iconArray.slice().sort(sortByKey('press'));
    }
  }, [updateOrderButtons]);

  return (
    <>
      <View>
        <UpperTitle content="SMARTCOOK" />
      </View>
      {/* <View style={IndexScreenStyle.welcomeText}>
        <Text> Hola Usuario</Text>
        <Text> Ya sabes que cocinar hoy?</Text>
      </View> */}
      <View style={FiltersComponentsStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={FiltersComponentsStyle.containerRoundFilters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {state.homeIconFilter.iconArray.map((icon: any) => (
            <RoundFiltersComponents
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
