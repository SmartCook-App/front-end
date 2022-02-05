// @ts-nocheck projectActions properties generated at runtime
import recipesServices from '../../services/recipesServices';
import { recipesHomeActions } from '../slices/recipeHomeSlice';
import { buildInteractorNoParams } from './base';

export const getRecipesInteractor = buildInteractorNoParams(
  recipesServices.getRecipes
);