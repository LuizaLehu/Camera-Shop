export enum AppRoute {
  Main = '/',
  Basket = '/basket',
  Product = '/camera/:id'
}

export enum APIRoute {
  Products = '/cameras',
  SimilarProducts = '/cameras',
  PromoProducts = '/promo',
  NotFound = '/404',
  Reviews = '/cameras',
  Basket = '/basket',
  PostReview = '/reviews',
}

export enum SortingType {
  Price = 'Price',
  Popular = 'Popular',
}

export enum NameSpace {
  REVIEW = 'REVIEW',
  DATA = 'DATA'
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

export const TabName = {
  Characteristics: 'Характеристики',
  Description: 'Описание',
};

export const STARS_COUNT = 5;

export const MIN_CHARACTERS_COUNT = 2;
export const MAX_CHARACTERS_COUNT = 160;

export const RATING_TITLES = [
  'Отлично',
  'Хорошо',
  'Нормально',
  'Плохо',
  'Ужасно'
] as const;

