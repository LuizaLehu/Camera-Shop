import { useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router';
import { postReviewProductAction } from '../../store/api-action';
import { getReviewStatus } from '../../store/comments-data/comments-data.selectors';
import { INITIAL_RATING, MIN_RATING, Status } from '../../const';
import { useEffect } from 'react';
import { MIN_CHARACTERS_COUNT, MAX_CHARACTERS_COUNT, STARS_COUNT } from '../../const';
import ReviewRating from './review-raiting';
import ReviewAddSucces from '../review-add-succes.tsx/review-add-succes';

type TReviewAdd = {
  closeModal: () => void;
  onSubmitSuccess: () => void;
};

function ReviewAdd({ closeModal, onSubmitSuccess }: TReviewAdd) {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const initialFormData = {
    name: '',
    rating: INITIAL_RATING,
    review: '',
    disadvantage: '',
    advantage: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedRating, setSelectedRating] = useState(MIN_RATING);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const postReviewStatus = useAppSelector(getReviewStatus);

  useEffect(() => {
    // Add a class to the body to prevent scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // Add event listener for the "Esc" key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    const nameInput = document.getElementById('name');
    if (nameInput) {
      nameInput.focus();
    }
  }, []);


  function validateForm() {

    const isReviewValid =
      formData.review.length >= MIN_CHARACTERS_COUNT &&
      formData.review.length <= MAX_CHARACTERS_COUNT;

    const isRatingValid =
      +formData.rating > 0 && +formData.rating <= STARS_COUNT;

    const isNameValid =
      formData.name.length >= MIN_CHARACTERS_COUNT &&
      formData.name.length <= MAX_CHARACTERS_COUNT;

    const isAdvantageValid =
      formData.advantage.length >= MIN_CHARACTERS_COUNT &&
      formData.advantage.length <= MAX_CHARACTERS_COUNT;

    const isDisadvantageValid =
      formData.disadvantage.length >= MIN_CHARACTERS_COUNT &&
      formData.disadvantage.length <= MAX_CHARACTERS_COUNT;

    setIsFormValid(
      isReviewValid &&
      isRatingValid &&
      isNameValid &&
      isAdvantageValid &&
      isDisadvantageValid
    );

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    validateForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChangeRating = (value: number) => {

    setSelectedRating(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      rating: String(value),
    }));


  };


  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedRating(MIN_RATING);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    validateForm();

    if (isFormValid && id) {
      try {
        const form = evt.target as HTMLFormElement;
        const data = new FormData(form);
        const formObject = Object.fromEntries(data.entries());

        await Promise.resolve();

        await dispatch(
          postReviewProductAction({
            review: String(formObject['review']),
            rating: +formObject['rating'],
            cameraId: +id,
            userName: String(formObject['name']),
            advantage: String(formObject['advantage']),
            disadvantage: String(formObject['disadvantage']),
          })
        );

        setShowSuccessPopup(true);

        // Notify the parent component (ProductPage) about the successful submission
        onSubmitSuccess();

      } catch (error) {
        // Handle the error
        // eslint-disable-next-line no-console
        console.error('Error submitting review:', error);
      }
    }

    resetForm();
    closeModal();
  };

  return (
    <div>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={closeModal} />
          <div className="modal__content">
            {showSuccessPopup ? (
              <ReviewAddSucces onClose={() => setShowSuccessPopup(false)} />
            ) : (
              <>
                <p className="title title--h4">Оставить отзыв</p>
                <div className="form-review">
                  <form
                    method="post"
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={handleSubmit}
                  >
                    <div className="form-review__rate">
                      <fieldset className="rate form-review__item">
                        <legend className="rate__caption">
                          Рейтинг
                          <svg width={9} height={9} aria-hidden="true">
                            <use xlinkHref="#icon-snowflake" />
                          </svg>
                        </legend>
                        <ReviewRating selectedRating={selectedRating} handleChange={handleChangeRating} />
                        <p className="rate__message">Нужно оценить товар</p>
                      </fieldset>
                      <div className="custom-input form-review__item">
                        <label>
                          <span className="custom-input__label">
                            Ваше имя
                            <svg width={9} height={9} aria-hidden="true">
                              <use xlinkHref="#icon-snowflake" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите ваше имя"
                            required
                            onChange={(e) => {
                              handleChange(e);
                              validateForm();
                            }}
                          />
                        </label>
                        <p className="custom-input__error">Нужно указать имя</p>
                      </div>
                      <div className="custom-input form-review__item">
                        <label>
                          <span className="custom-input__label">
                            Достоинства
                            <svg width={9} height={9} aria-hidden="true">
                              <use xlinkHref="#icon-snowflake" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            id="advantage"
                            name="advantage"
                            placeholder="Основные преимущества товара"
                            onChange={(e) => {
                              handleChange(e);
                              validateForm();
                            }}
                            required
                          />
                        </label>
                        <p className="custom-input__error">Нужно указать достоинства</p>
                      </div>
                      <div className="custom-input form-review__item">
                        <label>
                          <span className="custom-input__label">
                            Недостатки
                            <svg width={9} height={9} aria-hidden="true">
                              <use xlinkHref="#icon-snowflake" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            id="disadvantage"
                            name="disadvantage"
                            placeholder="Главные недостатки товара"
                            required
                            onChange={(e) => {
                              handleChange(e);
                              validateForm();
                            }}
                          />
                        </label>
                        <p className="custom-input__error">Нужно указать недостатки</p>
                      </div>
                      <div className="custom-textarea form-review__item">
                        <label>
                          <span className="custom-textarea__label">
                            Комментарий
                            <svg width={9} height={9} aria-hidden="true">
                              <use xlinkHref="#icon-snowflake" />
                            </svg>
                          </span>
                          <textarea
                            name="review"
                            id="review"
                            placeholder="Поделитесь своим опытом покупки"
                            defaultValue={''}
                            onChange={(e) => {
                              handleChange(e);
                              validateForm();
                            }}
                          />
                        </label>
                        <div className="custom-textarea__error">
                          Нужно добавить комментарий
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn--purple form-review__btn"
                      type="submit"
                      disabled={!isFormValid || postReviewStatus === Status.Loading}
                    >{postReviewStatus === Status.Loading ? 'загрузка...' : 'Отправить отзыв'}
                    </button>
                  </form>
                </div>
              </>
            )}
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewAdd;
