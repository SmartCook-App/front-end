import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IndexScreenStyle from "../../styles/HomeComponentsStyle/IndexScreenStyle";

const IngredientsButtonComponent: FC = () => {
  // Falta hacer que este boton sea drageable, para luego poder
  // enviar a la screen correspondiente.
  const handleClick = () => {
    console.log("This Is a Dummy");
  };

  return (
    <>
    <MaterialCommunityIcons 
      name={"carrot"} 
      style={IndexScreenStyle.ingredientsButton} 
      size={62}
      onPress={handleClick}
    />
    </>
  );
};
export default IngredientsButtonComponent;
