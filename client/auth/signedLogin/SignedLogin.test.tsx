import React from 'react';
import SignedLogin from './SignedLogin';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../__tests__/utilities';

it('renders the login input field correctly', () => {
  renderWithProviders(
    <BrowserRouter>
      <SignedLogin />
    </BrowserRouter>
  );
  const loginField = screen.getByPlaceholderText('Username');
  expect(loginField).toBeVisible();
});
