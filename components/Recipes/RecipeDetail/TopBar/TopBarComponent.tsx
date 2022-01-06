import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './TopBarStyles';
import Colors from '../../../../assets/Colors';
import { AntDesign, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

interface Props {
  navigation: any;
  setlikeRecipe: any;
  likeRecipe: any;
  visible: any;
  setVisible: any;
}

const TopBar: FC<Props> = (props: Props) => {
  const { navigation, setlikeRecipe, likeRecipe, visible, setVisible } = props;
  const pressLike = (item: any) => {
    setlikeRecipe(!likeRecipe);
  };
  const addToCalendar = (item: any) => {
    setVisible(!visible);
  };
  return (
    <View style={style.header}>
      <View style={style.alignRight}>
        <Ionicons
          name="md-arrow-undo-sharp"
          size={27}
          color={Colors.light.transparentYellow}
          onPress={navigation.goBack}
        />
      </View>
      <View style={style.alignLeft}>
        <View style={style.iconsContainer}>
          {likeRecipe ? (
            <TouchableOpacity onPress={pressLike}>
              <AntDesign name="heart" size={25} color={Colors.light.yellow} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pressLike}>
              <AntDesign name="hearto" size={25} color={Colors.light.yellow} />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <FontAwesome
              name="bookmark-o"
              size={25}
              color={Colors.light.yellow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={addToCalendar}>
            <Feather name="calendar" size={25} color={Colors.light.yellow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
