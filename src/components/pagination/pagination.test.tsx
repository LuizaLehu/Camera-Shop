import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './pagination';

describe('Pagination Component', () => {
  it('should render the pagination correctly', () => {
    const products = []; // Replace with an array of products for testing
    const page = 1;
    render(<Pagination products={products} page={page} />);

    // Example: Test if the first page is active
    expect(screen.getByText('1')).toHaveClass('pagination__link--active');

    // Example: Test if the 'Далее' link is present
    expect(screen.getByText('Далее')).toBeInTheDocument();
  });

  it('should handle page navigation correctly', () => {
    // Example: Test clicking on a page number
    const products = []; // Replace with an array of products for testing
    const page = 1;
    render(<Pagination products={products} page={page} />);
    const page2Link = screen.getByText('2');
    fireEvent.click(page2Link);
    expect(screen.getByText('2')).toHaveClass('pagination__link--active');

    // Example: Test clicking on the 'Далее' link
    const page3Link = screen.getByText('Далее');
    fireEvent.click(page3Link);
    expect(screen.getByText('3')).toHaveClass('pagination__link--active');

    // You can continue with more tests for other scenarios (e.g., 'Назад' link).
  });
});
