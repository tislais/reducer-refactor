export const RECORD = 'RECORD';
export const UNDO = 'UNDO';

export const record = (color) => ({
  type: RECORD,
  payload: color
});

export const undo = () => ({
  type: UNDO
});
