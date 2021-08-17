import { createSlice } from '@reduxjs/toolkit';
import { IconsState } from '../types/HomeTypes';
import { Action, baseRequestStatusReducers } from './base';


const initialState: IconsState = {
    iconArray: [
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
}

const orderFilters = (state: IconsState, action: Action) => {
  return {
    ...state,
    iconArray: [...state.iconArray, action.payload],
  };
};

const iconSlice = createSlice({
    name: 'catalogue',
    initialState,
    reducers: {
      ...baseRequestStatusReducers('orderFilters', initialState, null, orderFilters),
      resetIconArray: (state: IconsState) => {
        return {
          ...state,
          ...initialState,
        };
      },
    },
  });
  
  export const iconReducer = iconSlice.reducer;
  export const iconActions = iconSlice.actions;