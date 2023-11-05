import { store } from '../store/index';
import { TFullProduct, TProduct, TPromo } from './products';
import { TReview } from './review';
import { Status } from '../const';

export type TProducts = {
  products: TProduct[];
  fullProduct: TFullProduct | null;
  similarProducts: TProduct[] | null;
  baskets: TProduct[];
  promoProducts: TPromo[];
  isProductsDataLoading: boolean;
  isFullProductDataLoading: boolean;
  isSimilarProductsLoading: boolean;
  isPromoProductsLoading: boolean;
  hasError: boolean;
  status: Status;
}

export type TReviews = {
  reviews: TReview[];
  isReviewsDataLoading: boolean;
  status: Status;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
