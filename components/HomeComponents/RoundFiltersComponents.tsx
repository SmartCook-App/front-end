import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/Colors";
import { IconsState } from "../../redux/types/HomeTypes";

interface Props {
  name: any;
  title: any;
  isPressed: boolean;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { name, title, setupdateOrderButtons } = props;
  let { isPressed, updateOrderButtons } = props;
  const state = useSelector((state: RootState) => state);
  const [pressed, setPressed] = useState(false);

  const applyFilter = () => {
    // From other view
    isPressed = !isPressed;
    setupdateOrderButtons(!updateOrderButtons);
    // This is from this view
    setPressed(!pressed);
  };

  return (
    <View>
      <View
        style={
          pressed
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
