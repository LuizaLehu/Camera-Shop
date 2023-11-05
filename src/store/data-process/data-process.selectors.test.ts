import {
  getProducts,
  isProductsStatusLoading,
  getProduct,
  isProductStatusLoading,
  getSimilarProducts,
  isSimilarProductsStatusLoading,
  getPromoProducts,
  isPromoProductsStatusLoading,
  getBasketProducts,
  getErrorStatus,
} from './data-process.selectors';
import { NameSpace, Status } from '../../const';
import { TProducts } from '../../types/state';
import { TReviews } from '../../types/state';
import { EmptyObject } from '@reduxjs/toolkit';


describe('Selectors', () => {
  const mockState: EmptyObject & {
    DATA: TProducts;
    REVIEW: TReviews;
  } = {
    DATA: {
      products: [],
      isProductsDataLoading: false,
      fullProduct: null,
      isFullProductDataLoading: false,
      similarProducts: null,
      isSimilarProductsLoading: false,
      promoProducts: [],
      isPromoProductsLoading: false,
      baskets: [],
      hasError: false,
      status: Status.Idle,
    },
    REVIEW: {
      reviews: [],
      isReviewsDataLoading: false,
      status: Status.Idle,
    },
  };

  it('should return the products', () => {
    const selectedProducts = getProducts(mockState);
    expect(selectedProducts).toEqual(mockState[NameSpace.DATA].products);
  });

  it('should return the products status loading', () => {
    const isLoading = isProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.DATA].isProductsDataLoading);
  });

  it('should return the full product', () => {
    const selectedProduct = getProduct(mockState);
    expect(selectedProduct).toBe(mockState[NameSpace.DATA].fullProduct);
  });

  it('should return the product status loading', () => {
    const isLoading = isProductStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.DATA].isFullProductDataLoading);
  });

  it('should return similar products', () => {
    const similarProducts = getSimilarProducts(mockState);
    expect(similarProducts).toBe(mockState[NameSpace.DATA].similarProducts);
  });

  it('should return the similar products status loading', () => {
    const isLoading = isSimilarProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.DATA].isSimilarProductsLoading);
  });

  it('should return promo products', () => {
    const promoProducts = getPromoProducts(mockState);
    expect(promoProducts).toBe(mockState[NameSpace.DATA].promoProducts);
  });

  it('should return the promo products status loading', () => {
    const isLoading = isPromoProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.DATA].isPromoProductsLoading);
  });

  it('should return basket products', () => {
    const basketProducts = getBasketProducts(mockState);
    expect(basketProducts).toEqual(mockState[NameSpace.DATA].baskets);
  });

  it('should return the error status', () => {
    const hasError = getErrorStatus(mockState);
    expect(hasError).toBe(mockState[NameSpace.DATA].hasError);
  });
});
