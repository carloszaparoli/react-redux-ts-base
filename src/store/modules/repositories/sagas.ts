import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { loadFailure, loadSuccess } from './actions';
import { RepositoriesTypes, Repository } from './types';
import { api } from '../../../services/api';

const getRepositories = () =>
  api.get<Repository[]>('/users/carloszaparoli/repos');

function* loadRepository() {
  try {
    const response: AxiosResponse<Repository[]> = yield call(getRepositories);

    yield put(
      loadSuccess({
        data: response.data,
      })
    );
  } catch {
    toast.error('Deu erro.');
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepository),
]);
