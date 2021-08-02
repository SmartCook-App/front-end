import { createSlice } from '@reduxjs/toolkit';
import { Action } from './base';

const initialState: string = 'ES';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (_state: string, action: Action) => {
      return action.payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;
