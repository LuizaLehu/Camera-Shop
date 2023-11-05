import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { products } from './data-process/data-process.slice';
import { reviews } from './comments-data/comments-data.slice';

export const rootReducer = combineReducers({

  [NameSpace.DATA]: products.reducer,
  [NameSpace.REVIEW]: reviews.reducer,
});
