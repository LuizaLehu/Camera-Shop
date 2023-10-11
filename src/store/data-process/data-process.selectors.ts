import { NameSpace } from '../../const';
import { TFullProduct, TProduct } from '../../types/products';
import { State } from '../../types/state';

export const getProducts = (state: State): TProduct[] => state[NameSpace.Data].products;
export const isProductsStatusLoading = (state: State): boolean => state[NameSpace.Data].isProductsDataLoading;

export const getProduct = (state: State): TFullProduct | null => state[NameSpace.Data].fullProduct;
export const isProductStatusLoading = (state: State): boolean => state[NameSpace.Data].isFullProductDataLoading;

export const getSimilarProducts = (state: State): TProduct[] | null => state[NameSpace.Data].similarProducts;
export const isSimilarProductsStatusLoading = (state: State): boolean => state[NameSpace.Data].isSimilarProductsLoading;


export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
