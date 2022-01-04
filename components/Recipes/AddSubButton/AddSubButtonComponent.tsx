import React, { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import style from './AddSubButtonStyles';

interface Props {
  amountPortions: any;
  setAmountPortions: any;
  text: any;
  OnPressfunction: any;
}

const AddSubButton: FC<Props> = (props: Props) => {
  const { text, amountPortions, setAmountPortions, OnPressfunction } = props;

  const OnPress = () => {
    if (OnPressfunction === 'add') {
      setAmountPortions(amountPortions + 1);
    } else {
      if (amountPortions > 0) {
        setAmountPortions(amountPortions - 1);
      }
    }
  };

  return (
    <TouchableHighlight onPress={OnPress} style={style.changePortionButton}>
      <Text style={style.portionText}>{text}</Text>
    </TouchableHighlight>
  );
};
export default AddSubButton;
