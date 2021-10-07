import { Reducer } from 'redux';
import * as types from './types';

type ExampleState = {
  data: [];
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  botaoClicado: false,
};

export default function (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
