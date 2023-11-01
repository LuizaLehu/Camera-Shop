import { Link } from 'react-router-dom';
import { TFullProduct, TProduct } from '../../types/products';
import { useState } from 'react';
import ProductAdd from '../../popup/product-add/product-add';

type ProductCardProp = {
  product: TProduct | TFullProduct;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}


function ProductCard({ product, onMouseEnter, onMouseLeave }: ProductCardProp): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { id, name, price, rating, reviewCount, previewImg, previewImg2x } = product;

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onCardMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const onCardMouseLeave = () => {
    onMouseLeave?.();
  };

  const renderStarRating = (rating) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      if (i <= fullStars) {
        stars.push(<svg key={i} width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
                   </svg>);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(<svg key={i} width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-half-star" />
                   </svg>);
      } else {
        stars.push(<svg key={i} width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-star" />
        </svg>);
      }
    }

    return (
      <div className="rate product-card__rate">
        {stars}
        <p className="visually-hidden">Рейтинг: {rating}</p>
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>{reviewCount}
        </p>
      </div>
    );
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
            srcSet={previewImg}
          />
          <img
            src={previewImg}
            srcSet={previewImg2x}
            width={280}
            height={240}
            alt={name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        {renderStarRating(rating)}
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
          onClick={openPopup}
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={`/camera/${id}`}>
          Подробнее
        </Link>
        {isPopupOpen && (
          <ProductAdd product={product} closePopup={closePopup} />
        )}
      </div>
    </article>
  );
}

export default ProductCard;
