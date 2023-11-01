import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'; // You can use MemoryRouter to set route parameters
import { Provider } from 'react-redux'; // You need to wrap the component in a Redux provider

import ProductPage from './product-page';

describe('ProductPage', () => {
  it('renders ProductPage component with correct content', () => {
    const cameraId = 'your-camera-id'; // Set the camera ID you want to test
    const productData = {
      // Mock the product data here
    };
    const similarProducts = [
      // Mock similar products data
    ];
    const reviews = [
      // Mock reviews data
    ];

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/product/${cameraId}`]}>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    // You can use screen queries to check if specific content is rendered as expected
    // For example:
    expect(screen.getByText(productData.name)).toBeInTheDocument();
    expect(screen.getByText('Похожие товары')).toBeInTheDocument();

    // You can also test interactions and other aspects of the component as needed
    // For example, opening the review modal, clicking buttons, etc.
  });
});
