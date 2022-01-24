import {
  PaintChooseIngredientState,
  PaintChooseIngredientTypes,
} from '../types/paintChooseIngredientTypes';
import { createSlice } from '@reduxjs/toolkit';
import { Action, baseRequestStatusReducers } from './base';
import { updatePressedIngredient } from '../../utils/paintChooseIngredientHelper';
import { State } from 'react-native-gesture-handler';

const initialState: PaintChooseIngredientState = {
  ingredientsArray: [
    {
      ingredientId: 1,
      name: 'Tomate',
      image: require('../../assets/Images/Ingredients/Tomate.jpg'),
      press: false,
    },
    {
      ingredientId: 2,
      name: 'Lechuga',
      image: require('../../assets/Images/Ingredients/Lechuga.jpg'),
      press: false,
    },
    {
      ingredientId: 3,
      name: 'Brócoli',
      image: require('../../assets/Images/Ingredients/Brocoli.jpg'),
      press: false,
    },
    {
      ingredientId: 4,
      name: 'Espárrago',
      image: require('../../assets/Images/Ingredients/Esparrago.jpg'),
      press: false,
    },
    {
      ingredientId: 5,
      name: 'Pepino',
      image: require('../../assets/Images/Ingredients/Pepino.jpg'),
      press: false,
    },
    {
      ingredientId: 6,
      name: 'Cebolla',
      image: require('../../assets/Images/Ingredients/Cebolla.jpg'),
      press: false,
    },
    {
      ingredientId: 7,
      name: 'Rábano',
      image: require('../../assets/Images/Ingredients/Nabo.jpg'),
      press: false,
    },
    {
      ingredientId: 8,
      name: 'Zanahoria',
      image: require('../../assets/Images/Ingredients/Zanahoria.jpg'),
      press: false,
    },
    {
      ingredientId: 9,
      name: 'Choclo',
      image: require('../../assets/Images/Ingredients/Choclo.jpg'),
      press: false,
    },
    {
      ingredientId: 10,
      name: 'Pan',
      image: require('../../assets/Images/Ingredients/Pan.jpg'),
      press: false,
    },
    {
      ingredientId: 11,
      name: 'Arroz',
      image: require('../../assets/Images/Ingredients/Arroz.jpg'),
      press: false,
    },
    {
      ingredientId: 12,
      name: 'Cuscús',
      image: require('../../assets/Images/Ingredients/Cuscus.jpg'),
      press: false,
    },
    {
      ingredientId: 13,
      name: 'Salvado',
      image: require('../../assets/Images/Ingredients/Salvado.jpg'),
      press: false,
    },
    {
      ingredientId: 14,
      name: 'Papa',
      image: require('../../assets/Images/Ingredients/Papa.jpg'),
      press: false,
    },
    {
      ingredientId: 15,
      name: 'Avena',
      image: require('../../assets/Images/Ingredients/Avena.jpg'),
      press: false,
    },
    {
      ingredientId: 16,
      name: 'Porotos',
      image: require('../../assets/Images/Ingredients/Porotos.jpg'),
      press: false,
    },
    {
      ingredientId: 17,
      name: 'Arvejas',
      image: require('../../assets/Images/Ingredients/Arvejas.jpg'),
      press: false,
    },
    {
      ingredientId: 18,
      name: 'Garbanzos',
      image: require('../../assets/Images/Ingredients/Garbanzos.jpg'),
      press: false,
    },
    {
      ingredientId: 19,
      name: 'Lentejas',
      image: require('../../assets/Images/Ingredients/Lentejas.jpg'),
      press: false,
    },
    {
      ingredientId: 20,
      name: 'Pollo',
      image: require('../../assets/Images/Ingredients/Pollo.jpg'),
      press: false,
    },
  ],
};

const paintChooseIngredientSlice = createSlice({
  name: 'paintChooseIngredient',
  initialState,
  reducers: {
    paintIngredient: (state: PaintChooseIngredientState, action: Action) => {
      const { changeIsPressed } = action.payload;
      return {
        ...state,
        ingredientsArray: updatePressedIngredient(
          state.ingredientsArray,
          changeIsPressed
        ),
      };
    },
  },
});

export const paintChooseIngredientReducer = paintChooseIngredientSlice.reducer;
export const paintChooseIngredientActions = paintChooseIngredientSlice.actions;

