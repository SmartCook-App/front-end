import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import IndexScreenStyle from "../../styles/HomeComponentsStyle/IndexScreenStyle";

interface Props {
  navigation: any;
}

const IngredientsButtonComponent: FC<Props> = (props: Props) => {
  // TODO hacer que este boton sea drageable, para luego poder
  // enviar a la screen correspondiente.
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('ChooseIngredient');
  };

  return (
    <MaterialCommunityIcons 
      name={"carrot"} 
      style={IndexScreenStyle.ingredientsButton} 
      size={62}
      onPress={onPress}
    />
  );
};
export default IngredientsButtonComponent;
