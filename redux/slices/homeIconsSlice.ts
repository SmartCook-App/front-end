import { HomeIconsState } from '../types/homeIconsTypes';
import { createSlice } from '@reduxjs/toolkit';
import { Action, baseRequestStatusReducers } from './base';
import { updateFilters } from '../../utils/homeIconsHelper';

const initialState: HomeIconsState = {
  iconArray: [
    {
      name: "search-outline",
      title: "search",
      press: false,
      height: 150,
    },
    {
      name: "flag-outline",
      title: "popular",
      press: false,
      height: 150,
    },
    {
      name: "flashlight-outline",
      title: "cookers",
      press: false,
      height: 150,
    },
    {
      name: "flask-outline",
      title: "alcoholicBeverages",
      press: false,
      height: 150,
    },
    {
      name: "flash-off-outline",
      title: "chilean",
      press: false,
      height: 150,
    },
    {
      name: "flash-outline",
      title: "dessert",
      press: false,
      height: 150,
    },
    {
      name: "beaker-outline",
      title: "popular",
      press: false,
      height: 150,
    },
  ],
};

const homeIconsSlice = createSlice({
  name: 'homeIcons',
  initialState,
  reducers: {
    reorderFilters: (state: HomeIconsState, action: Action) => {
      const { filter } = action.payload;
      return {
        ...state,
        iconArray: updateFilters(state.iconArray, filter),
      };
    },
  },
});

export const homeIconsReducer = homeIconsSlice.reducer;
export const homeIconsActions = homeIconsSlice.actions;
