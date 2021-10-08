/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Repository {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface LoadRepositorySuccessPayload {
  data: Repository[];
}

export interface LoadRepositoryFailurePayload {
  error: boolean;
}

export interface LoadRepositoryRequest {
  type: typeof RepositoriesTypes.LOAD_REQUEST;
}

export interface LoadRepositorySuccess {
  type: typeof RepositoriesTypes.LOAD_SUCCESS;
  payload: LoadRepositorySuccessPayload;
}

export interface LoadRepositoryFailure {
  type: typeof RepositoriesTypes.LOAD_FAILURE;
  // payload: LoadRepositoryFailurePayload;
}

export type RepositoriesActions =
  | LoadRepositoryRequest
  | LoadRepositorySuccess
  | LoadRepositoryFailure;
