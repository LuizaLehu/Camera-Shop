import { render, screen, fireEvent } from '@testing-library/react';
import ProductAddSucces from './product-add-succes';

describe('ProductAddSucces', () => {
  it('renders ProductAddSucces component with correct content', () => {
    render(<ProductAddSucces />);

    // Check if the success message is displayed
    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();

    // Check if the "Продолжить покупки" button is present
    const continueShoppingButton = screen.getByText('Продолжить покупки');
    expect(continueShoppingButton).toBeInTheDocument();

    // Check if the "Перейти в корзину" button is present
    const goToBasketButton = screen.getByText('Перейти в корзину');
    expect(goToBasketButton).toBeInTheDocument();

    // Check if closePopup is called when clicking the close button
    const closeButton = screen.getByLabelText('Закрыть попап');
    fireEvent.click(closeButton);
  });
});
