import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getProduct, getSimilarProducts } from '../../store/data-process/data-process.selectors';
import { isSimilarProductsStatusLoading, isProductsStatusLoading } from '../../store/data-process/data-process.selectors';
import { dropProduct } from '../../store/data-process/data-process.slice';
import NotFoundPage from '../not-found-page/not-found-page';
import { Helmet } from 'react-helmet-async';
import { fetchSimilarProductAction, fetchReviewsProductAction, fetchProductAction } from '../../store/api-action';
import ProductsList from '../../components/products-list/product-list';
import { getReviews } from '../../store/comments-data/comments-data.selectors';
import { isReviewsStatusLoading } from '../../store/comments-data/comments-data.selectors';
import ReviewsList from '../../components/reviews-list/reviews-list';

function ProductPage() {
  const { id: cameraId } = useParams();
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getProduct);
  const isFullProductLoading = useAppSelector(isProductsStatusLoading);

  const reviews = useAppSelector(getReviews);
  const isReviewsDataLoading = useAppSelector(isReviewsStatusLoading);

  const isSimilarProductsLoading = useAppSelector(isSimilarProductsStatusLoading);
  const similarProductsList = useAppSelector(getSimilarProducts);

  const similarProducts = similarProductsList?.slice(0, 3);
  //;
  const currentReviews = reviews.length ? reviews?.slice(0, 3) : [];

  //debugger;
  useEffect(() => {
    if (cameraId) {
      dispatch(fetchProductAction(cameraId));
      dispatch(fetchSimilarProductAction(cameraId));
      dispatch(fetchReviewsProductAction(cameraId));
    }

    return () => {
      dispatch(dropProduct());
    };
  }, [cameraId, dispatch]);


  if (isFullProductLoading || isSimilarProductsLoading || isReviewsDataLoading) {
    return;
  }

  if (!currentProduct) {
    return <NotFoundPage />;
  }

  const { name, vendorCode, type, category, description, previewImg, previewImg2x, level, price, rating, reviewCount, previewImgWebp } = currentProduct;

  /*const handleBasketClick = () => {
      dispatch(addToBasketAction({ status: (!isInBasket ? 1 : 0), id: cameraId as string }));
    }

  };
  const basketClass = classNames(
    'product__bookmark-button', 'button',
    { 'product__bookmark-button--active': isInBasket },
  );
     */

  return (

    <div className="wrapper">
      <Helmet>
        <title>Cameras -best products</title>
      </Helmet>
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type={`/${previewImgWebp}`}
                      srcSet={`/${previewImg2x}`}
                    />
                    <img
                      src={`/${previewImg}`}
                      srcSet={`/${previewImg2x}`}
                      width={560}
                      height={480}
                      alt={name}
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>
                  <div className="rate product__rate">
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
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг:{rating}</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>{reviewCount}
                    </p>
                  </div>
                  <p className="product__price">
                    <span className="visually-hidden">Цена:</span>{price} ₽
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                    Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button className="tabs__control" type="button">
                        Характеристики
                      </button>
                      <button className="tabs__control is-active" type="button">
                        Описание
                      </button>
                    </div>
                    <div className="tabs__content">
                      <div className="tabs__element">
                        <ul className="product__tabs-list">
                          <li className="item-list">
                            <span className="item-list__title">Артикул:</span>
                            <p className="item-list__text">{vendorCode}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Категория:</span>
                            <p className="item-list__text">{category}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">{type}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{level}</p>
                          </li>
                        </ul>
                      </div>
                      <div className="tabs__element is-active">
                        <div className="product__tabs-text">
                          <p>
                            {description}
                          </p>
                          <p>
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title--h3">Похожие товары</h2>
                <div className="product-similar__slider">
                  {similarProductsList && <ProductsList products={similarProducts} />}

                  <button
                    className="slider-controls slider-controls--prev"
                    type="button"
                    aria-label="Предыдущий слайд"
                    disabled
                  >
                    <svg width={7} height={12} aria-hidden="true">
                      <use xlinkHref="#icon-arrow" />
                    </svg>
                  </button>
                  <button
                    className="slider-controls slider-controls--next"
                    type="button"
                    aria-label="Следующий слайд"
                  >
                    <svg width={7} height={12} aria-hidden="true">
                      <use xlinkHref="#icon-arrow" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button className="btn" type="button">
                    Оставить свой отзыв
                  </button>
                </div>
                {currentReviews && <ReviewsList reviews={currentReviews} />}
                <div className="review-block__buttons">
                  <button className="btn btn--purple" type="button">
                    Показать больше отзывов
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div >
      </main >
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
      <Footer />
    </div >

  );
}

export default ProductPage;
