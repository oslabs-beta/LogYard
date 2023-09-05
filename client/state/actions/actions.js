import { createAction } from '@reduxjs/toolkit';

import {
  LOAD_LOGS,
  SET_ACTIVE_LOG
} from '../constants/actionTypes';

export const loadLogs = createAction(LOAD_LOGS); // payload: Array containing all log data
export const setActiveLog = createAction(SET_ACTIVE_LOG);