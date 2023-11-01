import { datatype, date, name, lorem } from 'faker';
import { TReview } from '../../types/review';

export const makeFakeReviews = (): TReview[] => {
  return new Array(3).fill(null).map(() => ({
    id: datatype.uuid(),
    createAt: date.past().getTime(),
    userName: name.findName(),
    advantage: lorem.sentence(),
    disadvantage: lorem.sentence(),
    review: lorem.paragraph(),
    rating: datatype.number({ min: 1, max: 5 }),
  }));
};
