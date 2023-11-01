import { render, screen } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../const';

describe('Breadcrumbs Component', () => {
  it('should render breadcrumbs correctly for the product page', () => {
    const productName = 'Product Name';
    const isProductPage = true;

    render(
      <MemoryRouter>
        <Breadcrumbs productName={productName} isProductPage={isProductPage} />
      </MemoryRouter>
    );

    // Find breadcrumb items
    const homeBreadcrumb = screen.getByText('Главная');
    const catalogBreadcrumb = screen.getByText('Каталог');
    const productBreadcrumb = screen.getByText(productName);

    // Check if breadcrumb items are present
    expect(homeBreadcrumb).toBeInTheDocument();
    expect(catalogBreadcrumb).toBeInTheDocument();
    expect(productBreadcrumb).toBeInTheDocument();

    // Check the link destinations
    expect(homeBreadcrumb).toHaveAttribute('href', AppRoute.Main);
    expect(catalogBreadcrumb).toHaveAttribute('href', AppRoute.Main);
  });

  it('should render breadcrumbs correctly for a non-product page', () => {
    const productName = 'Product Name';
    const isProductPage = false;

    render(
      <MemoryRouter>
        <Breadcrumbs productName={productName} isProductPage={isProductPage} />
      </MemoryRouter>
    );

    // Find breadcrumb items
    const homeBreadcrumb = screen.getByText('Главная');
    const catalogBreadcrumb = screen.getByText('Каталог');

    // Check if breadcrumb items are present
    expect(homeBreadcrumb).toBeInTheDocument();
    expect(catalogBreadcrumb).toBeInTheDocument();

    // Check the link destinations
    expect(homeBreadcrumb).toHaveAttribute('href', AppRoute.Main);
    expect(catalogBreadcrumb).toHaveAttribute('href', AppRoute.Main);
  });
});
