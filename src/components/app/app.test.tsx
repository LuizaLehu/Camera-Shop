/*import { render, screen } from '@testing-library/react';
import App from './app';
import { withHistory, withStore } from '../../utils/mock-component';
import { MemoryHistory, createMemoryHistory } from 'history';
import { makeFakeStore } from '../../utils/mocks';
import { AppRoute } from '../../const';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);


    it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
      const withHistoryComponent = withHistory(<App />, mockHistory);
      const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
      const unknownRoute = '/unknown-route';
      mockHistory.push(unknownRoute);

      render(withStoreComponent);

      expect(screen.getByText('404. Page not found')).toBeInTheDocument();
      expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
    });
  });
}
);
*/


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
