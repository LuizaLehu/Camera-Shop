import configureMockStore from 'redux-mock-store';
import createThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchPromoProductsAction,
  fetchProductsAction,
  fetchProductAction,
  fetchSimilarProductAction,
  fetchReviewsProductAction,
  postReviewProductAction,
  fetchBasketAction,
  removeFromBasketAction,
} from './api-action';

import { makeFakeProducts } from '../utils/mocks/products';

const middlewares = [createThunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);

describe('Async Thunk Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    mockAxios.reset();
    store.clearActions();
  });

  it('fetchProductsAction should dispatch success action', async () => {
    const count = 5; // Adjust the count as needed
    const expectedData = makeFakeProducts(count);

    mockAxios.onGet('/api/products').reply(200, expectedData);

    await store.dispatch(fetchProductsAction());

    const actions = store.getActions();
    const successAction = actions.find((a) => a.type === fetchProductsAction.fulfilled.type);

    expect(successAction.payload).toEqual(expectedData);
  });

  it('fetchProductsAction should dispatch error action', async () => {
    mockAxios.onGet('/api/products').reply(500);

    try {
      await store.dispatch(fetchProductsAction());
    } catch (error) {
      const actions = store.getActions();
      const errorAction = actions.find((a) => a.type === fetchProductsAction.rejected.type);

      expect(errorAction.error.message).toEqual('Request failed with status code 500');
    }
  });

  it('fetches a product successfully', async () => {
    const initialState = {}; // Set your initial state here
    const store = mockStore(initialState);

    const mockApi = new MockAdapter(axios); // Create a mock adapter for axios

    // Define the expected cameraId and response data
    const cameraId = 'your_camera_id';
    const responseData = { /* your response data here */ };

    // Simulate a successful API response
    mockApi.onGet(`/your-api-endpoint/${cameraId}`).reply(200, responseData);

    // Dispatch the fetchProductAction
    await store.dispatch(fetchProductAction(cameraId));

    // Get the actions that were dispatched
    const actions = store.getActions();

    // Assert that the correct actions were dispatched
    expect(actions[0].type).toBe(fetchProductAction.pending.type);
    expect(actions[1].type).toBe(fetchProductAction.fulfilled.type);
    expect(actions[1].payload).toEqual(responseData);
  });

  it('handles a failed API request', async () => {
    const initialState = {}; // Set your initial state here
    const store = mockStore(initialState);

    const mockApi = new MockAdapter(axios);

    // Define the expected cameraId and an error response
    const cameraId = 'your_camera_id';
    const errorResponse = { /* your error response data here */ };

    // Simulate a failed API response
    mockApi.onGet(`/your-api-endpoint/${cameraId}`).reply(500, errorResponse);

    // Dispatch the fetchProductAction
    await store.dispatch(fetchProductAction(cameraId));

    // Get the actions that were dispatched
    const actions = store.getActions();

    // Assert that the correct actions were dispatched
    expect(actions[0].type).toBe(fetchProductAction.pending.type);
    expect(actions[1].type).toBe(fetchProductAction.rejected.type);
    expect(actions[1].error.message).toBe('Request failed with status code 500'); // Check for the error message
  });

  it('fetches promo products successfully', async () => {
    const initialState = {}; // Set your initial state here
    const store = mockStore(initialState);

    const mockApi = new MockAdapter(axios); // Create a mock adapter for axios

    // Define the expected response data for promo products
    const responseData = [{ /* your promo product data here */ }];

    // Simulate a successful API response
    mockApi.onGet('/your-promo-products-api-endpoint').reply(200, responseData);

    // Dispatch the fetchPromoProductsAction
    await store.dispatch(fetchPromoProductsAction());

    // Get the actions that were dispatched
    const actions = store.getActions();

    // Assert that the correct actions were dispatched
    expect(actions[0].type).toBe(fetchPromoProductsAction.pending.type);
    expect(actions[1].type).toBe(fetchPromoProductsAction.fulfilled.type);
    expect(actions[1].payload).toEqual(responseData);
  });

  it('handles a failed promo products API request', async () => {
    const initialState = {}; // Set your initial state here
    const store = mockStore(initialState);

    const mockApi = new MockAdapter(axios);

    // Define an error response for promo products
    const errorResponse = { /* your error response data here */ };

    // Simulate a failed API response
    mockApi.onGet('/your-promo-products-api-endpoint').reply(500, errorResponse);

    // Dispatch the fetchPromoProductsAction
    await store.dispatch(fetchPromoProductsAction());

    // Get the actions that were dispatched
    const actions = store.getActions();

    // Assert that the correct actions were dispatched
    expect(actions[0].type).toBe(fetchPromoProductsAction.pending.type);
    expect(actions[1].type).toBe(fetchPromoProductsAction.rejected.type);
    expect(actions[1].error.message).toBe('Request failed with status code 500'); // Check for the error message
  });
});


it('fetches similar products successfully', async () => {
  const initialState = {}; // Set your initial state here
  const store = mockStore(initialState);

  const mockApi = new MockAdapter(axios); // Create a mock adapter for axios

  // Define the expected cameraId and response data for similar products
  const cameraId = 'your_camera_id';
  const responseData = [{ /* your similar product data here */ }];

  // Simulate a successful API response
  mockApi.onGet(`/your-api-endpoint/${cameraId}/similar`).reply(200, responseData);

  // Dispatch the fetchSimilarProductAction
  await store.dispatch(fetchSimilarProductAction(cameraId));

  // Get the actions that were dispatched
  const actions = store.getActions();

  // Assert that the correct actions were dispatched
  expect(actions[0].type).toBe(fetchSimilarProductAction.pending.type);
  expect(actions[1].type).toBe(fetchSimilarProductAction.fulfilled.type);
  expect(actions[1].payload).toEqual(responseData);
});

it('handles a failed similar products API request', async () => {
  const initialState = {}; // Set your initial state here
  const store = mockStore(initialState);

  const mockApi = new MockAdapter(axios);

  // Define the expected cameraId and an error response for similar products
  const cameraId = 'your_camera_id';
  const errorResponse = { /* your error response data here */ };

  // Simulate a failed API response
  mockApi.onGet(`/your-api-endpoint/${cameraId}/similar`).reply(500, errorResponse);

  // Dispatch the fetchSimilarProductAction
  await store.dispatch(fetchSimilarProductAction(cameraId));

  // Get the actions that were dispatched
  const actions = store.getActions();

  // Assert that the correct actions were dispatched
  expect(actions[0].type).toBe(fetchSimilarProductAction.pending.type);
});

