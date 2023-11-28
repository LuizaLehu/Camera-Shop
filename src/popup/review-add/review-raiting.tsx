import React from 'react';
import { RATING_TITLES } from '../../const';

type TReviewRating = {
  selectedRating: number;
  handleChange: (value: number) => void;
};

const ReviewRating: React.FC<TReviewRating> = ({ selectedRating, handleChange }) => {
  const STARS_COUNT = 5;

  const renderStars = () => Array.from({ length: STARS_COUNT }, (_, i) => {
    const ratingValue = STARS_COUNT - i;
    return (
      <React.Fragment key={ratingValue}>
        <input
          className="visually-hidden"
          id={`star-${ratingValue}`}
          name="rating"
          type="radio"
          value={ratingValue}
          checked={selectedRating === ratingValue}
          onChange={() => handleChange(ratingValue)}
        />
        <label className="rate__label" htmlFor={`star-${ratingValue}`} title={RATING_TITLES[i]} />
      </React.Fragment>
    );
  });

  return (
    <div className="rate__bar">
      <div className="rate__group">{renderStars()}</div>
      <div className="rate__progress">
        <span className="rate__stars">{selectedRating}</span> <span>/</span>{' '}
        <span className="rate__all-stars">{STARS_COUNT}</span>
      </div>
    </div>
  );
};

export default ReviewRating;
