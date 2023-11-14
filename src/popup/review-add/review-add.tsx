import { useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router';
import { postReviewProductAction } from '../../store/api-action';
import { getReviewStatus } from '../../store/comments-data/comments-data.selectors';
import { Status } from '../../const';
import { useEffect } from 'react';
import { MAX_CHARACTERS_COUNT, MIN_CHARACTERS_COUNT, STARS_COUNT } from '../../const';

type TReviewAdd = {
  closeModal: () => void;
};


function ReviewAdd({ closeModal }: TReviewAdd) {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const initialFormData = {
    name: '',
    rating: '0',
    review: '',
    disadvantage: '',
    advantage: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);

  const postReviewStatus = useAppSelector(getReviewStatus);


  useEffect(() => {
    // Add a class to the body to prevent scrolling when the modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  function validateForm() {
    console.log('formData', formData);
    const isReviewValid =
      formData.review.length >= MIN_CHARACTERS_COUNT &&
      formData.review.length <= MAX_CHARACTERS_COUNT;

    const isRatingValid =
      +formData.rating > 0 && +formData.rating < STARS_COUNT;

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


  const resetForm = () => {
    setFormData(initialFormData);
  };

  /*const resetData = (evt: FormEvent<HTMLFormElement>) => {
    setFormData({
      ...formData,
      review: '',
      rating: '0',
      name: '',
      advantage: '',
      disadvantage: ''
    });
    evt.currentTarget.reset();
  };  */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    validateForm();


    if (isFormValid && id) {
      const form = evt.target as HTMLFormElement;
      const data = new FormData(form);
      const formObject = Object.fromEntries(data.entries());

      dispatch(
        postReviewProductAction({
          review: String(formObject['user-comment']),
          rating: +formObject['rate'],
          cameraId: +id,
          userName: String(formObject['user-name']),
          advantage: String(formObject['user-plus']),
          disadvantage: String(formObject['user-minus']),
        })
      );


      if (postReviewStatus === Status.Loading || !(postReviewStatus === Status.Error)) {
        setFormData({ ...formData, review: '', rating: '0', name: '', advantage: '', disadvantage: '' });
      }
    }
    resetForm();
    closeModal();
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
                          onChange={(e) => {
                            handleChange(e);
                            validateForm();
                          }}
                          value={formData.rating}
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
                          onChange={(e) => {
                            handleChange(e);
                            validateForm();
                          }}
                          value={formData.rating}
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
                          onChange={(e) => {
                            handleChange(e);
                            validateForm();
                          }}
                          value={formData.rating}
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
                          onChange={(e) => {
                            handleChange(e);
                            validateForm();
                          }}
                          value={formData.rating}
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
                          onChange={(e) => {
                            handleChange(e);
                            validateForm();
                          }}
                          value={formData.rating}
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
                        id="user-name"
                        name="user-name"
                        placeholder="Введите ваше имя"
                        onChange={(e) => {
                          handleChange(e);
                          validateForm();
                        }}
                        value={formData.name}
                        required
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
                        id="user-plus"
                        name="user-plus"
                        placeholder="Основные преимущества товара"
                        onChange={(e) => {
                          handleChange(e);
                          validateForm();
                        }}
                        value={formData.advantage}
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
                        id="user-minus"
                        name="user-minus"
                        placeholder="Главные недостатки товара"
                        required
                        onChange={(e) => {
                          handleChange(e);
                          validateForm();
                        }}
                        value={formData.disadvantage}
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
                        id="user-comment"
                        minLength={5}
                        placeholder="Поделитесь своим опытом покупки"
                        defaultValue={''}
                        value={formData.review}
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
                >
                  {postReviewStatus === Status.Loading ? 'загрузка...' : 'Отправить отзыв'}
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
