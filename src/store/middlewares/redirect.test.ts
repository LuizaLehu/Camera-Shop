import { MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import { rootReducer } from '../root-reducer';
import { createBrowserHistory } from 'history';
import { push } from 'connected-react-router';

const browserHistory = createBrowserHistory();

describe('redirect middleware', () => {
  it('should dispatch a router push action when receiving APP/redirectToRoute action', () => {
    const action: AnyAction = {
      type: 'APP/redirectToRoute',
      payload: '/some-path',
    };

    const dispatch: Dispatch = jest.fn();
    const api: MiddlewareAPI = {
      getState: rootReducer(undefined, action),
      dispatch,
    };

    redirect(api)(dispatch)(action);

    expect(dispatch).toHaveBeenCalledWith(push('/some-path'));
  });

  it('should not dispatch a router push action for other actions', () => {
    const action: AnyAction = {
      type: 'SOME_OTHER_ACTION',
    };

    const dispatch: Dispatch = jest.fn();
    const api: MiddlewareAPI = {
      getState: rootReducer(undefined, action),
      dispatch,
    };

    redirect(api)(dispatch)(action);

    expect(dispatch).not.toHaveBeenCalledWith(push('/some-path'));
  });
});
