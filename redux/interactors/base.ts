import {
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload,
  } from '@reduxjs/toolkit';

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
    request: ((args: any) => Promise<any>) | null,
  ) =>
  (params: any) => {
    return async function (dispatch: any) {
      dispatch(loadingAction());
      try {
        const response = await request!(params);
        dispatch(successAction(response));
      } catch (error) {
        dispatch(errorAction(error?.message));
      }
    };
};

export const buildInteractorDirectActionNoParams = (request: ActionCreatorWithoutPayload) => () => {
  return (dispatch: any) => {
    dispatch(request());
  };
};