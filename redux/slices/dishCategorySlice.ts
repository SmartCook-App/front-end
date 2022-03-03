import { createSlice } from '@reduxjs/toolkit';
import { DishCategoryState } from '../types/dishCategoryTypes';
import { Action, baseRequestStatusReducers } from './base';

const initialState: DishCategoryState = {
  dishCategories: [],
  getCategoryStatus: {
    loading: false,
    success: false,
    error: false,
  },
};

const successGetCategories = (state: DishCategoryState, action: Action) => {
  return {
    ...state,
    dishCategories: [...action?.payload],
    getCategoryStatus: {
      loading: false,
      success: true,
      error: false,
    },
  };
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    ...baseRequestStatusReducers(
      'getCategories',
      initialState,
      null,
      successGetCategories
    ),
  },
});

export const dishCategoryReducer = categorySlice.reducer;
export const dishCategoryActions = categorySlice.actions;
