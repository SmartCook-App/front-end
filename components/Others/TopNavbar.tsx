import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import Colors from "../../assets/Colors";
import TopNavbarStyle from "../../styles/TopNavbarStyle";
import { Ionicons } from '@expo/vector-icons'; 
interface Props {
  navigation: any;
  content: any;
  path: any;
}
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

// w 411
// h 899
const TopNavbar: FC<Props> = (props: Props) => {
  const { content, navigation, path } = props;
  return (
    <View>
      {path == "None" ? (
        <>
        <View style={TopNavbarStyle.container}>
          <Text style={TopNavbarStyle.title}>{content}</Text>
        </View>
        </>
      ) : (
        <>
        <View style={TopNavbarStyle.container}>
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
          <Ionicons name="arrow-undo" style={TopNavbarStyle.goBack} color={Colors.light.yellow}/>   
          </TouchableOpacity>
          <Text style={TopNavbarStyle.title}>{content}</Text>
        </View>
        </>

      )}
      <View style={TopNavbarStyle.line}></View>
    </View>
  );
};

export default TopNavbar;
