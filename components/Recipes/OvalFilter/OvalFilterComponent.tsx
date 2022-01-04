import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from './OvalFilterStyles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import SwipePickerComponent from './SwipePickerComponent';
import DietTypeFilter from './DietTypeFilter';
import Modal from 'react-native-modal';
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

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
    <View style={style.oval}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={style.oval}>
          <Text style={style.letter}>{item.name}</Text>
          <IoniconsIcon
            name="chevron-down-outline"
            color={'black'}
            size={14}
            style={style.arrow}
          />
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={style.bottomPopUp}>
            <TouchableOpacity onPress={toggleModal}>
              <Entypo name="cross" size={30} style={style.crossButton} />
            </TouchableOpacity>
            <Text style={style.titleItemFilter}>{item.name}</Text>
            {item.values.map((itemValue: any) => (
              <>
                {item.name === 'Tipo dieta' ? (
                  <DietTypeFilter itemValue={itemValue} />
                ) : null}
                {item.name === 'Time' ? (
                  <View style={style.directionIconAndFilterText}>
                    <FontAwesome
                      name={itemValue[Object.keys(itemValue)]}
                      size={35}
                      style={style.iconFilterOptions}
                    />
                    <SwipePickerComponent value={'time'} text={'minutos'} />
                  </View>
                ) : null}
                {item.name === 'Calorías' ? (
                  <View style={style.directionIconAndFilterText}>
                    <MaterialCommunityIcons
                      name={itemValue[Object.keys(itemValue)]}
                      size={35}
                      style={style.iconFilterOptions}
                    />
                    <SwipePickerComponent
                      value={'calories'}
                      text={'calorías'}
                    />
                  </View>
                ) : null}
              </>
            ))}

            <View style={style.buttonApply}>
              <TouchableOpacity>
                <Text style={style.buttonText}>Aplicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OvalFilterComponent;
