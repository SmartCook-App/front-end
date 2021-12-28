import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/HomeStyles';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';

interface Props {
  text: string;
  rightText: string;
}

const Subtitle: FC<Props> = (props: Props) => {
  const { text, rightText } = props;

  return (
    <View style={RecipieSubtitleStyle.subtitleContainer}>
      <Text style={RecipieSubtitleStyle.subtitle}>{text}</Text>
      {rightText? (
      <Text style={RecipieSubtitleStyle.addButtom}>{rightText}</Text>
      ):(null)}
    </View>
  );
};

export default Subtitle;

const RecipieSubtitleStyle = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: Colors.light.transparentBlack,
    padding: normalizePx(15),
  },
  subtitle: {
    color: Colors.light.white,
    fontSize: normalizeFontSize(12),
    left: normalizePx(20),
    textTransform: 'uppercase',
  },
  addButtom: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,

  }
});
