import React from 'react';
import FilteredLogsTable from '../client/main/dashboard/logViews/FilteredLogsTable';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { renderWithProviders } from './utilities';

it('renders a table on the page correctly', () => {
  renderWithProviders(<FilteredLogsTable />);
  expect(screen.getByRole('table')).toBeVisible();
});

