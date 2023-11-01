import { render, screen, fireEvent } from '@testing-library/react';
import FormSearch from './form-search';

describe('FormSearch Component', () => {
  it('should render the search form correctly', () => {
    render(<FormSearch />);

    // Check if the input field is rendered
    const searchInput = screen.getByPlaceholderText('Поиск по сайту');
    expect(searchInput).toBeInTheDocument();

    // Check if the reset button is rendered
    const resetButton = screen.getByRole('button', { name: 'Сбросить поиск' });
    expect(resetButton).toBeInTheDocument();
  });

  it('should allow text input and reset', () => {
    render(<FormSearch />);

    // Find the search input field
    const searchInput = screen.getByPlaceholderText('Поиск по сайту');

    // Type text into the input field
    fireEvent.change(searchInput, { target: { value: 'example search' } });

    // Check if the input field value is updated
    expect(searchInput).toHaveValue('example search');

    // Find the reset button
    const resetButton = screen.getByRole('button', { name: 'Сбросить поиск' });

    // Click the reset button
    fireEvent.click(resetButton);

    // Check if the input field is empty after resetting
    expect(searchInput).toHaveValue('');
  });

  it('should render the select list with items', () => {
    render(<FormSearch />);

    // Find the select list
    const selectList = screen.getByRole('list', { name: 'Search Results' });

    // Check if the select list is present
    expect(selectList).toBeInTheDocument();

    // Find individual select items
    const selectItems = screen.getAllByRole('listitem');

    // Check if select items exist
    expect(selectItems).toHaveLength(5);
  });
});
