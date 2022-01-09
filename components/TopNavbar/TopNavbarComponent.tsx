import React, { FC } from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import style from './TopNavbarStyles';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  navigation: any;
  title: any;
  goBack: any;
}

const TopNavbar: FC<Props> = (props: Props) => {
  const { title, navigation, goBack } = props;

  return (
    <>
    {goBack == false ? (
      <View style={style.firstContainer}>
          <View style={style.containerWithoutGoBack}>
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.line}></View>
      </View>
      ): (
        <View style={style.containerWithGoBack}>
          <View style={style.secondContainer}>
            <View style={style.goBackView}>
              <TouchableOpacity onPress={navigation.goBack}>
                <Text>
                  <Ionicons
                    name="arrow-undo"
                    style={style.goBack}
                  />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.textView}>
              <Text style={style.title}>{title}</Text>
            </View>
          </View>
          <View style={style.line}></View>
        </View>
      )}
      </>
  );
};

export default TopNavbar;
