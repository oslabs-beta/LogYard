import React from 'react';
import Filter from './Filter';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../../__tests__/utilities';

beforeEach;

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
