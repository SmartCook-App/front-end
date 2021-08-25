import React, { FC, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SwipePickerComponent from "./SwipePickerComponent";
import DietTypeFilter from "./DietTypeFilter";
import Modal from "react-native-modal";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

interface Props {
  item: any;
}
const OvalFilterComponent: FC<Props> = (props: Props) => {
  const { item } = props;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={FiltersComponentsStyle.oval}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={FiltersComponentsStyle.oval}>
          <Text style={FiltersComponentsStyle.letter}>{item.name}</Text>
          <IoniconsIcon
            name="chevron-down-outline"
            color={"black"}
            size={14}
            style={FiltersComponentsStyle.arrow}
          />
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={FiltersComponentsStyle.bottomPopUp}>
            <TouchableOpacity onPress={toggleModal}>
              <Entypo
                name="cross"
                size={30}
                style={FiltersComponentsStyle.crossButton}
              />
            </TouchableOpacity>
            <Text style={FiltersComponentsStyle.titleItemFilter}>
              {item.name}
            </Text>
            {console.log(item)}
            {item.values.map((itemValue: any) => (
              <>
                {item.name === "Tipo dieta" ? (
                  <DietTypeFilter itemValue={itemValue} />
                ) : null}
                {item.name === "Time" ? (
                  <View
                    style={FiltersComponentsStyle.directionIconAndFilterText}
                  >
                    <FontAwesome
                      name={itemValue[Object.keys(itemValue)]}
                      size={35}
                      style={FiltersComponentsStyle.iconFilterOptions}
                    />
                    <SwipePickerComponent value={"time"} text={"minutos"} />
                  </View>
                ) : null}
                {item.name === "Calorías" ? (
                  <View
                    style={FiltersComponentsStyle.directionIconAndFilterText}
                  >
                    <MaterialCommunityIcons
                      name={itemValue[Object.keys(itemValue)]}
                      size={35}
                      style={FiltersComponentsStyle.iconFilterOptions}
                    />
                    <SwipePickerComponent
                      value={"calories"}
                      text={"calorías"}
                    />
                  </View>
                ) : null}
              </>
            ))}

            <View style={FiltersComponentsStyle.buttonApply}>
              <TouchableOpacity>
                <Text style={FiltersComponentsStyle.buttonText}>Aplicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OvalFilterComponent;
