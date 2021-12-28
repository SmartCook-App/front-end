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
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 2,
      name: 'Lechuga',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 3,
      name: 'Brocoli',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 4,
      name: 'Esparrago',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 5,
      name: 'Pepino',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 6,
      name: 'Cebolla',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 7,
      name: 'Nabo',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 8,
      name: 'Zanahoria',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 9,
      name: 'Choclo',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 10,
      name: 'Pan',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 11,
      name: 'Arroz',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 12,
      name: 'Cuscus',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 13,
      name: 'Salvado',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 14,
      name: 'Papa',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 15,
      name: 'Avena',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 16,
      name: 'Porotos',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 17,
      name: 'Arvejas',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 18,
      name: 'Gravanzos',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 19,
      name: 'Lentejas',
      image: '../../assets/Images/Ingredients/tomato.jpg',
      press: false,
    },
    {
      ingredientId: 20,
      name: 'Pollo',
      image: '../../assets/Images/Ingredients/tomato.jpg',
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
