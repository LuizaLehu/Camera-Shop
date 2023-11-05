import { createSlice } from '@reduxjs/toolkit';
import { TReviews } from '../../types/state';
import { NameSpace, Status } from '../../const';
import { toast } from 'react-toastify';
import { fetchReviewsProductAction, postReviewProductAction } from '../api-action';


const initialState: TReviews = {
  reviews: [],
  isReviewsDataLoading: false,
  status: Status.Idle
};

export const reviews = createSlice({
  name: NameSpace.REVIEW,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsProductAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsProductAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchReviewsProductAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(postReviewProductAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postReviewProductAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.reviews.unshift(action.payload);
      })
      .addCase(postReviewProductAction.rejected, () => {
        toast.warn('Failed to post comment. Please, try again later');
      });
  }
});
