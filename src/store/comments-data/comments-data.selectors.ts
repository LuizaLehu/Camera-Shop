import { NameSpace, Status } from '../../const';
import { TReview } from '../../types/review';
import { State } from '../../types/state';


export const getReviews = (state: State): TReview[] => state[NameSpace.REVIEW].reviews;
export const isReviewsStatusLoading = (state: State): boolean => state[NameSpace.REVIEW].isReviewsDataLoading;

export const getReviewStatus = (state: State): Status => state[NameSpace.REVIEW].status;
