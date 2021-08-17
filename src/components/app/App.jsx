import React, { useReducer } from 'react';
import { record, undo, redo } from '../state/actions';
import { initialState, reducer } from '../state/reducer';

// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter((after) => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore((before) => before.slice(0, -1));
//   };

//   const redo = () => {
//     setBefore((before) => [...before, current]);
//     setCurrent(after[0]);
//     setAfter((after) => after.slice(1));
//   };

//   const record = (val) => {
//     setBefore((before) => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };

function App() {
  // const { current, undo, redo, record } = useRecord("#FF0000");
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
