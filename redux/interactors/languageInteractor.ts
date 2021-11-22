import { languageActions } from '../slices/languageSlice';
import { buildInteractorDirectAction } from './base';

export const setLanguageInteractor = buildInteractorDirectAction(
  languageActions.changeLanguage,
);
