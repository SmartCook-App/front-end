import React, { FC } from "react";
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

const IndexScreen: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  var listNamesFilters = Object.values(FL[lang]);
  var listCirlesFilters = Object.values(CFL[lang]);

  return (
    <View>
      <View>
        <UpperTitle content="SMARTCOOK" />
      </View>
      <View style={IndexScreenStyle.welcomeText}>
        <Text> Hola Usuario</Text>
        <Text> Ya sabes que cocinar hoy?</Text>
      </View>
      <View style={FiltersComponentsStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent value={item} />
          ))}
        </ScrollView>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {listCirlesFilters.map((item: any) => (
              <View style={FiltersComponentsStyle.textAndCircles}>
                <View style={FiltersComponentsStyle.allCircles}>
                  <RoundFiltersComponents name={"flame-outline"} />
                </View>
                <View style={FiltersComponentsStyle.allText}>
                  <Text style={FiltersComponentsStyle.letter}>{item}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default IndexScreen;
