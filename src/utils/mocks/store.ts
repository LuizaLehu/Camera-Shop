import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { makeFakeProducts } from './products';
import { makeFakeProduct } from './product';
import { makeFakeReviews } from './reviews';

export const makeFakeStore = (initialState: Partial<State>): State => ({

  [NameSpace.Data]: {
    products: makeFakeProducts(),
    fetchProductsStatus: FetchStatus.Success,
    product: makeFakeProduct(),
    fetchProductStatus: FetchStatus.Success,
    similarProducts: makeFakeProducts(),
    fetchSimilarProductsStatus: FetchStatus.Success,
  },
  [NameSpace.Review]: {
    reviews: makeFakeReviews(),
    fetchReviewsStatus: FetchStatus.Success,
    postReviewStatus: FetchStatus.Success,
  },
  ...initialState,
});
