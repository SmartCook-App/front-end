import { homeIconsActions } from '../slices/homeIconsSlice';
import {
    buildInteractorDirectAction,
    buildInteractorDirectActionNoParams,
    buildInteractor,
} from './base';


export const reorderFiltersHomeInteractor = buildInteractorDirectAction(
    homeIconsActions.reorderFilters,
);
