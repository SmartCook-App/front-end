import React, { FC } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabBarStyle from "../../styles/TabBarStyle";

interface Props {
  name: any;
}

const IoniconsComponent: FC<Props> = (props: Props) => {
  const { name } = props;
  return (
    <>
      <Ionicons name={name} style={TabBarStyle.icon} size={36} />
    </>
  );
};
export default IoniconsComponent;
