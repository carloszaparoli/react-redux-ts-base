import { all } from 'redux-saga/effects';

import example from './products/sagas';

export default function* rootSaga() {
  yield all([example]);
}
