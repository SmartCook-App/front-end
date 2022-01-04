import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FiltersComponentsStyle from "../../../RoundFilters/FilterComponentStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

interface Props {
  navigation: any;
}

const SearchButtonComponent: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const pressButton = () => {
    navigation.navigate('SearchRecipes');
  };

  return (
    <View>
      <View
        style={FiltersComponentsStyle.circle}
      >
        <TouchableOpacity onPress={pressButton}>
          <IoniconsIcon
            name={"search-outline"}
            color={"black"}
            size={45}
          />
        </TouchableOpacity>
      </View>
      <Text style={FiltersComponentsStyle.title}>{"search"}</Text>
    </View>
  );
};

export default SearchButtonComponent;
