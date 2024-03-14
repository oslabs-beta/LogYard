import React from 'react';
import Filter from './Filter';
import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../../__tests__/utilities';

it('correctly renders the Filter component', () => {
  renderWithProviders(
    <BrowserRouter>
      <Filter />
    </BrowserRouter>
  );
  expect(screen.getByTestId('filter')).toBeVisible();
});

it('correctly renders the ModalIcon component', () => {
  renderWithProviders(
    <BrowserRouter>
      <Filter />
    </BrowserRouter>
  );
  expect(screen.getByTestId('modal-icon')).toBeVisible();
});
