import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';
import errorHandler from '../../services/errorHandler';

export const buildInteractorDirectAction =
  (request: ActionCreatorWithPayload<any>) => (params: any) => {
    return (dispatch: any) => {
      dispatch(request(params));
    };
  };

export const buildInteractor =
  (
    loadingAction: ActionCreatorWithoutPayload,
    successAction: ActionCreatorWithPayload<any>,
    errorAction: ActionCreatorWithPayload<any>,
    request: ((args: any) => Promise<any>) | null
  ) =>
  (params: any) => {
    return async function (dispatch: any) {
      dispatch(loadingAction());
      try {
        const response = await request!(params);
        dispatch(successAction(response));
      } catch (error) {
        console.log(error);
        const composedErrorMessage = errorHandler(error);
        dispatch(errorAction(composedErrorMessage));
      }
    };
  };

export const buildInteractorNoParams =
  (
    loadingAction: ActionCreatorWithoutPayload,
    successAction: ActionCreatorWithPayload<any>,
    errorAction: ActionCreatorWithPayload<any>,
    request: (() => Promise<any>) | null
  ) =>
  () => {
    return async function (dispatch: any) {
      dispatch(loadingAction());
      try {
        const response = await request!();
        dispatch(successAction(response));
      } catch (error) {
        const composedErrorMessage = errorHandler(error);
        dispatch(errorAction(composedErrorMessage));
      }
    };
  };

export const buildInteractorDirectActionNoParams =
  (request: ActionCreatorWithoutPayload) => () => {
    return (dispatch: any) => {
      dispatch(request());
    };
  };
