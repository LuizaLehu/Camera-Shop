export enum AppRoute {
  Main = '/',
  Basket = '/basket',
  Product = '/product/:id'
}

export enum APIRoute {
  Products = '/offers',
  SimilarProducts = '/similar',
  NotFound = '/404',
  Reviews = '/reviews',
}

export const STARS_COUNT = 5;

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
