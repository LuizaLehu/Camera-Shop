import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('should render the footer with links correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if the logo link exists
    const logoLink = screen.getByRole('link', { name: 'Переход на главную' });
    expect(logoLink).toBeInTheDocument();

    // Check if the social media links exist
    const vkLink = screen.getByRole('link', { name: 'Переход на страницу вконтатке' });
    const pinterestLink = screen.getByRole('link', { name: 'Переход на страницу pinterest' });
    const redditLink = screen.getByRole('link', { name: 'Переход на страницу reddit' });
    expect(vkLink).toBeInTheDocument();
    expect(pinterestLink).toBeInTheDocument();
    expect(redditLink).toBeInTheDocument();

    // Check if the navigation links exist
    const catalogLink = screen.getByRole('link', { name: 'Каталог' });
    const guaranteesLink = screen.getByRole('link', { name: 'Гарантии' });
    const deliveryLink = screen.getByRole('link', { name: 'Доставка' });
    const aboutLink = screen.getByRole('link', { name: 'О компании' });
    expect(catalogLink).toBeInTheDocument();
    expect(guaranteesLink).toBeInTheDocument();
    expect(deliveryLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();

    // Check if the resource links exist
    const operatorCoursesLink = screen.getByRole('link', { name: 'Курсы операторов' });
    const blogLink = screen.getByRole('link', { name: 'Блог' });
    const communityLink = screen.getByRole('link', { name: 'Сообщество' });
    expect(operatorCoursesLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(communityLink).toBeInTheDocument();

    // Check if the support links exist
    const faqLink = screen.getByRole('link', { name: 'FAQ' });
    const askQuestionLink = screen.getByRole('link', { name: 'Задать вопрос' });
    expect(faqLink).toBeInTheDocument();
    expect(askQuestionLink).toBeInTheDocument();
  });
});
