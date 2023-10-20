export enum AppRoute {
  Main = '/',
  Basket = '/basket',
  Product = '/camera/:id'
}


export enum APIRoute {
  Products = '/cameras',
  SimilarProducts = '/similar',
  PromoProducts = '/promo',
  NotFound = '/404',
  Reviews = '/reviews',
  Basket = '/basket',
}


export enum NameSpace {
  Data = 'DATA',
  Review = 'REVIEW',
  User = 'USER',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

export const SortProductsType = {
  Price: 'по цене',
  Popular: 'по популярности',
};

export const STARS_COUNT = 5;

export const MIN_CHARACTERS_COUNT = 2;
export const MAX_CHARACTERS_COUNT = 160;
