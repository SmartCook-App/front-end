import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../assets/Colors';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import { paintChooseIngredientInteractor } from '../../redux/interactors/paintChooseIngredientInteractors';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('window').width;

interface Props {
  ingredientId: any;
  name: any;
  image: any;
  iconName: any;
  isPressed: any;
  isImage: any;
}

const CategoryGridComponent: FC<Props> = (props: Props) => {
  const { ingredientId, name, iconName, image, isImage, isPressed } = props;
  const dispatch = useDispatch();

  const pressIngredient = () => {
    const payload = {
      changeIsPressed: {
        ingredientId: ingredientId,
        name: name,
        image: image,
        press: !isPressed,
      },
    };
    dispatch(paintChooseIngredientInteractor(payload));
  };

  return (
    <View style={SearchIngredientStyle.eachCategoryContainer}>
      <TouchableOpacity>
        <View style={SearchIngredientStyle.categoryCircle}>
          {isImage == false ? (
            <MaterialCommunityIcons name={iconName} size={35} color="black" />
          ) : (
            <View
              style={
                isPressed
                  ? [
                      SearchIngredientStyle.categoryCircle,
                      SearchIngredientStyle.circlePress,
                    ]
                  : [
                      SearchIngredientStyle.categoryCircle,
                      SearchIngredientStyle.circleNotPress,
                    ]
              }
            >
              <TouchableOpacity onPress={pressIngredient}>
                <Avatar.Image
                  size={55}
                  source={require('../../assets/Images/Ingredients/tomato.jpg')}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Text style={SearchIngredientStyle.categoryTitle}>{name}</Text>
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
  circlePress: {
    backgroundColor: Colors.light.yellowRecipieIcons,
  },
  circleNotPress: {
    backgroundColor: Colors.light.greyOfFilters,
  },
});
