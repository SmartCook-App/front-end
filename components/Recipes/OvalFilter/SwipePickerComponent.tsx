import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
// import SwipePicker from "react-native-swipe-picker";
import { Picker } from '@react-native-community/picker';
import style from './OvalFilterStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import OFL from './OvalFilterLanguage';

interface Props {
  value: any;
  text: any;
}

const SwipePickerComponent: FC<Props> = (props: Props) => {
  const { value, text } = props;
  const [selectedValue, setSelectedValue] = useState('');
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const [valueItems, _setValueItems] = useState(
    value === 'calories'
      ? [
          {
            value: 60,
            label: '60',
          },
          {
            value: 120,
            label: '120',
          },
          {
            value: 200,
            label: '200',
          },
          {
            value: 400,
            label: '400',
          },
        ]
      : [
          {
            value: 15,
            label: '15',
          },
          {
            value: 30,
            label: '30',
          },
          {
            value: 45,
            label: '45',
          },
          {
            value: 60,
            label: '60',
          },
          {
            value: 120,
            label: '120',
          },
          {
            value: 200,
            label: '200',
          },
        ]
  );
  return (
    <View style={style.pickerView}>
      <Text style={style.filterOptions}>{OFL[lang]?.lessThan}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(selectedValue: any) => setSelectedValue(selectedValue)}
        itemStyle={{ height: 120, width: 620, color: 'red' }}
      >
        <Picker.Item label="- Seleccione -" value="" />
        {valueItems.map((item: any) => (
          <Picker.Item key={item.label} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Text style={style.filterOptions}>{text}</Text>
    </View>
  );
};
export default SwipePickerComponent;
