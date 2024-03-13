import React from 'react';
import FilteredLogsTable from './FilteredLogsTable';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { renderWithProviders } from '../../../../__tests__/utilities';

it('renders a table on the page correctly', () => {
  renderWithProviders(<FilteredLogsTable />);
  expect(screen.getByRole<HTMLTableElement>('table')).toBeVisible();
});
