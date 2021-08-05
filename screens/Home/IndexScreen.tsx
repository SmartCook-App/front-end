import React, { FC } from "react";
import { Text, View } from "react-native";
import UpperTitle from "../../components/UpperTitleComponent";
import FiltersComponents from "../../components/HomeComponents/FiltersComponents";

const IndexScreen: FC = () => {
  return (
    <>
      <View>
        <UpperTitle content="SMARTCOOK" />
      </View>
      <View>
        <Text> Hola Usuario</Text>
        <Text> Ya sabes que cocinar hoy?</Text>
      </View>
      <View>
        <FiltersComponents />
        <Text>otro filtro</Text>
      </View>
    </>
  );
};
export default IndexScreen;
