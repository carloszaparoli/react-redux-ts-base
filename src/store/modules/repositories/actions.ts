import {
  LoadRepositorySuccessPayload,
  LoadRepositoryRequest,
  LoadRepositorySuccess,
  RepositoriesTypes,
  LoadRepositoryFailure,
} from './types';

export function loadRequest(): LoadRepositoryRequest {
  return {
    type: RepositoriesTypes.LOAD_REQUEST,
  };
}

export function loadSuccess(
  payload: LoadRepositorySuccessPayload
): LoadRepositorySuccess {
  return {
    type: RepositoriesTypes.LOAD_SUCCESS,
    payload,
  };
}

export function loadFailure(): LoadRepositoryFailure {
  return {
    type: RepositoriesTypes.LOAD_FAILURE,
  };
}
