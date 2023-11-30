function ReviewAddSucces({ onClose }: { onClose: () => void }): JSX.Element {
  //console.log('Rendering ReviewAddSucces component');

  const handleReturnToShopping = () => {
    //console.log('Returning to shopping...');
    onClose();
  };

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={onClose}
        />
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={handleReturnToShopping}
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={onClose}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewAddSucces;
