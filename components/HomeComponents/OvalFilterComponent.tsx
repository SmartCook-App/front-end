import React, { FC } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";

interface Props {
  value: any;
}

const OvalFilterComponent: FC<Props> = (props: Props) => {
  const { value } = props;
  return (
    <View style={FiltersComponentsStyle.oval}>
      <Text style={FiltersComponentsStyle.letter}>{value}</Text>
    </View>
  );
};
export default OvalFilterComponent;
