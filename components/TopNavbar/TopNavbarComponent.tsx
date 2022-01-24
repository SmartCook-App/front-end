import React, { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
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
      <View style={style.mainContainer}>
          <View style={style.horizontalContainer}>
              <View style={style.textContainerWithoutGoBack}>
                <Text style={style.title}>{title}</Text>
              </View>
          </View>
          <View style={style.line}></View>
        </View>
      ): (
      <View style={style.mainContainer}>
        <View style={style.horizontalContainer}>
          <View style={style.goBackContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Ionicons
                  name="arrow-undo"
                  style={style.goBack}
                />
            </TouchableOpacity>
          </View>
          
          <View style={style.textContainer}>
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.emptyView}>    
          </View>
        </View>
        <View style={style.line}></View>
      </View>

      )}
    </>
      );
};

export default TopNavbar;
