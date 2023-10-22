import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRating } from '../../utils/utils';
import { addToBasketAction } from '../../store/api-action';
import { TProduct } from '../../types/products';

type BasketCardProps = {
  product: TProduct;
}

function BasketCard({ product }: BasketCardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { id, name, price, rating, reviewCount, previewImg, previewImg2x } = product;



  const handleBasketClick = () => {

    dispatch(addToBasketAction({ status: (!isInBasket ? 1 : 0), id: id }));
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
            <span className="basket-item__number">{ve}</span>
          </li>
          <li className="basket-item__list-item">Плёночная фотокамера</li>
          <li className="basket-item__list-item">Любительский уровень</li>
        </ul>
      </div>
      <p className="basket-item__price">
        <span className="visually-hidden">Цена:</span>18 970 ₽
      </p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
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
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>37 940 ₽
      </div>
      <button className="cross-btn" type="button" aria-label="Удалить товар">
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>

    </article>
  );
}

export default BasketCard;
