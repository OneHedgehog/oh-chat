import { Action } from '@ngrx/store';

export enum LoginPageActionTypes {
  Login = '[Login Page] Login',
}

export class Login implements Action {
  readonly type = LoginPageActionTypes.Login;

  constructor(public payload: { credentials: any}) {}
}

export type LoginPageActionsUnion = Login;
