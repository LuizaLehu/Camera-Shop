import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getProduct, getSimilarProducts } from '../../store/data-process/data-process.selectors';
import { isSimilarProductsStatusLoading, isProductsStatusLoading } from '../../store/data-process/data-process.selectors';
import { dropProduct } from '../../store/data-process/data-process.slice';
import NotFoundPage from '../not-found-page/not-found-page';
import { Helmet } from 'react-helmet-async';
import { fetchSimilarProductAction, fetchReviewsProductAction, fetchProductAction } from '../../store/api-action';
import { getReviews } from '../../store/comments-data/comments-data.selectors';
import { isReviewsStatusLoading } from '../../store/comments-data/comments-data.selectors';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewAdd from '../../popup/review-add/review-add';
import ProductAdd from '../../popup/product-add/product-add';
import SimilarProductsSlider from '../../components/slider-similar-product/slider-similar-product';
import Spinner from '../../components/spinner/spinner';
import ProductTabs from '../../components/tabs/tabs';


function ProductPage() {
  const { id: cameraId } = useParams();
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getProduct);
  const isFullProductLoading = useAppSelector(isProductsStatusLoading);

  const reviews = useAppSelector(getReviews);
  const isReviewsDataLoading = useAppSelector(isReviewsStatusLoading);

  const isSimilarProductsLoading = useAppSelector(isSimilarProductsStatusLoading);
  const similarProductsList = useAppSelector(getSimilarProducts);

  const similarProducts = similarProductsList || [];

  const [currentReviews, setCurrentReviews] = useState(reviews.length ? reviews.slice(0, 3) : []);

  // const [activeTab, setActiveTab] = useState('characteristics');

  const [reviewsToShow, setReviewsToShow] = useState(3);

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const [isProductAddModalOpen, setIsProductAddModalOpen] = useState(false);

  const openProductAddModal = () => {
    setIsProductAddModalOpen(true);
  };

  const closeProductAddModal = () => {
    setIsProductAddModalOpen(false);
  };


  const handleShowMoreReviews = () => {


    setReviewsToShow(reviewsToShow + 3);

  };

  useEffect(() => {
    setCurrentReviews(reviews.slice(0, reviewsToShow));
  }, [reviewsToShow, reviews]);


  /* const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };*/

  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };

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
    return <Spinner />;
  }

  if (!currentProduct) {
    return <NotFoundPage />;
  }

  const { name, previewImg, previewImg2x, price, rating, reviewCount, previewImgWebp } = currentProduct;

  const formattedPrice = price.toLocaleString('ru-RU');

  /*let tabContent;
  if (activeTab === 'characteristics') {
    tabContent = (
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
    );
  } else if (activeTab === 'description') {
    tabContent = (
      <div className="product__tabs-text">
        <p>{description}</p>

      </div>
    );
  }
*/

  return (

    <div className="wrapper">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs productName={name} isProductPage />
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
                    <span className="visually-hidden">Цена:</span>{formattedPrice} ₽
                  </p>
                  <button
                    className="btn btn--purple"
                    type="button"
                    onClick={openProductAddModal}
                  >
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                    Добавить в корзину
                  </button>
                  <ProductTabs currentProduct={currentProduct }/>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title--h3">Похожие товары</h2>
                <SimilarProductsSlider products={similarProducts} />
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button
                    className="btn"
                    type="button"
                    onClick={openReviewModal}
                  >
                    Оставить свой отзыв
                  </button>
                </div>
                {currentReviews && (
                  <ReviewsList reviews={currentReviews} />
                )}
                {reviewsToShow < reviews.length && (
                  <div className="review-block__buttons">
                    <button
                      className="btn btn--purple"
                      type="button"
                      onClick={handleShowMoreReviews}
                    >
                      Показать больше отзывов
                    </button>
                  </div>
                )}
              </div>
            </section>
            {isReviewModalOpen && (
              <ReviewAdd
                closeModal={() => setIsReviewModalOpen(false)}
              />
            )}
            {isProductAddModalOpen && (
              <ProductAdd product={currentProduct} closePopup={closeProductAddModal} />
            )}
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
