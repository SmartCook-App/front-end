import {
    ActionCreatorWithPayload,
  } from '@reduxjs/toolkit';

export const buildInteractorDirectAction =
(request: ActionCreatorWithPayload<any>) => (params: any) => {
    return (dispatch: any) => {
    dispatch(request(params));
    };
};
  
  