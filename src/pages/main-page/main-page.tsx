import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Filter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import { getProducts, isProductsStatusLoading } from '../../store/data-process/data-process.selectors';
import ProductsList from '../../components/products-list/product-list';
import { useAppSelector } from '../../hooks';
import Slider from '../../components/slider/slider';

import { fetchProductsAction, fetchPromoProductsAction } from '../../store/api-action';
import { TProduct } from '../../types/products';
import Sorting from '../../components/sorting/sorting';
import { TSorting } from '../../types/sorting';
import { SortingType } from '../../const';

function paginate(array: TProduct[], pageSize: number, pageNumber: number): TProduct[] {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}


function MainPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>('Price');

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const [currentPageProducts, setCurrentPageProducts] = useState<TProduct[]>([]);


  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);

  const onMouseEnter = (id: string) => setSelectedProduct(id);
  const onMouseLeave = () => setSelectedProduct(null);

  const isProductsDataLoading = useAppSelector(isProductsStatusLoading);

  function mapSortingStringToEnum(value: string): SortingType {
    switch (value) {
      case 'Price':
        return SortingType.Price;
      case 'Popular':
        return SortingType.Popular;
      default:
        return SortingType.Price;
    }
  }

  useEffect(() => {
    const currentProducts = paginate(products, 9, page);
    setCurrentPageProducts(currentProducts);
  }, [page, products]);

  useEffect(() => {
    if (!products.length && !isProductsDataLoading) {
      dispatch(fetchProductsAction());
      dispatch(fetchPromoProductsAction([]));
    }

  }, [dispatch, isProductsDataLoading, products.length, selectedProduct]);


  if (isProductsDataLoading) {
    return (
      <Spinner />
    );
  }


  return (
    <div className="wrapper">
      <Header />
      <main>
        <Slider />
        <div className="page-content">
          <Breadcrumbs productName="Main Page" isProductPage={false} />
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
                  <Sorting
                    activeSorting={activeSorting}
                    onChange={(newSorting) => setActiveSorting(mapSortingStringToEnum(newSorting))}
                  />

                  <ProductsList
                    products={currentPageProducts}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />

                  <Pagination products={products} displayedPage={page} />
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
