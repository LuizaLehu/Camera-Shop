import { TProduct } from '../../types/products';
import { useEffect } from 'react';

function ModalOverlay({ closePopup }: { closePopup: () => void }) {

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closePopup]);

  return <div className="modal__overlay" onClick={closePopup} />;
}

type ProductDescriptionProp = {
  product: TProduct;
}


function ProductDescription({ product }: ProductDescriptionProp): JSX.Element {
  const { name, vendorCode, type, level, price, previewImg, previewImg2x } = product;

  const formattedPrice = price.toLocaleString('ru-RU');
  return (
    <div className="basket-item basket-item--short">
      <div className="basket-item__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${previewImg}`}
          />
          <img
            src={`/${previewImg}`}
            srcSet={previewImg2x}
            width={140}
            height={120}
            alt={`Фотоаппарат "${name}"`}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>{' '}
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type}</li>
          <li className="basket-item__list-item">{level}</li>
        </ul>
        <p className="basket-item__price">
          <span className="visually-hidden">Цена:</span>{formattedPrice} ₽
        </p>
      </div>
    </div>
  );
}

function AddToBasketButton() {
  return (
    <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
      <svg width={24} height={16} aria-hidden="true">
        <use xlinkHref="#icon-add-basket" />
      </svg>
      Добавить в корзину
    </button>
  );
}

function ProductAdd({ product, closePopup }: { product: TProduct; closePopup: () => void }): JSX.Element {
  useEffect(() => {
    // Add a class to the body to prevent scrolling when the modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <ModalOverlay closePopup={closePopup} />
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          < ProductDescription product={product} />
          <div className="modal__buttons">
            <AddToBasketButton />
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={closePopup}
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

export default ProductAdd;
