import React, { FC } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FilterComponentStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { reorderFiltersHomeInteractor } from "../../redux/interactors/homeIconsInteractors";
import { useDispatch } from "react-redux";
import { HomeIconTypes } from "../../redux/types/homeIconsTypes";

interface Props {
  id: any;
  name: any;
  title: any;
  isPressed: boolean;
  cookersView: boolean;
  setcookersView: any;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
  screen: string;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { id, name, title, setcookersView, isPressed, screen } = props;
  let { cookersView } = props;
  const dispatch = useDispatch();

  const applyFilter = () => {
    // This is from this view
    if (title == "cookers") {
      setcookersView(!cookersView);
    }
    const payload = {
      screen: screen,
      filter: {
        id: id,
        name: name,
        title: title,
        press: !isPressed,
        height: 150,
      },
    };
    dispatch(reorderFiltersHomeInteractor(payload));
  };

  return (
    <View>
      <View
        style={
          isPressed
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
