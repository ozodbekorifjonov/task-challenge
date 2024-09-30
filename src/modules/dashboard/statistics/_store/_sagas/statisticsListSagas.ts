import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { searchSeriessListAPI } from '../../_api';
import { ISearchSeriesRequest, ISearchSeriesResponse } from '../../_types';
import {
  searchSeriesByName,
  setSearchedSeriesListState,
} from '../dashboardStatisticsSlice.ts';

// Searching Seriess by title
function* searchSeriessList(action: PayloadAction<ISearchSeriesRequest>) {
  try {
    const response: ISearchSeriesResponse = yield call(
      searchSeriessListAPI,
      action.payload,
    );
    yield put(setSearchedSeriesListState(response));
  } catch (e) {
    yield put(setSearchedSeriesListState(null));
  }
}

export function* watchSearchSeriessListSaga() {
  yield takeLatest(searchSeriesByName.type, searchSeriessList);
}
