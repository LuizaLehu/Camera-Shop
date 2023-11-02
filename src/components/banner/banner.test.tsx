/*import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter to wrap the component
import Banner from './banner';

test('renders Banner component with correct content', () => {
  // Mock product data
  const product = {
    name: 'Sample Product',
    previewImg: 'sample.jpg',
    previewImg2x: 'sample2x.jpg',
    previewImgWebp: 'image/webp',
    previewImgWebp2x: 'image2x/webp',
  };

  const id = 1;

  render(
    <BrowserRouter>
      <Banner
        product={product}
        id={id}
      />
    </BrowserRouter>
  );

  expect(screen.getByText('Новинка!')).toBeInTheDocument();
  expect(screen.getByText('Sample Product')).toBeInTheDocument(); // Replace with the actual product name
  expect(screen.getByText('Профессиональная камера от известного производителя')).toBeInTheDocument();
  expect(screen.getByText('Подробнее')).toBeInTheDocument();

  expect(screen.getByRole('link')).toHaveAttribute('to', '/camera/1'); // Replace with the expected URL
});

*/


import { render, screen } from '@testing-library/react';
import Banner from './banner';
import { withStore } from '../../utils/mocks/mock-component';

describe('Banner Component', () => {
  it('renders Banner component with correct content', () => {
    // Mock product data
    const product = {
      name: 'Sample Product',
      previewImg: 'sample.jpg',
      previewImg2x: 'sample2x.jpg',
      previewImgWebp: 'image/webp',
      previewImgWebp2x: 'image2x/webp',
    };

    const id = 1;

    // Create a mock state for your Redux store
    const initialState = {
      DATA: {
        isProductsDataLoading: false,
        products: [],
        hasError: false,
      },
    };

    // Get the component with the mock store and mock Axios adapter
    const { withStoreComponent } = withStore(
      <Banner product={product} id={id} />,
      initialState
    );

    render(withStoreComponent);

    expect(screen.getByText('Новинка!')).toBeInTheDocument();
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Профессиональная камера от известного производителя')).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('to', '/camera/1');
  });
});
