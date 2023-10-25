import { STARS_COUNT } from '../const';

export const getRating = (rating: number) =>
  `${Math.round(rating) / STARS_COUNT * 100}%`;

function getPercent(number: number): string {
  return `${((Math.round(number) * 100) / STARS_COUNT) * 20}%`;
}

export {getPercent};

