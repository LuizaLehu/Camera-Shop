import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TFullProduct, TProduct } from '../types/products.js';

import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
//import { redirectToRoute } from './action.js';

export const fetchProductsAction = createAsyncThunk<TProduct[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchProducts',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TProduct[]>(APIRoute.Products);
    return data;
  },
);

export const fetchProductAction = createAsyncThunk<TFullProduct, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'PRODUCT/fetch',
  async (cameraId, { extra: api }) => {

    const { data } = await api
      .get<TFullProduct>(`${APIRoute.Products}/${cameraId}`);
    return data;
  }
);

export const fetchSimilarProductAction = createAsyncThunk<TProduct[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'SIMILARPRODUCT/fetch',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<TProduct[]>(`${APIRoute.Products}/${cameraId}/similar`);
    return data;
  }
);
