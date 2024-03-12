import SignedLogin from '../client/auth/signedLogin/SignedLogin';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from './utilities';

it('renders the login input field correctly', () => {
  renderWithProviders(
    <BrowserRouter>
      <SignedLogin />
    </BrowserRouter>
  );
  const loginField = screen.getByPlaceholderText('Username');
  expect(loginField).toBeVisible();
});
