import { BaseRequestStatus } from './base'

export interface Recipe {
  id: string;
  name: string;
  time: string | null;
  tips: string | null;
  image: string | null;
  calories: string;
  fat: string;
  proteins: string;
  carbs: string;
  owner: string;
  portions: string;
  difficulty: string | null;
}

export interface RecipesState {
  allCurrentRecipes: [] | null;
  getRecipes: BaseRequestStatus;
}