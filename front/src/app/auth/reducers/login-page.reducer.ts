import {LoginPageActions} from "../actions";
import {LoginPageActionTypes} from "../actions/login-page.actions";

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
}

export function reducer(
  state = initialState,
  action: LoginPageActions.Login
) {
  switch (action.type) {
    case LoginPageActionTypes.Login:
      return {
        ...state,
        error: null,
        pending: false,
      }
  }
}
