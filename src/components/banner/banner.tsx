
import { Link } from 'react-router-dom';
import { TPromo } from '../../types/products';

type ProductCardProp = {
  product: TPromo;
  id: number;
}


function Banner({ product, id}: ProductCardProp): JSX.Element {

  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = product;

  return (
    <div className="banner">

      <picture>
        <source
          type={previewImgWebp}
          srcSet={previewImgWebp2x}
        />
        <img
          src={previewImg}
          srcSet={previewImg2x}
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {name}
        </span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <Link className="btn" to={`/camera/${id}`}>
          Подробнее
        </Link>
      </p>

    </div>
  );
}

export default Banner;
