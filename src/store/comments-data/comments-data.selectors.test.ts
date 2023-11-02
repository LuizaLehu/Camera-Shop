import { NameSpace } from '../../const';
import { TReview } from '../../types/review';
import { State } from '../../types/state';
import {
  getReviews,
  isReviewsStatusLoading,
  getReviewStatus
} from './comments-data.selectors';


describe('Review Selectors', () => {
  const review1: TReview = { id: 1, text: 'Review 1' };
  const review2: TReview = { id: 2, text: 'Review 2' };
  const initialState: State = {
    [NameSpace.Review]: {
      reviews: [review1, review2],
      isReviewsDataLoading: false,
      status: 'success',
    },
  };

  it('should select reviews from the state', () => {
    const selectedReviews = getReviews(initialState);
    expect(selectedReviews).toEqual([review1, review2]);
  });

  it('should select the reviews status loading flag from the state', () => {
    const isLoading = isReviewsStatusLoading(initialState);
    expect(isLoading).toBe(false);
  });

  it('should select the review status from the state', () => {
    const status = getReviewStatus(initialState);
    expect(status).toBe('success');
  });
});
