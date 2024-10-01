import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { ISeriesDetailsRequest, ISeriesDetailsResponse } from '../../_types';
import { seriesDetailsAPI } from '../../_api';
import { IErrorWithCode422 } from '../../../../../../types/common.types.ts';
import {
  fetchingSeriesById,
  setFetchedSeriesDetailsState,
} from '../dashboardStatisticsSlice.ts';

// Fetching Series by id by title
function* fetchSeriesDetails(action: PayloadAction<ISeriesDetailsRequest>) {
  try {
    const response: ISeriesDetailsResponse = yield call(
      seriesDetailsAPI,
      action.payload,
    );
    yield put(setFetchedSeriesDetailsState(response));
  } catch (e) {
    const error = e as IErrorWithCode422;

    const errorMessage = error?.message || 'An unexpected error occurred.';

    toast.error(errorMessage, { toastId: 'fetchingSeriesError' });

    yield put(setFetchedSeriesDetailsState(null));
  }
}

export function* watchFetchSeriesByIdSaga() {
  yield takeLatest(fetchingSeriesById.type, fetchSeriesDetails);
}
