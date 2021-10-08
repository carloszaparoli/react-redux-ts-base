import { combineReducers } from 'redux';

import repositoriesReducer from './repositories/reducer';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
