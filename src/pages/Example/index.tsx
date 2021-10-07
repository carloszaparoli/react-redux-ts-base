import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/products/actions';

import { Container } from '../../styles/GlobalStyle';

export default function Example() {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(actions.clicaBotaoRequest());
  };

  return (
    <Container>
      <h1>Example Page</h1>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
