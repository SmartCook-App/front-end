import React, { FC } from 'react';
import { View } from 'react-native';
import style from './TopBarStyles';
import Colors from '../../../../assets/Colors';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

interface Props {
  navigation: any;
}

const TopBar: FC<Props> = (props: Props) => {
  const { navigation } = props;
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
          <AntDesign name="hearto" size={25} color={Colors.light.yellow} />
          <Ionicons
            name="share-social-outline"
            size={25}
            color={Colors.light.yellow}
          />
          <MaterialIcons
            name="playlist-add"
            size={30}
            color={Colors.light.yellow}
          />
        </View>
      </View>
    </View>
  );
};

export default TopBar;
