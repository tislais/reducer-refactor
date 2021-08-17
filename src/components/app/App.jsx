import React, { useReducer } from 'react';
import { record, undo, redo } from '../state/actions';
import { initialState, reducer } from '../state/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button 
        data-testid="undo"
        onClick={() => dispatch(undo())}>undo</button>
      <button 
        data-testid="redo"
        onClick={() => dispatch(redo())}>redo</button>
      <input
        data-testid="input"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch(record(target.value))}
      />
      <div
        role="display"
        style={
          { backgroundColor: state.current, width: "10rem", height: "10rem" }
        }
      ></div>
    </>
  );
}

export default App;
