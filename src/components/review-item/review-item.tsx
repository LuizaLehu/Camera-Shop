import { TReview } from '../../types/review';
import { STARS_COUNT } from '../../const';

type ReviewItemProps = {
  review: TReview;
};


function renderStars(rating: number) {
  const maxRating = STARS_COUNT;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    let starType;

    if (i < fullStars) {
      starType = 'full-star';
    } else if (hasHalfStar && i === fullStars) {
      starType = 'half-star';
    } else {
      starType = 'star';
    }

    stars.push(
      <svg key={i} width={17} height={16} aria-hidden="true">
        <use xlinkHref={`#icon-${starType}`} />
      </svg>
    );
  }

  return stars;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const reviewDate = new Date(review.createAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  return (
    <li className="review-card" key={review.id}>
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={reviewDate}>
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
