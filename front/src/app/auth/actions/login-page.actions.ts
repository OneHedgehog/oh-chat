import { Action } from '@ngrx/store';
import { User} from "../models/user";

export enum LoginPageActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Login Page] Login Success',
  LoginError = '[Login Page] Login Error'
}

export class Login implements Action {
  readonly type = LoginPageActionTypes.Login;

  constructor(public payload: { credentials: any}) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginPageActionTypes.LoginSuccess;

  constructor(public payload: { user: User}) {}
}

export class LoginError implements Action {
  readonly type = LoginPageActionTypes.LoginError;

  constructor(public payload: {error: any}) {}
}

export type LoginPageActionsUnion =
  | Login
  | LoginSuccess
  | LoginError
