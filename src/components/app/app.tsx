import MainPage from "../../pages/main-page/main-page";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from "../../const";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ProductPage from "../../pages/product-page/product-page";


type AppScreenProps = {
  productsCount: number;
}

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage productsCount={productsCount />}
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
