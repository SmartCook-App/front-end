import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';

interface Props {
  recentSearchText: any;
}

const recentSearchComponent: FC<Props> = (props: Props) => {
  const { recentSearchText } = props;

  return (
    <View style={RecentSearchComponentStyle.recentSearchElement}>
      <MaterialIcons name="search" size={24} color="black" />
      <Text style={RecentSearchComponentStyle.recentSearchElementText}>
        {recentSearchText}
      </Text>
    </View>
  );
};
export default recentSearchComponent;

const RecentSearchComponentStyle = StyleSheet.create({
  recentSearchElement: {
    paddingTop: normalizePx(10),
    paddingBottom: normalizePx(10),
    flexDirection: 'row',
    borderBottomWidth: normalizePx(1),
    borderColor: '#C4C4C4',
  },
  recentSearchElementText: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(12),
    paddingHorizontal: normalizePx(15),
  },
});
