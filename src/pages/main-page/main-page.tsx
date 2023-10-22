/* eslint-disable camelcase */
//import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Filter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
//import ProductCard from '../../components/product-card/product-card';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import { getProducts, isProductsStatusLoading } from '../../store/data-process/data-process.selectors';
import ProductsList from '../../components/products-list/product-list';
import { useAppSelector } from '../../hooks';
import Slider from '../../components/slider/slider';

import { fetchProductsAction, fetchPromoProductsAction } from '../../store/api-action';
import { TProduct } from '../../types/products';


//frontend pagination function
function paginate(array: TProduct[], pageSize: number, pageNumber: number): TProduct[] {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}


function MainPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [currentPageProducts, setCurrentPageProducts] = useState<TProduct[]>([]);
  //const ITEMS_PER_PAGE = 9;

  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  //const pagesProducts = [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]];
  //const currentPageProducts = pagesProducts[page]
  const onMouseEnter = (id: string) => setSelectedProduct(id);
  const onMouseLeave = () => setSelectedProduct(null);

  const isProductsDataLoading = useAppSelector(isProductsStatusLoading);

  useEffect(() => {
    const currentProducts = paginate(products, 9, page);
    setCurrentPageProducts(currentProducts);
  }, [page, products]);

  useEffect(() => {
    if (!products.length && !isProductsDataLoading) {
      dispatch(fetchProductsAction());
      dispatch(fetchPromoProductsAction());
    }

  }, [dispatch, isProductsDataLoading, products.length, selectedProduct]);


  //const currentProducts = products?.slice(0, 9);


  if (isProductsDataLoading) {
    return (
      <Spinner />
    );
  }

  const productName = 'Ретрокамера Das Auge IV';

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Slider />
        <div className="page-content">
          <Breadcrumbs productName={productName} />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <Filter />
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <form action="#">
                      <div className="catalog-sort__inner">
                        <p className="title title--h5">Сортировать:</p>
                        <div className="catalog-sort__type">
                          <div className="catalog-sort__btn-text">
                            <input
                              type="radio"
                              id="sortPrice"
                              name="sort"
                              defaultChecked
                            />
                            <label htmlFor="sortPrice">по цене</label>
                          </div>
                          <div className="catalog-sort__btn-text">
                            <input type="radio" id="sortPopular" name="sort" />
                            <label htmlFor="sortPopular">по популярности</label>
                          </div>
                        </div>
                        <div className="catalog-sort__order">
                          <div className="catalog-sort__btn catalog-sort__btn--up">
                            <input
                              type="radio"
                              id="up"
                              name="sort-icon"
                              aria-label="По возрастанию"
                            />
                            <label htmlFor="up">
                              <svg width={16} height={14} aria-hidden="true">
                                <use xlinkHref="#icon-sort" />
                              </svg>
                            </label>
                          </div>
                          <div className="catalog-sort__btn catalog-sort__btn--down">
                            <input
                              type="radio"
                              id="down"
                              name="sort-icon"
                              aria-label="По убыванию"
                            />
                            <label htmlFor="down">
                              <svg width={16} height={14} aria-hidden="true">
                                <use xlinkHref="#icon-sort" />
                              </svg>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="cards catalog__cards">
                    <ProductsList
                      products={currentPageProducts}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    />
                  </div>
                  <Pagination setPage={setPage} products={products} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default MainPage;
