import {NavbarActionsUnion, NavbarActionTypes} from "../actions/navbar.actions";

export interface State {
  rotateState: string;
}

let initialState: State = {
  rotateState: 'default'
};

export function reducer(state: State= initialState, action: NavbarActionsUnion) {
  console.log('state from reducer');
  switch (action.type) {
    case NavbarActionTypes.ChangeUserCurrentStatus:
      state.rotateState = initialState.rotateState === 'default' ? 'rotated' : 'default';
      return  state;
    default :
      return state;
  }
}
