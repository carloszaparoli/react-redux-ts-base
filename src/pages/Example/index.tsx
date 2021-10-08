import React from 'react';
import { useDispatch } from 'react-redux';
import { RepositoryList } from '../../components/RepositoryList';

import { Container } from '../../styles/GlobalStyle';

export default function Example() {
  return (
    <Container>
      <h1>Example Page</h1>

      <RepositoryList />
    </Container>
  );
}
