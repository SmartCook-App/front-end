import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { paintChooseIngredientInteractor } from '../../../redux/interactors/paintChooseIngredientInteractors';
import { useDispatch } from 'react-redux';
import { Avatar } from 'react-native-paper';
import style from './IngredientCategoryStyles';

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
    <View style={style.eachCategoryContainer}>
      <TouchableOpacity>
        <View style={style.categoryCircle}>
          {isImage == false ? (
            <MaterialCommunityIcons name={iconName} size={35} color="black" />
          ) : (
            <View
              style={
                isPressed
                  ? [style.categoryCircle, style.circlePress]
                  : [style.categoryCircle, style.circleNotPress]
              }
            >
              <TouchableOpacity onPress={pressIngredient}>
                <Avatar.Image
                  size={55}
                  source={{ uri: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' }}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Text style={style.categoryTitle}>{name}</Text>
    </View>
  );
};
export default CategoryGridComponent;
