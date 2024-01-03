/**
 * ************************************
 *
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description All action types
 * 
 * ************************************
 */

import { LogItem } from '../reducers/logsReducer';

export interface SetActiveLogActionPayload {
  log: LogItem
}

export interface DeleteLogActionPayload {
  logId: string
}

export interface FilterLogsActionPayload {

}

export interface SetFilteredLogsActionPayload {
  logs: LogItem[]
}

// Main Reducer
export const LOAD_LOGS = 'LOAD_LOGS' as const;
export const SET_ACTIVE_LOG = 'SET_ACTIVE_LOG' as const;
export const DELETE_LOG  = 'DELETE_LOG' as const;
export const DELETE_ALL_LOGS = 'DELETE_ALL_LOGS' as const;
export const FILTER_LOGS = 'FILTER_LOGS' as const;
export const SET_FILTERED_LOGS = 'SET_FILTERED_LOGS' as const;

//User Reducer
export const SET_USER_DATA = 'SET_USER_DATA' as const;

