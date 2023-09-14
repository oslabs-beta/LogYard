import React from 'react';
import Login from '../client/auth/login/Login';
import { render, screen } from '@testing-library/react';
import { expect, beforeEach, it, } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});

it('renders every element on the page as expected', () => {

  it('renders the login input field correctly', () => {
    const loginField = screen.getByPlaceholderText('OSP7');
    expect(loginField).toBeVisible();
  });

  it('renders the login button correctly', () => {
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });
});
