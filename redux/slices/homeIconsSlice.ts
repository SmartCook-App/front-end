import { HomeIconsState, HomeIconTypes } from '../types/homeIconsTypes';
import { createSlice } from '@reduxjs/toolkit';
import { Action, baseRequestStatusReducers } from './base';
import { updateFilters } from '../../utils/homeIconsHelper';

const initialState: HomeIconsState = {
  iconArray: [
    {
      id: "1",
      name: "flag-outline",
      title: "popular",
      press: false,
      height: 150,
    },
    {
      id: "2",
      name: "flashlight-outline",
      title: "cookers",
      press: false,
      height: 150,
    },
    {
      id: "3",
      name: "flask-outline",
      title: "alcoholicBeverages",
      press: false,
      height: 150,
    },
    {
      id: "4",
      name: "flash-off-outline",
      title: "chilean",
      press: false,
      height: 150,
    },
    {
      id: "5",
      name: "flash-outline",
      title: "dessert",
      press: false,
      height: 150,
    },
    {
      id: "6",
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
      const filter: HomeIconTypes = action.payload;
      return {
        ...state,
        iconArray: updateFilters(state.iconArray, filter).sort((a,b) => 
        (a.press > b.press) ? -1 : ((b.press > a.press) ? 1 : 0)),
      };
    },
  },
});

export const homeIconsReducer = homeIconsSlice.reducer;
export const homeIconsActions = homeIconsSlice.actions;
