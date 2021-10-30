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
    <View style={TopNavbarStyle.view}>
      {path == "None" ? null : (
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
          <Text style={TopNavbarStyle.goBack}>{"<-"}</Text>
        </TouchableOpacity>
      )}
      <View style={TopNavbarStyle.container}>
        <Text style={TopNavbarStyle.title}>{content}</Text>
        <View style={TopNavbarStyle.line}></View>
      </View>
    </View>
  );
};

export default TopNavbar;
