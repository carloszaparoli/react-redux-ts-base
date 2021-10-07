/**
 * Action types
 */
export enum ProductTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Products {
  id: number;
  name: string;
}

/**
 * Data types
 */
export interface ExampleState {
  readonly data: Products[];
  readonly loading: boolean;
  readonly error: boolean;
}
