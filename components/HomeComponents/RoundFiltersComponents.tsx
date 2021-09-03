import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import * as homeIconsInteractors from "../../redux/interactors/homeIconsInteractors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { HomeIconsState, HomeIconTypes } from "../../redux/types/homeIconsTypes";
import { RootState } from "../../redux/store";

interface StateProps {
  icons: HomeIconsState;
}

interface DispatchProps {
  reorderFiltersHomeInteractor: typeof homeIconsInteractors.reorderFiltersHomeInteractor;
}

interface Props extends DispatchProps, StateProps {
  id: any;
  name: any;
  title: any;
  isPressed: boolean;
  cookersView: boolean;
  setcookersView: any;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { id, name, title, setcookersView, reorderFiltersHomeInteractor, isPressed } = props;
  let { cookersView } = props;
  const [pressed, setPressed] = useState(isPressed);

  const applyFilter = () => {
    // This is from this view
    if (title == 'cookers') {
      setcookersView(!cookersView);
    }
    const updatedFilter: HomeIconTypes = {
      id: id,
      name: name,
      title: title,
      press: !pressed,
      height: 150,
    }
    reorderFiltersHomeInteractor(updatedFilter);
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

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators(
    {
      ...homeIconsInteractors,
    },
    dispatch,
  ),
});

const mapStateToProps = (state: RootState): StateProps => {
  return {
    icons: state.homeIcons,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundFiltersComponents);
