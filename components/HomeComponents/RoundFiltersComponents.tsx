import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import * as homeIconsInteractors from "../../redux/interactors/homeIconsInteractors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

interface DispatchProps {
  reorderFiltersHomeInteractor: typeof homeIconsInteractors.reorderFiltersHomeInteractor;
}

interface Props extends DispatchProps {
  name: any;
  title: any;
  isPressed: boolean;
  cookersView: boolean;
  setcookersView: any;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { name, title, setupdateOrderButtons, setcookersView, reorderFiltersHomeInteractor } = props;
  let { isPressed, updateOrderButtons, cookersView } = props;
  const [pressed, setPressed] = useState(false);

  const applyFilter = () => {
    // From other view
    isPressed = !isPressed;
    setupdateOrderButtons(!updateOrderButtons);
    // This is from this view
    setPressed(!pressed);
    if (title == 'cookers') {
      setcookersView(!cookersView);
    }
    // const updatedFilter = {
    //   name: name,
    //   title: title,
    //   press: pressed,
    //   height: 150,
    // }
    // reorderFiltersHomeInteractor(updatedFilter);
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

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators(
    {
      ...homeIconsInteractors,
    },
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(RoundFiltersComponents);
