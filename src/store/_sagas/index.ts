import { all } from 'redux-saga/effects';

import { watchSearchSeriessListSaga } from '../../modules/dashboard/statistics/_store/_sagas';

function* rootSaga() {
  yield all([watchSearchSeriessListSaga()]);
}

export default rootSaga;
