import React, { FC } from 'react';
import { Alert} from "react-native";

interface Props {
  title: any;
  text: any;
  message: any;
}
const PopUp= (props: Props) => {
  const { title, message, text } = props;

  return
    Alert.alert(
      title,
      message,
      [
        {
          text: text,
          onPress: () => console.log("OK")
        }
      ]
    )
};
export default PopUp;
