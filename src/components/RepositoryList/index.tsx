import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as RepositoriesActions from '../../store/modules/repositories/actions';
import { ApplicationState } from '../../store/modules/rootReducer';

export function RepositoryList() {
  const dispatch = useDispatch();

  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  );

  useEffect(() => {
    dispatch(RepositoriesActions.loadRequest());
  }, []);

  return (
    <ul>
      {repositories.map((repository) => (
        <li>{repository.name}</li>
      ))}
    </ul>
  );
}
