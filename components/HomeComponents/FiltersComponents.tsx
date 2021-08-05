import React, { FC } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FL from "../../assets/Languages/FiltersLanguages";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";

const FiltersComponents: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <>
      <View style={FiltersComponentsStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/*aca tengo que poner un map */}
          <View style={FiltersComponentsStyle.oval}>
            <Text style={FiltersComponentsStyle.letter}>{FL[lang]?.time}</Text>
          </View>
          <View style={FiltersComponentsStyle.oval}>
            <Text style={FiltersComponentsStyle.letter}>{FL[lang]?.time}</Text>
          </View>
          <View style={FiltersComponentsStyle.oval}>
            <Text style={FiltersComponentsStyle.letter}>{FL[lang]?.time}</Text>
          </View>
          <View style={FiltersComponentsStyle.oval}>
            <Text style={FiltersComponentsStyle.letter}>{FL[lang]?.time}</Text>
          </View>
          <View style={FiltersComponentsStyle.oval}>
            <Text style={FiltersComponentsStyle.letter}>{FL[lang]?.time}</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default FiltersComponents;
