import { render, screen } from '@testing-library/react';
import BasketList from './basket-list';

describe('BasketList Component', () => {
  it('should render a list of basket products', () => {
    const basketProductsMock = [
      {
        id: '1',
        name: 'Product 1',
        price: 10,
      },
      {
        id: '2',
        name: 'Product 2',
        price: 15,
      },
    ];

    // Find all BasketCard elements
    const basketCards = screen.getAllByRole('listitem');

    // Check if the correct number of BasketCard elements are rendered
    expect(basketCards.length).toBe(basketProductsMock.length);

    // Verify if the names of basket products are present in the rendered components
    for (let i = 0; i < basketProductsMock.length; i++) {
      const product = basketProductsMock[i];
      const basketCardElement = screen.getByText(product.name);
      expect(basketCardElement).toBeInTheDocument();
    }
  });

  it('should render an empty list when basketProducts is empty', () => {
    render(<BasketList basketProducts={[]} />);

    // Find the empty list element
    const emptyList = screen.getByText('Your basket is empty.');

    // Check if the empty list message is rendered
    expect(emptyList).toBeInTheDocument();
  });
});
