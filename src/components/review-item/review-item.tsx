/*import { TReview } from '../../types/review';
//import { getRating } from '../../utils/utils';

type ReviewItemProps = {
  review: TReview;
};

export const STARS_COUNT = 5;

export const getRating = (rating: number) =>
  `${Math.round(rating) / STARS_COUNT * 100}%`;

function getPercent(number: number): string {
  return `${((Math.round(number) * 100) / STARS_COUNT) * 20}%`;
}


function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const reviewDate = new Date(review.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  return (
    <li className="review-card" key={review.id}>
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={review.date.split('T')[0]}>
          {reviewDate}
        </time>
      </div>
      <div className="rate review-card__rate">
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <p className="visually-hidden">Оценка: {review.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">
            {review.advantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">
            {review.disadvantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {review.review}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewItem;
*/

import { TReview } from '../../types/review';
import { STARS_COUNT } from '../../const';

type ReviewItemProps = {
  review: TReview;
};


//export const getRating = (rating: number) => `${Math.round(rating) / STARS_COUNT * 100}%`;

//function getPercent(number: number): string {
//  return `${((Math.round(number) * 100) / STARS_COUNT) * 20}%`;
//}

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const emptyStars = STARS_COUNT - fullStars;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<svg key={i} className="star" width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-full-star" /></svg>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<svg key={i + fullStars} className="empty-star" width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-empty-star" /></svg>);
  }

  return stars;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const reviewDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  return (
    <li className="review-card" key={review.id}>
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={date.split('T')[0]}>
          {reviewDate}
        </time>
      </div>
      <div className="rate review-card__rate">
        {renderStars(review.rating)}
        <p className="visually-hidden">Оценка: {review.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewItem;
