import { Link } from 'react-router-dom';
import { TProduct } from '../../types/products';


type ProductCardProp = {
  item: TProduct;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}


function ProductCard({ item, onMouseEnter, onMouseLeave }: ProductCardProp): JSX.Element {
  const { id, name, price, rating, reviewCount } = item;


  const onCardMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const onCardMouseLeave = () => {
    onMouseLeave?.();
  };

  return (
    <article className="product-card"
      onMouseEnter={() => onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"
          />
          <img
            src="img/content/das-auge.jpg"
            srcSet="img/content/das-auge@2x.jpg 2x"
            width={280}
            height={240}
            alt="Ретрокамера «Das Auge IV»"
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star" />
          </svg>
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>{reviewCount}
          </p>
        </div>
        <p className="product-card__title">
          {name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={`/item/${id}`}>
          Подробнее
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
