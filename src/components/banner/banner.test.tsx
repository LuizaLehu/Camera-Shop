import { render, screen } from '@testing-library/react';
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

