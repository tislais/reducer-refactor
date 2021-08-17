import { UNDO, RECORD, REDO } from './actions';

export const initialState = {
  before: [],
  after: [],
  current: '#b4d455',
};

export function reducer(state, action) {
  switch(action.type) {
    case RECORD:
      return { 
        ...state, 
        before: [...state.before, state.current],
        current: action.payload
      };
    case UNDO:
      return {
        ...state,
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1),
        after: [state.current, ...state.after]
      };
    case REDO:
      return {
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: [state.before, ...state.after]
      };
    default:
      return state;
  }
}

