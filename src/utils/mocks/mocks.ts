/*import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../../services/api';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  DATA: { isProductsDataLoading: false, products: [], hasError: false },
  REVIEW: { isReviewsDataLoading: false, reviews: []},
  ...initialState ?? {},
});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
*/
