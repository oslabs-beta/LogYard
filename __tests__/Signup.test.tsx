import Signup from "../client/auth/signup/Signup";
import { screen } from '@testing-library/react';
import { expect, it, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from './utilities';

beforeEach(() => {
  renderWithProviders(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
})

it('renders the login input field correctly', () => {
  const loginField = screen.getByPlaceholderText('Username');
  expect(loginField).toBeVisible();
});

it('renders the password input field correctly', () => {
  const passwordField = screen.getByPlaceholderText('Password');
  expect(passwordField).toBeVisible();
});

it('renders the server password input field correctly', () => {
  const passwordField = screen.getByPlaceholderText('Server Password');
  expect(passwordField).toBeVisible();
});
