import {
  type Action,
  configureStore,
  type ThunkAction,
} from '@reduxjs/toolkit';

import { ReduxLoggerMiddleware } from './middleware/redux-logger-middleware';
import { reducer } from './rootReducer';

const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...ReduxLoggerMiddleware),
});

export default reduxStore;

/* Types */
export type AppStore = typeof reduxStore;
export type ReduxState = ReturnType<AppStore['getState']>;
export type ReduxDispatch = AppStore['dispatch'];
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
