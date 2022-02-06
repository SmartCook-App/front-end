// @ts-nocheck projectActions properties generated at runtime
import recipesServices from '../../services/recipesServices';
import { recipesHomeActions } from '../slices/recipeHomeSlice';
import { buildInteractorNoParams, buildInteractor } from './base';

export const getRecipesInteractor = buildInteractor(
  recipesHomeActions.loadingGetRecipes,
  recipesHomeActions.successGetRecipes,
  recipesHomeActions.errorGetRecipes,
  recipesServices.getRecipes,
);
