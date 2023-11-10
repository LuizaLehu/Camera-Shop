import ReviewItem from '../review-item/review-item';
import { TReview } from '../../types/review';

type TReviewsProps = {
  reviews: TReview[];
};

function ReviewsList({ reviews }: TReviewsProps): JSX.Element {
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime());

  return (
    <ul className="review-block__list">
      {sortedReviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
