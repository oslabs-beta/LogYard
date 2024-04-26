import React from 'react';
import Login from './Login';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

it('renders the login input field correctly', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginField = screen.getByPlaceholderText('Server Password');
  expect(loginField).toBeVisible();
});

it('renders the login button correctly', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  waitFor(() => {
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeVisible();
  });
});
