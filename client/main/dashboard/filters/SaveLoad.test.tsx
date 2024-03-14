import React from 'react';
import SaveLoad from './SaveLoad';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../../__tests__/utilities';

const setFilterText = vi.fn();
const filterText = '';

it('correctly renders the SaveLoad input bar', () => {
  renderWithProviders(
    <BrowserRouter>
      <SaveLoad setFilterText={setFilterText} filterText={filterText} />
    </BrowserRouter>
  );
  expect(screen.getByTestId('save-load-inputbar')).toBeInTheDocument();
});
