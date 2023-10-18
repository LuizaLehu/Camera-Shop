import ReviewItem from '../review-item/review-item';
import { TReview } from '../../types/review';

type TReviewsProps = {
  reviews: TReview[];
};

function ReviewsList({ reviews }: TReviewsProps): JSX.Element {
  return (
    <ul className="review-block__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
