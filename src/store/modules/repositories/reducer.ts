import {
  RepositoriesActions,
  RepositoriesState,
  RepositoriesTypes,
} from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: 'Testando' }],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action: RepositoriesActions) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST: {
      return { ...state, loading: true };
    }

    case RepositoriesTypes.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    }

    case RepositoriesTypes.LOAD_FAILURE: {
      return { ...state, loading: false, error: true, data: [] };
    }

    default: {
      return state;
    }
  }
};
