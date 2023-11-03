import { render, screen } from '@testing-library/react';
import MainPage from './main-page';

// Mock dependencies or setup your store as needed

describe('MainPage Component', () => {
  // Mock dependencies or setup your store if required

  beforeEach(() => {
    // Mock any required setup or dependencies before each test
  });

  it('renders the main content', () => {
    render(<MainPage />);

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });

  it('handles loading state correctly', () => {
    // Mock loading state or set up your store accordingly
    render(<MainPage />);

    // Verify that the loading state is handled correctly, for example, by checking for a Spinner component
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('handles loaded state correctly', () => {
    // Mock loaded state or set up your store accordingly
    render(<MainPage />);

    // Write assertions to check that the loaded state is handled correctly, e.g., check for product cards
    expect(screen.getAllByTestId('product-card')).toHaveLength(9);

  });

  afterEach(() => {
    // Clean up or reset any changes made during the tests
  });
});
