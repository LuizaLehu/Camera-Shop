import { NameSpace, Status } from '../../const';
import { State } from '../../types/state';
import { getReviews, getReviewStatus, isReviewsStatusLoading } from './comments-data.selectors';

describe('Review Selectors', () => {

  const sampleState: State = {
    [NameSpace.REVIEW]: {
      reviews: [
        {
          id: 1,
          userName: 'John Doe',
          review: 'This is a sample review',
          rating: 5,
          disadvantage: 'This is a sample disadvantage',
          advantage: 'This is a sample advantage',
          createAt: '2022-01-01',
        },
      ],
      isReviewsDataLoading: true,
      status: Status.Loading,
    },
    [NameSpace.DATA]: {
      products: [],
      isProductsDataLoading: true,
      fullProduct: null,
      isFullProductDataLoading: true,
      similarProducts: [],
      isSimilarProductsLoading: false,
      promoProducts: [],
      isPromoProductsLoading: false,
      baskets: [],
      hasError: false,
      status: Status.Idle,
    },
  };

  it('should return reviews from the state', () => {
    const selectedReviews = getReviews(sampleState);

    expect(selectedReviews).toEqual(sampleState[NameSpace.REVIEW].reviews);
  });

  it('should return the review status loading state', () => {
    const isLoading = isReviewsStatusLoading(sampleState);
    expect(isLoading).toEqual(sampleState[NameSpace.REVIEW].isReviewsDataLoading);
  });

  it('should return the review status', () => {
    const reviewStatus = getReviewStatus(sampleState);
    expect(reviewStatus).toEqual(sampleState[NameSpace.REVIEW].status);
  });
});
