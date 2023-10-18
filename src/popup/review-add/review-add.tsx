import { TComment } from '../../types/comments';
import { getRating } from '../../utils/utils';

type ReviewItemProps = {
  comment: TComment;
};

function ReviewItem({ comment }: ReviewItemProps): JSX.Element {

  const commentDate = new Date(comment.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (


    
  );
}
export default ReviewItem;
