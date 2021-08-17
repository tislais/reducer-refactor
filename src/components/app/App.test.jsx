import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  // record a new color
  it('renders the color picker and records a new color', () => {
    render(<App />);

    const display = screen.getByRole('display');
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '#00FFFF' } });
    expect(display).toHaveStyle({ backgroundColor: '#00FFFF' });
  });

  // go forward a color


  // go backward a color

});
