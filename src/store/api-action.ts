import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TFullProduct, TProduct, TPromo } from '../types/products.js';

import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { TNewReview, TReview } from '../types/review.js';
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

export const fetchPromoProductsAction = createAsyncThunk<TPromo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'PROMO/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPromo[]>(APIRoute.PromoProducts);
    return data;
  },
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

export const fetchReviewsProductAction = createAsyncThunk<TReview[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'REVIEWS/fetch',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${APIRoute.Reviews}/${cameraId}`);
    return data;
  }
);


export const postReviewProductAction = createAsyncThunk<TReview, TNewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'REVIEWS/post',
  async ({ review, cameraId }, { extra: api }) => {
    const { data } = await api.post<TReview>(`${APIRoute.Reviews}/${cameraId}`, { review });
    return data;
  }
);

export const fetchBasketAction = createAsyncThunk<TProduct[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'BASKET/fetch',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TProduct[]>(APIRoute.Basket);
      return data;
    } catch {
      throw new Error();
    }
  }
);

export const addToBasketAction = createAsyncThunk<
  void,
  {
    status: number;
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/addToBasket',
  async ({ status, id }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Basket}/${id}/${status}`);
    dispatch(fetchBasketAction());
    dispatch(fetchProductsAction());
    dispatch(fetchProductAction(id));
  }
);
