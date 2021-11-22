import { homeIconsActions } from '../slices/homeIconsSlice';
import {
    buildInteractorDirectAction,
    buildInteractorDirectActionNoParams,
    buildInteractor,
} from './base';


export const reorderFiltersHomeInteractor = buildInteractorDirectAction(
    homeIconsActions.reorderFilters,
);

export const addFilterHomeInteractor = buildInteractorDirectAction(
    homeIconsActions.addFilters,
);
