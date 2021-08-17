import React, { FC, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

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
            <Text style={FiltersComponentsStyle.letter}>{item.name}</Text>
            {item.values.map((item: any) => (
              <Text style={FiltersComponentsStyle.letter}>{item}</Text>
            ))}
            <TouchableOpacity onPress={toggleModal}>
              <Text style={FiltersComponentsStyle.letter}>out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OvalFilterComponent;
