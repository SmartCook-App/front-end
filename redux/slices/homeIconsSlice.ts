import { HomeIconsState, HomeIconTypes } from '../types/homeIconsTypes';
import { createSlice } from '@reduxjs/toolkit';
import { Action, baseRequestStatusReducers } from './base';
import { updateFilters } from '../../utils/homeIconsHelper';
import { State } from 'react-native-gesture-handler';

const initialState: HomeIconsState = {
  homeIconArray: [
    {
      id: "1",
      title: "Populares",
      press: false,
      image: require('../../assets/Images/Filters/Aperitivo.jpg'),
    },
    {
      id: "2",
      title: "Aperitivos",
      press: false,
      image: require('../../assets/Images/Filters/Aperitivo.jpg'),
    },
    {
      id: "3",
      title: "Barato",
      press: false,
      image: require('../../assets/Images/Filters/Barato.jpg'),
    },
    {
      id: "4",
      title: "Buscador",
      press: false,
      image: require('../../assets/Images/Filters/Barato.jpg'),
    },
    {
      id: "5",
      title: "Carnes",
      press: false,
      image: require('../../assets/Images/Filters/Carnes.jpg'),
    },
    {
      id: "6",
      title: "Cocineros",
      press: false,
      image: require('../../assets/Images/Filters/Carnes.jpg'),
    },
    {
      id: "7",
      title: "Comida chilena",
      press: false,
      image: require('../../assets/Images/Filters/Comida_chilena.jpg'),
    },
    {
      id: "8",
      title: "Copete",
      press: false,
      image: require('../../assets/Images/Filters/Copete.jpg'),
    },
    {
      id: "9",
      title: "Desayuno/Te",
      press: false,
      image: require('../../assets/Images/Filters/Desayuno_Te.jpg'),
    },
    {
      id: "10",
      title: "Ensaladas",
      press: false,
      image: require('../../assets/Images/Filters/Ensaladas.jpg'),
    },
    {
      id: "11",
      title: "Entradas",
      press: false,
      image: require('../../assets/Images/Filters/Entrada.jpg'),
    },
    {
      id: "12",
      title: "Fácil",
      press: false,
      image: require('../../assets/Images/Filters/Facil.jpg'),
    },
    {
      id: "13",
      title: "Jugos",
      press: false,
      image: require('../../assets/Images/Filters/Jugo.jpg'),
    },
    {
      id: "14",
      title: "Light",
      press: false,
      image: require('../../assets/Images/Filters/Light.jpg'),
    },
    {
      id: "15",
      title: "Pan",
      press: false,
      image: require('../../assets/Images/Filters/Pan.jpg'),
    },
    {
      id: "16",
      title: "Pastas",
      press: false,
      image: require('../../assets/Images/Filters/Pastas.jpg'),
    },
    {
      id: "17",
      title: "Pescados",
      press: false,
      image: require('../../assets/Images/Filters/Pescado.jpg'),
    },
    {
      id: "18",
      title: "Platos fríos",
      press: false,
      image: require('../../assets/Images/Filters/Plato_frío.jpg'),
    },
    {
      id: "19",
      title: "Repostería",
      press: false,
      image: require('../../assets/Images/Filters/Reposteria.jpg'),
    },
    {
      id: "20",
      title: "Salsas",
      press: false,
      image: require('../../assets/Images/Filters/Salsa.jpg'),
    },
    {
      id: "21",
      title: "Sopas",
      press: false,
      image: require('../../assets/Images/Filters/Sopas.jpg'),
    },
    {
      id: "22",
      title: "Thermomix",
      press: false,
      image: require('../../assets/Images/Filters/Thermomix.jpg'),
    },
    {
      id: "23",
      title: "Postres",
      press: false,
      image: require('../../assets/Images/Filters/Postres.jpg'),
    },
    {
      id: "24",
      title: "Acompañamientos",
      press: false,
      image: require('../../assets/Images/Filters/Acompañamientos.jpg'),
    },

  ],
  accountsIconArray: [
    {
      id: "1",
      title: "Populares",
      press: false,
      image: require('../../assets/Images/Filters/Aperitivo.jpg'),
    },
    {
      id: "2",
      title: "Aperitivos",
      press: false,
      image: require('../../assets/Images/Filters/Aperitivo.jpg'),
    },
    {
      id: "3",
      title: "Barato",
      press: false,
      image: require('../../assets/Images/Filters/Barato.jpg'),
    },
    {
      id: "4",
      title: "Buscador",
      press: false,
      image: require('../../assets/Images/Filters/Barato.jpg'),
    },
    {
      id: "5",
      title: "Carnes",
      press: false,
      image: require('../../assets/Images/Filters/Carnes.jpg'),
    },
    {
      id: "6",
      title: "Cocineros",
      press: false,
      image: require('../../assets/Images/Filters/Carnes.jpg'),
    },
    {
      id: "7",
      title: "Comida chilena",
      press: false,
      image: require('../../assets/Images/Filters/Comida_chilena.jpg'),
    },
    {
      id: "8",
      title: "Copete",
      press: false,
      image: require('../../assets/Images/Filters/Copete.jpg'),
    },
    {
      id: "9",
      title: "Desayuno/Te",
      press: false,
      image: require('../../assets/Images/Filters/Desayuno_Te.jpg'),
    },
    {
      id: "10",
      title: "Ensaladas",
      press: false,
      image: require('../../assets/Images/Filters/Ensaladas.jpg'),
    },
    {
      id: "11",
      title: "Entradas",
      press: false,
      image: require('../../assets/Images/Filters/Entrada.jpg'),
    },
    {
      id: "12",
      title: "Fácil",
      press: false,
      image: require('../../assets/Images/Filters/Facil.jpg'),
    },
    {
      id: "13",
      title: "Jugos",
      press: false,
      image: require('../../assets/Images/Filters/Jugo.jpg'),
    },
    {
      id: "14",
      title: "Light",
      press: false,
      image: require('../../assets/Images/Filters/Light.jpg'),
    },
    {
      id: "15",
      title: "Pan",
      press: false,
      image: require('../../assets/Images/Filters/Pan.jpg'),
    },
    {
      id: "16",
      title: "Pastas",
      press: false,
      image: require('../../assets/Images/Filters/Pastas.jpg'),
    },
    {
      id: "17",
      title: "Pescados",
      press: false,
      image: require('../../assets/Images/Filters/Pescado.jpg'),
    },
    {
      id: "18",
      title: "Platos fríos",
      press: false,
      image: require('../../assets/Images/Filters/Plato_frío.jpg'),
    },
    {
      id: "19",
      title: "Repostería",
      press: false,
      image: require('../../assets/Images/Filters/Reposteria.jpg'),
    },
    {
      id: "20",
      title: "Salsas",
      press: false,
      image: require('../../assets/Images/Filters/Salsa.jpg'),
    },
    {
      id: "21",
      title: "Sopas",
      press: false,
      image: require('../../assets/Images/Filters/Sopas.jpg'),
    },
    {
      id: "22",
      title: "Thermomix",
      press: false,
      image: require('../../assets/Images/Filters/Thermomix.jpg'),
    },
    {
      id: "23",
      title: "Postres",
      press: false,
      image: require('../../assets/Images/Filters/Postres.jpg'),
    },
    {
      id: "24",
      title: "Acompañamientos",
      press: false,
      image: require('../../assets/Images/Filters/Acompañamientos.jpg'),
    },
  ],
};

const homeIconsSlice = createSlice({
  name: 'homeIcons',
  initialState,
  reducers: {
    reorderFilters: (state: HomeIconsState, action: Action) => {
      const { screen, filter } = action.payload;
      if (screen == "RecipesHomeScreen") {
        return {
          ...state,
          homeIconArray: updateFilters(state.homeIconArray, filter).sort((a, b) =>
            (a.press > b.press) ? -1 : ((b.press > a.press) ? 1 : 0)),
        };
      }
      else if (screen == "AccountScreen") {
        return {
          ...state,
          accountsIconArray: updateFilters(state.accountsIconArray, filter).sort((a, b) =>
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
