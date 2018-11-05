import { Action } from '@ngrx/store';

export enum NavbarActionTypes {
  ShowUserCurrentStatus = '[NavbarArrowAnimation] ShowUserCurrentStatus',
  HideUserCurrentStatus = '[NavbarArrowAnimation] HideUserCurrentStatus',
}


export class ShowUserCurrentStatus implements Action {
  readonly type = NavbarActionTypes.ShowUserCurrentStatus;

  constructor(public payload: any) {}
}

export class HideUserCurrentStatus implements Action {
  readonly type = NavbarActionTypes.HideUserCurrentStatus;

  constructor(public payload: any) {}
}

export type NavbarActionsUnion = ShowUserCurrentStatus | HideUserCurrentStatus
