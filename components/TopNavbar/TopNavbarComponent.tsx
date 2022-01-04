import React, { FC } from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import style from './TopNavbarStyles';
import { Ionicons } from '@expo/vector-icons';
interface Props {
  navigation: any;
  title: any;
  goBack: any;
}
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const TopNavbar: FC<Props> = (props: Props) => {
  const { title, navigation, goBack } = props;

  return (
    <View>
      {goBack == false ? (
        <>
          <View style={style.container}>
            <Text style={style.title}>{title}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={style.container}>
            <TouchableOpacity style={style.touch}>
              <Text>
                <Ionicons
                  name="arrow-undo"
                  style={style.goBack}
                  onPress={navigation.goBack}
                />
              </Text>
            </TouchableOpacity>
            <Text style={style.title}>{title}</Text>
          </View>
        </>
      )}
      <View style={style.line}></View>
    </View>
  );
};

export default TopNavbar;
