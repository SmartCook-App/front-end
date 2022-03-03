// @ts-nocheck projectActions properties generated at runtime
import dishCategoriesServices from '../../services/dishCategoryServices';
import { dishCategoryActions } from '../slices/dishCategorySlice';
import { buildInteractorNoParams } from './base';

export const getDishCategoryInteractor = buildInteractorNoParams(
  dishCategoryActions.loadingGetCategories,
  dishCategoryActions.successGetCategories,
  dishCategoryActions.errorGetCategories,
  dishCategoriesServices.getCategories
);
