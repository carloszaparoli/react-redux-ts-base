import { all } from 'redux-saga/effects';

import products from './repositories/sagas';

export default function* rootSaga() {
  yield all([products]);
}
