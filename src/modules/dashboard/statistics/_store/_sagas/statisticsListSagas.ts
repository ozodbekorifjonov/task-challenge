import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { searchSeriessListAPI } from '../../_api';
import { ISearchSeriesRequest, ISearchSeriesResponse } from '../../_types';
import {
  searchSeriesByName,
  setSearchedSeriesListState,
} from '../dashboardStatisticsSlice.ts';
import { IErrorWithCode422 } from '../../../../../types/common.types.ts';

// Searching Seriess by title
function* searchSeriessList(action: PayloadAction<ISearchSeriesRequest>) {
  try {
    const response: ISearchSeriesResponse = yield call(
      searchSeriessListAPI,
      action.payload,
    );
    yield put(setSearchedSeriesListState(response));
  } catch (e) {
    const error = e as IErrorWithCode422;

    const errorMessage = error?.message || 'An unexpected error occurred.';

    toast.error(errorMessage, { toastId: 'searchSeriesError' });

    yield put(setSearchedSeriesListState(null));
  }
}

export function* watchSearchSeriessListSaga() {
  yield takeLatest(searchSeriesByName.type, searchSeriessList);
}
