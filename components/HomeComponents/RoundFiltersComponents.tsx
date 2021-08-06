import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface Props {
  name: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const [press, setPress] = useState(false);
  const { name } = props;
  const applyFilter = () => {
    setPress(!press);
  };

  return (
    <>
      <View
        style={
          press
            ? [
                FiltersComponentsStyle.circle,
                FiltersComponentsStyle.circlePress,
              ]
            : [
                FiltersComponentsStyle.circle,
                FiltersComponentsStyle.circleNotPress,
              ]
        }
      >
        <IoniconsIcon
          name={name}
          color={"black"}
          size={45}
          onPress={applyFilter}
        />
      </View>
    </>
  );
};
export default RoundFiltersComponents;
