import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import style from './RecentSearchStyles';

interface Props {
  recentSearchText: any;
}

const recentSearchComponent: FC<Props> = (props: Props) => {
  const { recentSearchText } = props;

  return (
    <View style={style.recentSearchElement}>
      <MaterialIcons name="search" size={24} color="black" />
      <Text style={style.recentSearchElementText}>{recentSearchText}</Text>
    </View>
  );
};
export default recentSearchComponent;
