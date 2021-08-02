import { UserAuthState } from '../types/userAuthTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserAuthState = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    reset_password_redirect_url: null,
    confirm_success_url: null,
    image: null,
    deleted_at: null,
    account_type: 'user',
    loginUserAuthStatus: {
      loading: false,
      success: false,
      error: false,
    },
    registerUserAuthStatus: {
      loading: false,
      success: false,
      error: false,
    },
//     logoutUserAuthStatus: {
//       loading: false,
//       success: false,
//       error: false,
//    },
};

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
      loadingLoginUserAuth: (state: UserAuthState) => {
        return {
          ...state,
          loginUserAuthStatus: { loading: true, success: false, error: false },
        };
      },
      successLoginUserAuth: (state: UserAuthState, action) => {
        return {
          ...state,
          ...action.payload,
          loginUserAuthStatus: {
            loading: false,
            success: true,
            error: false,
          },
          registerUserAuthStatus: {
            loading: false,
            success: false,
            error: false,
          },
          logoutUserAuthStatus: { loading: false, success: false, error: false },
        };
      },
      errorLoginUserAuth: (state: UserAuthState, action) => {
        return {
          ...state,
          loginUserAuthStatus: {
            loading: false,
            success: false,
            error: action.payload || true,
          },
        };
      },
      loadingRegisterUserAuth: (state: UserAuthState) => {
        return {
          ...state,
          registerUserAuthStatus: { loading: true, success: false, error: false },
        };
      },
      successRegisterUserAuth: (state: UserAuthState, action) => {
        return {
          ...state,
          ...action.payload,
          registerUserAuthStatus: {
            loading: false,
            success: true,
            error: false,
          },
          logoutUserAuthStatus: { loading: false, success: false, error: false },
        };
      },
      errorRegisterUserAuth: (state: UserAuthState, action) => {
        return {
          ...state,
          registerUserAuthStatus: {
            loading: false,
            success: false,
            error: action.payload || true,
          },
        };
      },
    //   loadingLogoutUserAuth: (state: UserAuthState) => {
    //     return {
    //       ...state,
    //       logoutUserAuthStatus: { loading: true, success: false, error: false },
    //     };
    //   },
    //   successLogoutUserAuth: (state: UserAuthState) => {
    //     return {
    //       ...state,
    //       ...initialState,
    //       logoutUserAuthStatus: { loading: false, success: true, error: false },
    //     };
    //   },
    //   errorLogoutUserAuth: (state: UserAuthState, action) => {
    //     return {
    //       ...state,
    //       logoutUserAuthStatus: {
    //         loading: false,
    //         success: false,
    //         error: action.payload || true,
    //       },
    //     };
    //   },
      resetUserAuthStatus: (state: UserAuthState) => {
        return {
          ...state,
          loginUserAuthStatus: initialState.loginUserAuthStatus,
          registerUserAuthStatus: initialState.registerUserAuthStatus,
        //   logoutUserAuthStatus: initialState.logoutUserAuthStatus,
        };
      },
      resetUserAuth: (state: UserAuthState) => {
        return {
          ...state,
          ...initialState,
        };
      },
    },
  });


export const userAuthReducer = userAuthSlice.reducer;
export const userAuthActions = userAuthSlice.actions;