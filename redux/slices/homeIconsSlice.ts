import { HomeIconsState, HomeIconTypes } from '../types/homeIconsTypes';
import { createSlice } from '@reduxjs/toolkit';
import { Action, baseRequestStatusReducers } from './base';
import { updateFilters } from '../../utils/homeIconsHelper';
import { State } from 'react-native-gesture-handler';

const initialState: HomeIconsState = {
  homeIconArray: [
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
  accountsIconArray: [
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
      const {screen, filter} = action.payload;
      if (screen == "RecipesHomeScreen") {
        return {
          ...state,
          homeIconArray: updateFilters(state.homeIconArray, filter).sort((a,b) => 
          (a.press > b.press) ? -1 : ((b.press > a.press) ? 1 : 0)),
        };
      }
      else if (screen == "AccountScreen") {
        return {
          ...state,
          accountsIconArray: updateFilters(state.accountsIconArray, filter).sort((a,b) => 
          (a.press > b.press) ? -1 : ((b.press > a.press) ? 1 : 0)),
        };
      }
    },
    addFilters: (state: HomeIconsState, action: Action) => {
      const filter: HomeIconTypes = action.payload;
      return {
        ...state,
        accountsIconArray: [...state.accountsIconArray, filter]
      };
    },
  },
});

export const homeIconsReducer = homeIconsSlice.reducer;
export const homeIconsActions = homeIconsSlice.actions;
