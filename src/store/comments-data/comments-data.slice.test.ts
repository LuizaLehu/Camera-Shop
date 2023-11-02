import { createSlice, createAction, configureStore } from '@reduxjs/toolkit';
import { Status } from '../../const';
import { toast } from 'react-toastify';
import {
  fetchReviewsProductAction,
  postReviewProductAction,
} from '../api-action';
import { reviews as reviewsReducer } from './comments-data.slice';


describe('Reviews Slice', () => {
  const initialState = {
    reviews: [],
    isReviewsDataLoading: false,
    status: Status.Idle,
  };

  it('should handle fetchReviewsProductAction.pending', () => {
    const state = reviewsReducer(initialState, fetchReviewsProductAction.pending());
    expect(state.isReviewsDataLoading).toBe(true);
  });

  it('should handle fetchReviewsProductAction.fulfilled', () => {
    const mockReviews = [{ id: 1, text: 'Review 1' }];
    const state = reviewsReducer(
      initialState,
      fetchReviewsProductAction.fulfilled(mockReviews)
    );
    expect(state.reviews).toEqual(mockReviews);
    expect(state.isReviewsDataLoading).toBe(false);
  });

  it('should handle fetchReviewsProductAction.rejected', () => {
    const state = reviewsReducer(initialState, fetchReviewsProductAction.rejected());
    expect(state.isReviewsDataLoading).toBe(false);
  });

  it('should handle postReviewProductAction.pending', () => {
    const state = reviewsReducer(initialState, postReviewProductAction.pending());
    expect(state.status).toBe(Status.Loading);
  });

  it('should handle postReviewProductAction.fulfilled', () => {
    const mockReview = { id: 2, text: 'Review 2' };
    const state = reviewsReducer(
      initialState,
      postReviewProductAction.fulfilled(mockReview)
    );
    expect(state.status).toBe(Status.Success);
    expect(state.reviews[0]).toEqual(mockReview);
  });

  it('should handle postReviewProductAction.rejected', () => {
    const toastWarnMock = jest.fn();
    toast.warn = toastWarnMock;

    reviewsReducer(initialState, postReviewProductAction.rejected());

    expect(toastWarnMock).toHaveBeenCalledWith('Failed to post comment. Please, try again later');
  });
});
