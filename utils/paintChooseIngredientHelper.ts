import { PaintChooseIngredientTypes } from '../redux/types/paintChooseIngredientTypes';

export const updatePressedIngredient = (
  chooseIngredientArray: PaintChooseIngredientTypes[],
  modifiedPressIngredient: PaintChooseIngredientTypes
): PaintChooseIngredientTypes[] => {
  const newIngredientArray = chooseIngredientArray.map(
    (ingredient: PaintChooseIngredientTypes) => {
      if (ingredient.ingredientId === modifiedPressIngredient.ingredientId) {
        return modifiedPressIngredient;
      } else {
        return ingredient;
      }
    }
  );
  return newIngredientArray;
};
