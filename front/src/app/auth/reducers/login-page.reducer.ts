import {LoginPageActions} from "../actions";

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: true,
}

export function reducer(
  state = initialState,
  action: LoginPageActions.LoginPageActionsUnion
) {
  switch (action.type) {
    case LoginPageActions.LoginPageActionTypes.Login:
      return {
        ...state,
        error: null,
        pending: true
      };
    case LoginPageActions.LoginPageActionTypes.LoginSuccess:

      return {
        ...state,
        error: null,
        pending: false
      };
    case LoginPageActions.LoginPageActionTypes.LoginError:
      return {
        ...state,
        error: action.payload,
        pending: false,
      }
    default:
      return state;
  }
}
