import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

});

test('button trns blue when clicked', () => {

})

