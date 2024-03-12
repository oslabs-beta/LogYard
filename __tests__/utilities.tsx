import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import logsReducer from '../client/state/reducers/logsReducer';
import userReducer from '../client/state/reducers/userReducer';

interface RenderOptions {
  preloadedState?: {
    logsReducer?: {
      logs: {
        level: string;
        message: string;
        meta: any;
        Time: string;
        _id: string;
      }[];
      filteredLogs:
        | {
            level: string;
            message: string;
            meta: any;
            Time: string;
            _id: string;
          }[]
        | {
            [x: string]: {
              level: string;
              message: string;
              meta: any;
              Time: string;
              _id: string;
            }[];
          };
      logFilters: any[];
      activeLog: {
        level: string;
        message: string;
        meta: any;
        Time: string;
        _id: string;
      };
    };
    userReducer?: {
      userData: any;
    };
  };
  store?: EnhancedStore;
}

interface RenderWithProvidersResult extends RenderResult {
  store: EnhancedStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      logsReducer: {
        logs: [],
        filteredLogs: [],
        logFilters: [],
        activeLog: {
          level: '',
          message: '',
          meta: undefined,
          Time: '',
          _id: '',
        },
      },
      userReducer: {
        userData: {},
      },
    },

    store = configureStore({
      reducer: { logsReducer, userReducer },
      preloadedState,
    }),
    ...renderOptions
  }: RenderOptions = {}
): RenderWithProvidersResult {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  const rendered: RenderResult = render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });

  return { ...rendered, store };
}
