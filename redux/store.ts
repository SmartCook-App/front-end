import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { userAuthReducer } from './slices/userAuthSlice';
import { languageReducer } from './slices/languageSlice';
import { homeIconsReducer } from './slices/homeIconsSlice';
import { paintChooseIngredientReducer } from './slices/paintChooseIngredientSlice';
import { recipesHomeReducer } from './slices/recipeHomeSlice';

// Parts of the state you want to persist and level of persistance
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userAuth', 'language'],
};

// Add new reducers here
const RootReducer = combineReducers({
  userAuth: userAuthReducer,
  language: languageReducer,
  homeIcons: homeIconsReducer,
  paintChooseIngredient: paintChooseIngredientReducer,
  recipesHome: recipesHomeReducer,
});

const RootReducerPersistor = persistReducer(persistConfig, RootReducer);

// Export the store to use it in the app
export const store = createStore(RootReducerPersistor, applyMiddleware(thunk));

export const storePersistor = persistStore(store);

export type RootState = ReturnType<typeof RootReducerPersistor>;
