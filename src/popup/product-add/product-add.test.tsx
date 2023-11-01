import { render, screen, fireEvent } from '@testing-library/react';
import ProductAdd from './product-add';

// Define a mock product for testing
const mockProduct = {
  name: 'Sample Product',
  vendorCode: '123456',
  type: 'Sample Type',
  level: 'Sample Level',
  price: 100,
  previewImg: 'sample.jpg',
  previewImg2x: 'sample2x.jpg',
};

describe('ProductAdd', () => {
  it('renders ProductAdd component with correct content', () => {
    // Define a mock function for closePopup
    const closePopup = jest.fn();

    render(<ProductAdd product={mockProduct} closePopup={closePopup} />);

    // Check if product details are displayed
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Артикул: 123456')).toBeInTheDocument();
    expect(screen.getByText('Sample Type')).toBeInTheDocument();
    expect(screen.getByText('Sample Level')).toBeInTheDocument();
    expect(screen.getByText('100 руб.')).toBeInTheDocument();

    // Check if the "Add to Basket" button is present
    const addToBasketButton = screen.getByText('Добавить в корзину');
    expect(addToBasketButton).toBeInTheDocument();

    // Check if closePopup is called when clicking the close button
    const closeButton = screen.getByLabelText('Закрыть попап');
    fireEvent.click(closeButton);
    expect(closePopup).toHaveBeenCalledTimes(1);
  });
});
