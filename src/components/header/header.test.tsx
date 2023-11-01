import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap your component with a Router

import Header from './header';

test('Header renders correctly', () => {
  const { container } = render(
    <Router>
      <Header />
    </Router>
  );

  expect(container.querySelector('.header')).toBeInTheDocument();
  expect(container.querySelector('.logo')).toBeInTheDocument();
  expect(container.querySelector('.navigation')).toBeInTheDocument();
  expect(container.querySelector('.form-search')).toBeInTheDocument();
  expect(container.querySelector('.header__basket-link')).toBeInTheDocument();
});
