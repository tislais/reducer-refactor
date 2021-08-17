import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { initialState, reducer } from './components/state/reducer';
import { ReduxProvider } from './components/state/ReduxProvider';

render(
  <ReduxProvider reducer={reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
