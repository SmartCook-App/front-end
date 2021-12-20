import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/HomeStyles';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';
import {
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from '@expo/vector-icons';

interface Props {
  navigation: any;
}

const TopBar: FC<Props> = (props: Props)=> {  
    const {navigation} = props;
    return (
        <View style={RecipieStyle.header}>
            <View style={RecipieStyle.alignRight}>
            <Ionicons
                name="md-arrow-undo-sharp"
                size={27}
                color={Colors.light.transparentYellow}
                onPress={navigation.goBack}
            />
            </View>
            <View style={RecipieStyle.alignLeft}>
            <View style={RecipieStyle.iconsContainer}>
                <AntDesign
                name="hearto"
                size={25}
                color={Colors.light.yellow}
                />
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

  const RecipieStyle = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    alignLeft: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(25),
      left: normalizePx(240),
    },
    alignRight: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(30),
      left: normalizePx(20),
    },
    iconsContainer: {
      width: normalizePx(140),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });