import React, { FC } from 'react';
import { View } from 'react-native';
import Colors from '../../assets/Colors';
import { Searchbar } from 'react-native-paper';
import style from './SearchbarStyles'

interface Props {
  placeholderText: any;
}

const SearchbarComponent: FC<Props> = (props: Props) => {
  const { placeholderText } = props;

  return (
    <View style={style.searchbarContainer}>
      <Searchbar
        style={style.searchbar}
        placeholder={placeholderText}
        value=""
        iconColor={Colors.light.yellow}
      />
    </View>
  );
};

export default SearchbarComponent;


