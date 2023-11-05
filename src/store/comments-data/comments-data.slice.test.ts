
import { reviews } from './comments-data.slice'; // replace 'yourSliceFileName' with the actual file name
import { Status } from '../../const';
import { fetchReviewsProductAction, postReviewProductAction } from '../api-action';


describe('Reviews slice', () => {
  it('should set isReviewsDataLoading to true on fetchReviewsProductAction.pending', () => {
    const initialState = {
      reviews: [],
      isReviewsDataLoading: false,
      status: Status.Idle,
    };
    const nextState = reviews.reducer(initialState, fetchReviewsProductAction.pending);
    expect(nextState.isReviewsDataLoading).toEqual(true);
  });

  it('should update reviews and isReviewsDataLoading to false on fetchReviewsProductAction.fulfilled', () => {
    const mockPayload = [
      {
        id: 1,
        author: 'User1',
        content: 'This is a review.',
      },
      {
        id: 2,
        author: 'User2',
        content: 'Another review.',
      },
    ];

    const initialState = {
      reviews: [],
      isReviewsDataLoading: true,
      status: Status.Idle,
    };

    const nextState = reviews.reducer(initialState, fetchReviewsProductAction.fulfilled);
    expect(nextState.isReviewsDataLoading).toEqual(false);
    expect(nextState.reviews).toEqual(mockPayload);
  });

  it('should set isReviewsDataLoading to false on fetchReviewsProductAction.rejected', () => {
    const initialState = {
      reviews: [],
      isReviewsDataLoading: true,
      status: Status.Idle,
    };

    const nextState = reviews.reducer(initialState, fetchReviewsProductAction.rejected);
    expect(nextState.isReviewsDataLoading).toEqual(false);
  });

  it('should set status to Loading on postReviewProductAction.pending', () => {
    const initialState = {
      reviews: [],
      isReviewsDataLoading: false,
      status: Status.Idle,
    };

    const nextState = reviews.reducer(initialState, postReviewProductAction.pending);
    expect(nextState.status).toEqual(Status.Loading);
  });

  it('should update status to Success and add a new review on postReviewProductAction.fulfilled', () => {
    const mockPayload = {
      id: 3,
      author: 'User3',
      content: 'A new review.',
    };

    const initialState = {
      reviews: [],
      isReviewsDataLoading: false,
      status: Status.Loading,
    };

    const nextState = reviews.reducer(initialState, postReviewProductAction.fulfilled);
    expect(nextState.status).toEqual(Status.Success);
    expect(nextState.reviews).toEqual([mockPayload]);
  });
});
