import { BaseRequestStatus } from './base';

export interface Category {
  id: string;
  name: string;
  image: string;
  press: boolean;
  dish_category_intermediate: [];
}

export interface DishCategoryState {
  dishCategories: Category[];
  getCategoryStatus: BaseRequestStatus;
}
