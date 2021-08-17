
export const initialState = {
  current: '#b4d455',
};

export function reducer(state, action) {
  switch(action.type) {
    case 'RECORD':
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
