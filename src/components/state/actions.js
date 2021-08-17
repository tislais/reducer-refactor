export const RECORD = 'RECORD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const record = (color) => ({
  type: RECORD,
  payload: color
});

export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});
