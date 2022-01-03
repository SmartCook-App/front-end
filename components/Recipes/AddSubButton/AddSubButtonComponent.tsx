import React, { FC } from "react";
import { View, Text,ImageBackground, TouchableHighlight, StyleSheet } from "react-native";
import TopBar from "../RecipeDetail/TopBar/TopBarComponent";
import { normalizePx, normalizeFontSize } from '../../../styles/normalize';
import Colors from '../../../assets/Colors';

interface Props {
    amountPortions: any;
    setAmountPortions: any;
    text: any;
    OnPressfunction: any;
  }

const AddSubButton:  FC<Props> = (props: Props) =>  {
    const {text, amountPortions, setAmountPortions, OnPressfunction} = props;

    const OnPress = () => {
      if(OnPressfunction === 'add'){
        setAmountPortions(amountPortions+1)
      }else{
        if (amountPortions > 0){
          setAmountPortions(amountPortions-1)
        }
      }
    };

    return(
        <TouchableHighlight onPress={OnPress} style={RecipeStyle.changePortionButton}>
            <Text style={RecipeStyle.portionText}>{text}</Text>
        </TouchableHighlight>
    );
};
export default AddSubButton; 

const RecipeStyle = StyleSheet.create({
    changePortionButton:{
        height: normalizePx(70),
        width: normalizePx(70),
        borderRadius: normalizePx(40),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light.transparentYellow,
      },
      portionText: {
        color: Colors.light.white,
        fontWeight: 'bold',
        fontSize: normalizeFontSize(40),
        padding: 5,
      },
  });
  