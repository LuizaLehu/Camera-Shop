import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { products } from './data-process/data-process.slice';
import { reviews } from './comments-data/comments-data.slice';

export const rootReducer = combineReducers({

  [NameSpace.Data]: products.reducer,
  [NameSpace.Review]: reviews.reducer,
});
