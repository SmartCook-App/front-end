import React, { FC } from "react";
import { Text, View } from "react-native";
import UpperTitleStyle from "../styles/UpperTitleStyle";
interface Props {
  content: any;
}

const UpperTitle: FC<Props> = (props: Props) => {
  const { content } = props;
  return (
    <View style={UpperTitleStyle.container}>
      <Text style={UpperTitleStyle.title}>{content}</Text>
      <View style={UpperTitleStyle.line}></View>
    </View>
  );
};
export default UpperTitle;
