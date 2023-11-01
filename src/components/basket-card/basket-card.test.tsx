import { useAppDispatch } from '../../hooks';
import { addToBasketAction, removeFromBasketAction } from '../../store/api-action';
import { TProduct } from '../../types/products';

type BasketCardProps = {
  product: TProduct;
}

function BasketCard({ product }: BasketCardProps): JSX.Element {
  const { id, name, price, level, vendorCode, type, previewImg, previewImg2x } = product;

  const dispatch = useAppDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasketAction({ status: 1, id: id }));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasketAction({ id: id }));
  };

  return (
    <article className="basket-item">
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
            alt={name}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>{''}
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type}</li>
          <li className="basket-item__list-item">{level}</li>
        </ul>
      </div>
      <p className="basket-item__price">
        <span className="visually-hidden">Цена:</span>{price}
      </p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={handleRemoveFromBasket}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          type="number"
          id="counter1"
          defaultValue={2}
          min={1}
          max={99}
          aria-label="количество товара"
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={handleAddToBasket}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>{price} ₽
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={handleRemoveFromBasket}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>

    </article>
  );
}

export default BasketCard;
