import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';

interface Props {
  title: any;
  navigation: any;
}

const TopBarWithGoBack: FC<Props> = (props: Props) => {
  const { title, navigation } = props;

  return (
    <View style={SearchRecipiesStyle.header}>
      <View style={SearchRecipiesStyle.alignRight}>
        <Ionicons
          name="md-arrow-undo-sharp"
          size={27}
          color={Colors.light.transparentYellow}
          onPress={navigation.goBack}
        />
      </View>
      <Text style={SearchRecipiesStyle.centerText}>
        {title}
      </Text>
    </View>
  );
};

export default TopBarWithGoBack;

const SearchRecipiesStyle = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: normalizePx(1),
      borderColor: '#C4C4C4',
      height: normalizePx(100),
    },
    alignRight: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(30),
      left: normalizePx(20),
    },
    centerText: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(30),
      left: normalizePx(70),
      textTransform: 'uppercase',
      fontSize: normalizeFontSize(18),
      fontFamily: 'nunito-black',
      color: Colors.light.yellow,
    },
  });