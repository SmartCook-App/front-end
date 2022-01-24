import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from './IngredientsButtonStyles';
import { normalizePx } from '../../../../styles/normalize';
interface Props {
  navigation: any;
}

const IngredientsButtonComponent: FC<Props> = (props: Props) => {
  // TODO hacer que este boton sea drageable, para luego poder
  // enviar a la screen correspondiente.
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('ChooseIngredientScreen');
  };

  return (
    <MaterialCommunityIcons
      name={'carrot'}
      style={style.ingredientsButton}
      size={normalizePx(80)}
      onPress={onPress}
    />
  );
};
export default IngredientsButtonComponent;
