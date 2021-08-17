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
  it('displays the previous color when the undo button is clicked', () => {
    render(<App />);

    const display = screen.getByRole('display');
    const button = screen.getByTestId('undo');
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: '#00FFFF' } });
    fireEvent.click(button);

    expect(display).toHaveStyle({ backgroundColor: '#b4d455' });
  });

  // go backward a color
  it('displays the next color when the redo button is clicked', () => {
    render(<App />);

    const display = screen.getByRole('display');
    const undoButton = screen.getByTestId('undo');
    const redoButton = screen.getByTestId('redo');
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: '#00FFFF' } });
    fireEvent.click(undoButton);
    fireEvent.click(redoButton);

    expect(display).toHaveStyle({ backgroundColor: '#00FFFF' });
  });


});
