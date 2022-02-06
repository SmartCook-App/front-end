import { createSlice } from '@reduxjs/toolkit';
import { RecipesState } from '../types/recipeHomeTypes';
import { Action } from './base';

const initialState: RecipesState = {
  allCurrentRecipes: [],
};

const recipeHomeSlice = createSlice({
  name: 'allRecipes',
  initialState,
  reducers: {
    setRecipes: (state: RecipesState, action: Action) => {
      return {
        ...state,
        allCurrentRecipes: action.payload,
      };
    },
  },
});

export const recipesHomeReducer = recipeHomeSlice.reducer;
export const recipesHomeActions = recipeHomeSlice.actions;
