import { MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom'; // Replace with the actual import path
import { rootReducer } from '../root-reducer'; // Replace with the actual import path
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

    // Invoke the middleware function
    redirect(api)(dispatch)(action);

    // Expect that a push action is dispatched
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

    // Invoke the middleware function with a non-APP/redirectToRoute action
    redirect(api)(dispatch)(action);

    // Expect that dispatch is not called
    expect(dispatch).not.toHaveBeenCalledWith(push('/some-path'));
  });
});
