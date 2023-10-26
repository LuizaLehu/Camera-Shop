import { TProduct } from '../../types/products';

function ModalOverlay() {
  return <div className="modal__overlay" />;
}

type ProductDescriptionProp = {
  product: TProduct;
}


function ProductDescription({ product }: ProductDescriptionProp): JSX.Element {
  const { name, vendorCode, type, level, price, previewImg, previewImg2x } = product;
  return (
    <div className="basket-item basket-item--short">
      <div className="basket-item__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImg}
          />
          <img
            src={previewImg}
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
          <span className="visually-hidden">Цена:</span>{price} руб.
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

function ProductAdd(): JSX.Element {
  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <ModalOverlay />
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          < ProductDescription product={product} />
          <div className="modal__buttons">
            <AddToBasketButton />
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
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
