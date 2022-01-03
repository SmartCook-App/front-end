import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import TopNavbarStyle from "../../styles/TopNavbarStyle";
import { Ionicons } from '@expo/vector-icons'; 
interface Props {
  navigation: any;
  title: any;
  goBack: any;
}
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const TopNavbar: FC<Props> = (props: Props) => {
  const { title, navigation, goBack } = props;

  return (
    <View>
      {goBack == false ? (
        <>
        <View style={TopNavbarStyle.container}>
          <Text style={TopNavbarStyle.title}>{title}</Text>
        </View>
        </>
      ) : (
        <>
        <View style={TopNavbarStyle.container}>
          <TouchableOpacity style={TopNavbarStyle.touch}>
            <Text><Ionicons name="arrow-undo" style={TopNavbarStyle.goBack} onPress={navigation.goBack}/></Text> 
          </TouchableOpacity>
          <Text style={TopNavbarStyle.title}>{title}</Text>
        </View>
        </>

      )}
      <View style={TopNavbarStyle.line}></View>
    </View>
  );
};

export default TopNavbar;
