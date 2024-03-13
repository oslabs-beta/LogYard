import React from 'react';
import Signup from './Signup';
import { screen, fireEvent } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../__tests__/utilities';

it('renders the Signup page without crashing', () => {
  renderWithProviders(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  expect(screen.getByText('SIGN UP:')).toBeVisible();
});

it('allows user to input username, password, and server password', () => {
  renderWithProviders(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const usernameInput = screen.getByPlaceholderText(
    'Username'
  ) as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    'Password'
  ) as HTMLInputElement;
  const serverPasswordInput = screen.getByPlaceholderText(
    'Server Password'
  ) as HTMLInputElement;

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.change(serverPasswordInput, {
    target: { value: 'testserverpassword' },
  });

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
  expect(serverPasswordInput.value).toBe('testserverpassword');
});
