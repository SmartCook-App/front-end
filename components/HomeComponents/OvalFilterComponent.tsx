import React, { FC, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
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

            {item.values.map((item: any) => (
              <TouchableOpacity>
                <View style={FiltersComponentsStyle.directionIconAndFilterText}>
                  {Object.keys(item) == "Sin gluten" ? (
                    <>
                      <MaterialCommunityIcons
                        name={item[Object.keys(item)]}
                        size={30}
                        style={FiltersComponentsStyle.iconFilterOptions}
                      />
                      <Text style={FiltersComponentsStyle.filterOptions}>
                        {Object.keys(item)}
                      </Text>
                    </>
                  ) : Object.keys(item) == "Calorias" ? (
                    <>
                      <MaterialCommunityIcons
                        name={item[Object.keys(item)]}
                        size={30}
                        style={FiltersComponentsStyle.iconFilterOptions}
                      />
                      <Text style={FiltersComponentsStyle.filterOptions}>
                        Menos de
                      </Text>
                    </>
                  ) : (
                    <>
                      <FontAwesome
                        name={item[Object.keys(item)]}
                        size={30}
                        style={FiltersComponentsStyle.iconFilterOptions}
                      />
                      <Text style={FiltersComponentsStyle.filterOptions}>
                        {Object.keys(item)}
                      </Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
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
