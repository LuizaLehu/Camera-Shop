import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorPage from './error-page';
import { withStore } from '../../utils/mocks/mock-component';
import { fetchProductAction } from '../../store/api-action';
import { extractActionsTypes } from '../../utils/mocks/mocks';
import { APIRoute } from '../../const';

describe('Component: ErrorPage', () => {
  it('should render correctly', () => {
    const firstExpectedText = 'Не удалось загрузить предложения';
    const { withStoreComponent } = withStore(<ErrorPage />, {});

    render(withStoreComponent);

    expect(screen.getByText(firstExpectedText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should dispatch "fetchProductAction" when user clicked replay button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ErrorPage />, {});
    mockAxiosAdapter.onGet(APIRoute.Products).reply(200, []);

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchProductAction.pending.type,
      fetchProductAction.fulfilled.type,
    ]);

  });
});
