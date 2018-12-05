import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { LoginPageActions} from "../actions";

import * as fromLoginPage from './login-page.reducer'

export const reducers: ActionReducerMap<any, LoginPageActions.LoginPageActionsUnion> = {
  credetials: fromLoginPage.reducer
};
