import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { makeFakeProducts } from './products';
import { makeFakeProduct } from './product';
import { makeFakeReviews } from './reviews';
import { fetchProductsAction } from '../../store/api-action';
import { FetchStatus } from '../../types/fetch-status';
import { postReviewProductAction } from '../../store/api-action';
import { Status } from '../../const';


export const makeFakeStore = (initialState: Partial<State>): State => ({

  [NameSpace.Data]: {
    products: makeFakeProducts(),
    fetchProductsAction: Status.Success,
    product: makeFakeProduct(),
    fetchProductAction: Status.Success,
    similarProducts: makeFakeProducts(),
    fetchSimilarProductsStatus: Status.Success,
  },
  [NameSpace.Review]: {
    reviews: makeFakeReviews(),
    fetchReviewProductAction: Status.Success,
    postReviewProductAction: Status.Success,
  },
  ...initialState,
});
