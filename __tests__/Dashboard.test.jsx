import React from 'react';
import Dashboard from '../client/main/dashboard/Dashboard';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { renderWithProviders } from './utilities';

it('renders a Load button on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByText('Load')).toBeVisible();
});

it('renders a Filter Name field on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByPlaceholderText('Filter Name')).toBeVisible();
});

it('renders a Save button on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByText('Save')).toBeVisible();
});

it('renders a Delete button on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByRole('button', { name: 'Delete' })).toBeVisible();
});

it('renders a Filter Text field on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByPlaceholderText('Filter Text')).toBeVisible();
});

it('renders an Apply Filter button on the page correctly', () => {
  renderWithProviders(<Dashboard />);
  expect(screen.getByText('Apply Filter')).toBeVisible();
});
