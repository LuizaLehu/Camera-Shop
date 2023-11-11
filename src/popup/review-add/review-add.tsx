import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router';
import { postReviewProductAction } from '../../store/api-action';
import { getReviewStatus } from '../../store/comments-data/comments-data.selectors';
import { Status } from '../../const';

import { MAX_CHARACTERS_COUNT, MIN_CHARACTERS_COUNT } from '../../const';

type TReviewAdd = {
  closeModal: () => void;
};


function ReviewAdd({ closeModal }: TReviewAdd) {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: '0',
    review: '',
    disadvantage: '',
    advantage: '',
    name: ''
  });

  const postReviewStatus = useAppSelector(getReviewStatus);


  const handleFormChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const buttonDisabled =
    formData.review.length < MIN_CHARACTERS_COUNT
    || formData.review.length > MAX_CHARACTERS_COUNT
    || !+formData.rating
    || !formData.name
    || !formData.advantage
    || !formData.disadvantage;

  const resetData = (evt: FormEvent<HTMLFormElement>) => {
    setFormData({
      ...formData,
      review: '',
      rating: '0',
      disadvantage: '',
      advantage: '',
      name: '',
    });
    evt.currentTarget.reset();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(

        postReviewProductAction({
          review: formData.review,
          rating: +formData.rating,
          cameraId: +id,
          userName: formData.name,
          advantage: formData.advantage,
          disadvantage: formData.disadvantage,
        })
      )
        .then((success) => {

          if (success) {
            resetData(evt);
            closeModal();
          }
        })
        .catch((error) => {
          // Handle submission error
          // You might want to show an error message to the user
          console.error('Error submitting review:', error);

          // For example, you can set an error state and display it in the UI
          // setErrorState(true);
        });
    }
  };


  return (
    <div>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={closeModal}
          />
          <div className="modal__content">
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form
                method="post"
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
                    <div className="rate__bar">
                      <div className="rate__group">
                        <input
                          className="visually-hidden"
                          id="star-5"
                          name="rate"
                          type="radio"
                          defaultValue={5}
                        />
                        <label
                          className="rate__label"
                          htmlFor="star-5"
                          title="Отлично"
                        />
                        <input
                          className="visually-hidden"
                          id="star-4"
                          name="rate"
                          type="radio"
                          defaultValue={4}
                        />
                        <label
                          className="rate__label"
                          htmlFor="star-4"
                          title="Хорошо"
                        />
                        <input
                          className="visually-hidden"
                          id="star-3"
                          name="rate"
                          type="radio"
                          defaultValue={3}
                        />
                        <label
                          className="rate__label"
                          htmlFor="star-3"
                          title="Нормально"
                        />
                        <input
                          className="visually-hidden"
                          id="star-2"
                          name="rate"
                          type="radio"
                          defaultValue={2}
                        />
                        <label
                          className="rate__label"
                          htmlFor="star-2"
                          title="Плохо"
                        />
                        <input
                          className="visually-hidden"
                          id="star-1"
                          name="rate"
                          type="radio"
                          defaultValue={1}
                        />
                        <label
                          className="rate__label"
                          htmlFor="star-1"
                          title="Ужасно"
                        />
                      </div>
                      <div className="rate__progress">
                        <span className="rate__stars">0</span> <span>/</span>{' '}
                        <span className="rate__all-stars">5</span>
                      </div>
                    </div>
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
                        name="user-name"
                        placeholder="Введите ваше имя"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
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
                        name="user-plus"
                        placeholder="Основные преимущества товара"
                        required
                        value={formData.advantage}
                        onChange={handleFormChange}
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
                        name="user-minus"
                        placeholder="Главные недостатки товара"
                        required
                        value={formData.disadvantage}
                        onChange={handleFormChange}
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
                        name="user-comment"
                        minLength={5}
                        placeholder="Поделитесь своим опытом покупки"
                        defaultValue={''}
                        value={formData.review}
                        onChange={handleFormChange}
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
                  disabled={buttonDisabled}
                >{postReviewStatus === Status.Loading ? 'загрузка...' : 'Отправить отзыв'}
                </button>
              </form>
            </div>
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
