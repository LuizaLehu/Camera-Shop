import { NameSpace } from '../../const';
import { TFullProduct, TProduct } from '../../types/products';
import { State } from '../../types/state';
import { TPromo } from '../../types/products';

export const getProducts = (state: State): TProduct[] => state[NameSpace.DATA].products;
export const isProductsStatusLoading = (state: State): boolean => state[NameSpace.DATA].isProductsDataLoading;

export const getProduct = (state: State): TFullProduct | null => state[NameSpace.DATA].fullProduct;
export const isProductStatusLoading = (state: State): boolean => state[NameSpace.DATA].isFullProductDataLoading;

export const getSimilarProducts = (state: State): TProduct[] | null => state[NameSpace.DATA].similarProducts;
export const isSimilarProductsStatusLoading = (state: State): boolean => state[NameSpace.DATA].isSimilarProductsLoading;

export const getPromoProducts = (state: State): TPromo[] | null => state[NameSpace.DATA].promoProducts;
export const isPromoProductsStatusLoading = (state: State): boolean => state[NameSpace.DATA].isSimilarProductsLoading;

export const getBasketProducts = (state: State): TProduct[] => state[NameSpace.DATA].baskets;


export const getErrorStatus = (state: State): boolean => state[NameSpace.DATA].hasError;
