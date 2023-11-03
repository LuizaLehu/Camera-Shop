import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // You'll need to install this package

import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';


const mockStore = configureStore;

describe('App Component', () => {
  it('should render a Spinner while loading', () => {
    const store = mockStore({
      dataProcess: { loading: true, error: null },
    });

    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should render an ErrorPage when there is an error', () => {
    const store = mockStore({
      dataProcess: { loading: false, error: true },
    });

    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const errorPageElement = screen.getByText('Не удалось загрузить предложения');
    expect(errorPageElement).toBeInTheDocument();
  });

  it('should render MainPage when not in loading or error state', () => {
    const store = mockStore({
      dataProcess: { loading: false, error: null },
    });

    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const mainPageElement = screen.getByText('Content of MainPage'); // Replace with an element from MainPage
    expect(mainPageElement).toBeInTheDocument();
  });
});

