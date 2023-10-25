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
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
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


/*
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';

function Breadcrumbs() {
  const [activePage, setActivePage] = useState('main'); // You can start with 'main'

  // Define a function to update the current page
  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  };

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main} onClick={() => handlePageChange('main')}>
              Главная
              {activePage !== 'main' && (
                <svg width={5} height={8} aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini" />
                </svg>
              )}
            </Link>
          </li>
          {activePage !== 'main' && (
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={AppRoute.Main} onClick={() => handlePageChange('catalog')}>
                Каталог
                {activePage !== 'catalog' && (
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                )}
              </Link>
            </li>
          )}
          {activePage === 'product' && (
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                Ретрокамера Das Auge IV
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
*/
