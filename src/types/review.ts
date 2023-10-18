export type TReview = {
  id: number;
  createAt: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}


export type TNewReview = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  raiting: number;
}
