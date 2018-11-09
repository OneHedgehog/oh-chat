import { Action } from '@ngrx/store';

export enum NavbarActionTypes {
  ChangeUserCurrentStatus = '[NavbarArrowAnimation] HideUserCurrentStatus',
}

export class ChangeUserCurrentStatus implements Action {
  readonly type = NavbarActionTypes.ChangeUserCurrentStatus;
}

export type NavbarActionsUnion = ChangeUserCurrentStatus
