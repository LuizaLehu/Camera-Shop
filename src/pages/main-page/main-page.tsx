import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Filter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-card/product-card';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';


/*type MainPageProps = {
  productsCount: number;
}
*/

function MainPage() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
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
                              defaultChecked
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                  <Pagination />
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
