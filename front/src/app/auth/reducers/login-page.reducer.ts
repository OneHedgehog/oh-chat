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
  action: LoginPageActions.Login
) {
  switch (action.type) {
    case LoginPageActions.LoginPageActionTypes.Login:
      console.log('sdf');
      return {
        ...state,
        error: null,
        pending: false,
      }
    default:
      return state;
  }
}
