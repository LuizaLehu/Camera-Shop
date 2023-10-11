import { store } from '../store/index';
import { TFullProduct, TProduct } from './products';


export type TProducts = {
  offers: TProduct[];
  fullProduct: TFullProduct | null;
  similarProducts: TProduct[] | null;
  isProductsDataLoading: boolean;
  isFullProductDataLoading: boolean;
  isSimilarProductsLoading: boolean;
  hasError: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
