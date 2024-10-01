import { all } from 'redux-saga/effects';

import { watchSearchSeriessListSaga } from '../../modules/dashboard/statistics/_store/_sagas';
import {
  watchFetchSeriesByIdSaga,
  watchFetchSeriesObservationsSaga,
} from '../../modules/dashboard/statistics/details/_store/_sagas';

function* rootSaga() {
  yield all([
    watchSearchSeriessListSaga(),
    watchFetchSeriesByIdSaga(),
    watchFetchSeriesObservationsSaga(),
  ]);
}

export default rootSaga;
