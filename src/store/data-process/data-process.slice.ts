import { NameSpace } from '../../const';
import { TProducts } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchSimilarProductAction,
  fetchProductsAction,
  fetchProductAction,
  fetchBasketAction,
  fetchPromoProductsAction,
} from '../api-action';

import { toast } from 'react-toastify';

const initialState: TProducts = {
  products: [],
  fullProduct: null,
  similarProducts: [],
  promoProducts: [],
  baskets: [],
  isProductsDataLoading: false,
  isFullProductDataLoading: false,
  isSimilarProductsLoading: false,
  isPromoProductsLoading: false,
  hasError: false,
};

export const products = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropProduct: (state) => {
      state.fullProduct = null;
      state.similarProducts = [];
    },
  },

  extraReducers(builder) {

    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isProductsDataLoading = true;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsDataLoading = false;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.isProductsDataLoading = false;
        toast.warn('Failed to fetch productss. Please, try again later');
      })
      .addCase(fetchProductAction.pending, (state) => {
        state.isFullProductDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchProductAction.fulfilled, (state, action) => {
        state.fullProduct = action.payload;
        state.isFullProductDataLoading = false;
      })
      .addCase(fetchProductAction.rejected, (state) => {
        state.isFullProductDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSimilarProductAction.pending, (state) => {
        state.isSimilarProductsLoading = true;
      })
      .addCase(fetchSimilarProductAction.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
        state.isSimilarProductsLoading = false;
      })
      .addCase(fetchSimilarProductAction.rejected, (state) => {
        state.isSimilarProductsLoading = false;
        toast.warn('Failed to fetch similar products. Please, try again later');
      })
      .addCase(fetchPromoProductsAction.pending, (state) => {
        state.isPromoProductsLoading = true;
      })
      .addCase(fetchPromoProductsAction.fulfilled, (state, action) => {
        state.promoProducts = action.payload;
        state.isPromoProductsLoading = false;
      })
      .addCase(fetchPromoProductsAction.rejected, (state) => {
        state.isPromoProductsLoading = false;
        toast.warn('Failed to fetch similar products. Please, try again later');
      })
      .addCase(fetchBasketAction.fulfilled, (state, action) => {
        state.baskets = action.payload;
      });
  }
});

export const { dropProduct } = products.actions;
