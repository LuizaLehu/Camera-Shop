import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProp = {
  productName: string;
  isProductPage: boolean;
}

function Breadcrumbs({ productName, isProductPage }: BreadcrumbsProp): JSX.Element {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main}>
              Главная
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main}>
              Каталог
              {isProductPage && (
                <svg width={5} height={8} aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini" />
                </svg>
              )}
            </Link>
          </li>
          {isProductPage && (
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {productName}
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;


