import { createAction } from '@reduxjs/toolkit';

import {
  TEST_ACTION,
  TEST_ACTION2,
} from '../constants/actionTypes';

export const testAction = createAction(TEST_ACTION); // payload: null
export const testAction2 = createAction(TEST_ACTION2); // payload: null
