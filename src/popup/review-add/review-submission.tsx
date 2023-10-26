import ReviewAdd from './review-add';
import ReviewAddSucces from '../review-add-succes.tsx/review-add-succes';
import { useState } from 'react';

function ReviewSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const closeModal = () => {
    setSuccessModalVisible(false);
  };
  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessModalVisible(true);
    }, 2000);
  };
  return (
    <>
      <ReviewAdd onSubmit={handleSubmit} />
      <ReviewAddSucces isModalVisible={isSuccessModalVisible} onClose={closeModal} />
    </>
  );
}
export default ReviewSubmission;
