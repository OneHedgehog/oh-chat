import {NavbarActionsUnion, NavbarActionTypes} from "../actions/navbar.actions";

export interface State {
  rotateState: string;
}

const initialState: State = {
  rotateState: 'default'
};

export function reducer(state: State = initialState, action: NavbarActionsUnion) {
  switch (action.type) {
    case NavbarActionTypes.ChangeUserCurrentStatus:
      state.rotateState = state.rotateState === 'default' ? 'rotated' : 'default';
      return  state;
    default :
      return state;
  }
}
