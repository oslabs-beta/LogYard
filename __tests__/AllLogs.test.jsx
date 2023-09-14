import React from 'react';
import AllLogs from '../client/main/dashboard/logViews/AllLogs';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { renderWithProviders } from './utilities';

it('renders a table on the page correctly', () => {
  renderWithProviders(<AllLogs />);
  expect(screen.getByRole('table')).toBeVisible();
});
