import { render, screen } from '@testing-library/react';

import Logo from './logo';

test('renders the logo link with the correct properties', () => {
  render(<Logo />);

  // Find the link element by its aria-label attribute
  const logoLink = screen.getByRole('link', { name: 'Переход на главную' });

  // Check if the link has the correct 'to' attribute
  expect(logoLink).toHaveAttribute('to', '/');

  // Check if the SVG icon is present
  const svgIcon = screen.getByTestId('logo-icon'); // Add the data-testid to your SVG element
  expect(svgIcon).toBeInTheDocument();
});
