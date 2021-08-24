import React, { FC, useState } from "react";
import { Text } from "react-native";
import SwipePicker from "react-native-swipe-picker";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";

interface Props {
  value: any;
  text: any;
}

const SwipePickerComponent: FC<Props> = (props: Props) => {
  const { value, text } = props;
  const [valueItems, _setValueItems] = useState(
    value === "calories"
      ? [
          {
            value: 60,
            label: "60",
          },
          {
            value: 120,
            label: "120",
          },
          {
            value: 200,
            label: "200",
          },
          {
            value: 400,
            label: "400",
          },
        ]
      : [
          {
            value: 15,
            label: "15",
          },
          {
            value: 30,
            label: "30",
          },
          {
            value: 45,
            label: "45",
          },
          {
            value: 60,
            label: "60",
          },
          {
            value: 120,
            label: "120",
          },
          {
            value: 200,
            label: "200",
          },
        ]
  );
  return (
    <>
      <Text style={FiltersComponentsStyle.filterOptions}>Menos de</Text>
      <SwipePicker
        items={valueItems}
        onChange={(index: any, item: any) => {
          console.log(`Selected index: ${index.value}`);
          console.log(`Selected item: ${item}`);
        }}
        height={80}
        width={70}
      />
      <Text style={FiltersComponentsStyle.filterOptions}>{text}</Text>
    </>
  );
};
export default SwipePickerComponent;
