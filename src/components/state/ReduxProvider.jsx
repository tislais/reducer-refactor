import React, { createContext, useContext, useReducer } from 'react';

const ReduxContext = createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
};

export const ReduxProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ ReduxContext.Provider>
  );
};
