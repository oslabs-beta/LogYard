import { Assertion } from 'vitest';

declare global {
  namespace vitest {
    interface Matchers<T> {
      toBeVisible(): T;
    }
  }
}
