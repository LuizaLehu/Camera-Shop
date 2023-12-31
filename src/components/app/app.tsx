import MainPage from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import BasketPage from '../../pages/basket-page/basket-page';
import ProductPage from '../../pages/product-page/product-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import ErrorPage from '../../pages/error-page/error-page';
import { useAppSelector } from '../../hooks';
import { getErrorStatus } from '../../store/data-process/data-process.selectors';

function App() {
  const hasError = useAppSelector(getErrorStatus);

  if (hasError) {
    return (
      <ErrorPage />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Basket}
            element={<BasketPage />}

          />
          <Route
            path={`${AppRoute.Product}`}
            element={<ProductPage />}
          />
          <Route path= "*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
