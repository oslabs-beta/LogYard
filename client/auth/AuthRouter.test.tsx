import AuthRouter from './AuthRouter';
import { expect, it } from 'vitest';
import { getByTestId, render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<AuthRouter />);
});

it('includes a background image', () => {
  render(<AuthRouter />);
  expect(
    getByTestId(document.body, 'background-image') as HTMLDivElement
  ).toBeVisible();
});
