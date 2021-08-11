import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/Colors";

interface Props {
  name: any;
  title: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const [press, setPress] = useState(false);
  const { name, title } = props;

  const changePosition = () => {
    console.log("lelvar al principop");
  };

  const applyFilter = () => {
    setPress(!press);
    if (press === true) {
      changePosition();
    }
  };

  return (
    <View>
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
      <Text style={FiltersComponentsStyle.title}>{title}</Text>
    </View>
  );
};
export default RoundFiltersComponents;
