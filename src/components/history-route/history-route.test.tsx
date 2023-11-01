import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import HistoryRouter from './history-route';

describe('HistoryRouter Component', () => {
  it('should render children with history', () => {
    // Create a memory history object
    const history = createMemoryHistory();

    // Render the HistoryRouter component with children
    const { container } = render(
      <Router history={history}>
        <HistoryRouter>
          <div data-testid="test-child">Test Child</div>
        </HistoryRouter>
      </Router>
    );

    // Check if the child component is rendered
    const testChild = container.querySelector('[data-testid="test-child"]');
    expect(testChild).toBeInTheDocument();
  });

  it('should pass history and other props', () => {
    // Create a memory history object
    const history = createMemoryHistory();
    history.push('/example-route');

    // Render the HistoryRouter component with children
    const { container } = render(
      <Router history={history}>
        <HistoryRouter basename="/example" someProp="value">
          <div data-testid="test-child">Test Child</div>
        </HistoryRouter>
      </Router>
    );

    // Check if the child component is rendered
    const testChild = container.querySelector('[data-testid="test-child"]');
    expect(testChild).toBeInTheDocument();

    // Check if the history and other props are passed correctly
    expect(history.location.pathname).toBe('/example/example-route');
    expect(history.location.state.someProp).toBe('value');
  });
});
