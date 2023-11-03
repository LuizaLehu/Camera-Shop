import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductPage from './product-page';
import { withStore } from '../../utils/mocks/mock-component';
import { makeFakeProduct } from '../../utils/mocks/product';


describe('ProductPage', () => {
  it('renders ProductPage component with correct content', () => {
    const cameraId = 'your-camera-id';
    const productData = makeFakeProduct;
    const store = {};

    const initialState = {
      DATA: {
        isProductsDataLoading: false,
        products: [],
        hasError: false,
      },
      REVIEW: {
        isReviewsDataLoading: false,
        reviews: [],
      },
    };

    // Get the component with the mock store and route
    const { withStoreComponent } = withStore(
      <MemoryRouter initialEntries={[`/product/${cameraId}`]}>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
      </MemoryRouter>,
      initialState
    );

    render(
      <Provider store={store}>{withStoreComponent}</Provider>
    );

    expect(screen.getByText(productData.name)).toBeInTheDocument();
    expect(screen.getByText('Похожие товары')).toBeInTheDocument();


  });
});
