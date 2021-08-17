export const initialState = {
  current: '',
};

export function reducer(state, action) {
  switch(action.type) {
    case 'GET_CURRENT':
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
