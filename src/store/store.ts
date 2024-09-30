import {
  type Action,
  configureStore,
  type ThunkAction,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { ReduxLoggerMiddleware } from './middleware/redux-logger-middleware';
import { reducer } from './rootReducer';
import rootSaga from './_sagas';

const sagaMiddleware = createSagaMiddleware();

const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...ReduxLoggerMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

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
