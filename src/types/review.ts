export type TReview = {
  id: number;
  createAt: number;
   /*  data   */
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}


export type TNewReview = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  raiting: number;
}
