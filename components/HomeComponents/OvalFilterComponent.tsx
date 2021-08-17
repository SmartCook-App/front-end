import React, { FC } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

interface Props {
  value: any;
}
const applyFilter = () => {
  // From other view
  console.log("press");
};

const OvalFilterComponent: FC<Props> = (props: Props) => {
  const { value } = props;
  return (
    <View style={FiltersComponentsStyle.oval}>
      <Text style={FiltersComponentsStyle.letter}>{value}</Text>
      <IoniconsIcon
        name="chevron-down-outline"
        color={"black"}
        size={14}
        onPress={applyFilter}
        style={FiltersComponentsStyle.arrow}
      />
    </View>
  );
};
export default OvalFilterComponent;
