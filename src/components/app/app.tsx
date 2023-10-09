import MainPage from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ProductPage from '../../pages/product-page/product-page';


function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
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
            path={`${AppRoute.Product}/:productId`}
            element={<ProductPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
