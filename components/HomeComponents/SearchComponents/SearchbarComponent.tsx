import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizePx } from '../../../styles/normalize';
import { Searchbar } from 'react-native-paper';

interface Props {
  placeholderText: any;
}

const SearchbarComponent: FC<Props> = (props: Props) => {
  const { placeholderText } = props;

  return (
    <View style={SearchRecipiesStyle.searchbarContainer}>
      <Searchbar
        style={SearchRecipiesStyle.searchbar}
        placeholder={placeholderText}
        value=""
        iconColor={Colors.light.yellow}
      />
    </View>
  );
};

export default SearchbarComponent;

const SearchRecipiesStyle = StyleSheet.create({
  searchbarContainer: {
    flex: 0.1,
    paddingTop: normalizePx(20),
    paddingLeft: normalizePx(10),
    paddingRight: normalizePx(10),
  },
  searchbar: {
    borderRadius: normalizePx(30),
  },
});
