import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../assets/Colors';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

interface Props {
  iconName: any;
  catgoryName: any;
}

const CategoryGridComponent: FC<Props> = (props: Props) => {
  const { iconName, catgoryName } = props;

  return (
    <View style={SearchIngredientStyle.eachCategoryContainer}>
      <TouchableOpacity>
        <View style={SearchIngredientStyle.categoryCircle}>
          <MaterialCommunityIcons name={iconName} size={35} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={SearchIngredientStyle.categoryTitle}>{catgoryName}</Text>
    </View>
  );
};
export default CategoryGridComponent;

const SearchIngredientStyle = StyleSheet.create({
  eachCategoryContainer: {
    alignItems: 'center',
    right: normalizePx(5),
    width: width / 4,
  },
  categoryCircle: {
    marginRight: normalizePx(10),
    width: normalizePx(65),
    height: normalizePx(65),
    borderRadius: normalizePx(40),
    backgroundColor: Colors.light.greyOfFilters,
    alignItems: 'center',
    justifyContent: 'center',
    left: normalizePx(5),

  },
  categoryTitle: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(10),
    width: width / 4,
    textAlign: 'center',
  },
});
