import {LoginPageActions} from "../actions";

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
    case LoginPageActions.Login:
      console.log('jj');
      return {
        ...state,
        error: null,
        pending: false,
      }
  }
}
