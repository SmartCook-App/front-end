import { createSlice } from '@reduxjs/toolkit';
import { RecipesState } from '../types/recipeHomeTypes';
import { Action, baseRequestStatusReducers } from './base';

const initialState: RecipesState = {
  allCurrentRecipes: [],
  getRecipes: {
    loading: false,
    success: false,
    error: false,
  },
};

const successGetRecipes = (state: RecipesState, action: Action) => {
  return {
    ...state,
    allCurrentRecipes: action.payload,
    getRecipes: {
      loading: false,
      success: true,
      error: false,
    },
  };
};

const recipeHomeSlice = createSlice({
  name: 'allRecipes',
  initialState,
  reducers: {
    ...baseRequestStatusReducers(
      'getRecipes',
      initialState,
      null,
      successGetRecipes
    ),
  },
});

export const recipesHomeReducer = recipeHomeSlice.reducer;
export const recipesHomeActions = recipeHomeSlice.actions;
