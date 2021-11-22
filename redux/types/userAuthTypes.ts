import { BaseRequestStatus } from './base';

export interface UserAuthState {
  id: string;
  name: string;
  lastname: string,
  email: string;
  reset_password_redirect_url: string | null;
  confirm_success_url: string | null;
  image: string | null;
  deleted_at: Date | null;
  account_type: string;
  loginUserAuthStatus: BaseRequestStatus;
  registerUserAuthStatus: BaseRequestStatus;
//   logoutUserAuthStatus: BaseRequestStatus;
}

export interface PostUserAuthFields {
  email: string;
  password: string;
}