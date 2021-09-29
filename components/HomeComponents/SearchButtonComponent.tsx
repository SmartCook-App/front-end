import React, { FC } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const SearchButtonComponent: FC = () => {

  const pressButton = () => {
    // This is from this view
    console.log("Dummy Search Button")
  };

  return (
    <View>
      <View
        style={FiltersComponentsStyle.circle}
      >
        <IoniconsIcon
          name={"search-outline"}
          color={"black"}
          size={45}
          onPress={pressButton}
        />
      </View>
      <Text style={FiltersComponentsStyle.title}>{"search"}</Text>
    </View>
  );
};

export default SearchButtonComponent;
