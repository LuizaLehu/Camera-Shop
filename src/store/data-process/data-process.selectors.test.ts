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
import { NameSpace } from '../../const';


describe('Selectors', () => {
  const mockState = {
    [NameSpace.Data]: {
      products: [],
      isProductsDataLoading: false,
      fullProduct: null,
      isFullProductDataLoading: false,
      similarProducts: null,
      isSimilarProductsLoading: false,
      promoProducts: null,
      isPromoProductsLoading: false,
      baskets: [],
      hasError: false,
    },
  };

  it('should return the products', () => {
    const selectedProducts = getProducts(mockState);
    expect(selectedProducts).toEqual(mockState[NameSpace.Data].products);
  });

  it('should return the products status loading', () => {
    const isLoading = isProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.Data].isProductsDataLoading);
  });

  it('should return the full product', () => {
    const selectedProduct = getProduct(mockState);
    expect(selectedProduct).toBe(mockState[NameSpace.Data].fullProduct);
  });

  it('should return the product status loading', () => {
    const isLoading = isProductStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.Data].isFullProductDataLoading);
  });

  it('should return similar products', () => {
    const similarProducts = getSimilarProducts(mockState);
    expect(similarProducts).toBe(mockState[NameSpace.Data].similarProducts);
  });

  it('should return the similar products status loading', () => {
    const isLoading = isSimilarProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.Data].isSimilarProductsLoading);
  });

  it('should return promo products', () => {
    const promoProducts = getPromoProducts(mockState);
    expect(promoProducts).toBe(mockState[NameSpace.Data].promoProducts);
  });

  it('should return the promo products status loading', () => {
    const isLoading = isPromoProductsStatusLoading(mockState);
    expect(isLoading).toBe(mockState[NameSpace.Data].isPromoProductsLoading);
  });

  it('should return basket products', () => {
    const basketProducts = getBasketProducts(mockState);
    expect(basketProducts).toEqual(mockState[NameSpace.Data].baskets);
  });

  it('should return the error status', () => {
    const hasError = getErrorStatus(mockState);
    expect(hasError).toBe(mockState[NameSpace.Data].hasError);
  });
});
