export enum AppRoute {
  Main = '/',
  Basket = '/basket',
  Product = '/camera/:id'
}


export enum APIRoute {
  Products = '/cameras',
  SimilarProducts = '/similar',
  NotFound = '/404',
  Reviews = '/reviews',
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
