import { paintChooseIngredientActions } from '../slices/paintChooseIngredientSlice';
import {
    buildInteractorDirectAction,
} from './base';


export const paintChooseIngredientInteractor = buildInteractorDirectAction(
    paintChooseIngredientActions.paintIngredient,
);