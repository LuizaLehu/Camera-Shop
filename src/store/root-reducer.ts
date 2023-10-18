import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
//import { userProcess } from './user-process/user-process.slice';
import { products } from './data-process/data-process.slice';
//import { reviews } from './comments-data/comments-data.slice';

export const rootReducer = combineReducers({
  //[NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: products.reducer,
  //[NameSpace.Review]: reviews.reducer,
});
