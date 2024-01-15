// src/ValidEmail.test.tsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

it('Should Coin Crypto', () => {
  render(<Home />);
  expect(screen.getByText('Coin Cripto!')).toBeInTheDocument();
})
