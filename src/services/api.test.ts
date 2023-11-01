import axios from 'axios';
import { createAPI } from './api'; // Adjust the import path
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

// Mock axios create function
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('createAPI', () => {
  const TOKEN = 'your-mock-token';

  beforeAll(() => {
    // Mock getToken function
    jest.spyOn(global, 'getToken').mockReturnValue(TOKEN);

    // Mock the toast.warn function
    jest.spyOn(toast, 'warn').mockImplementation(() => { });
  });

  it('should create an Axios instance with base URL and request timeout', () => {
    const api = createAPI();

    expect(api.defaults.baseURL).toBe('https://camera-shop.accelerator.pages.academy');
    expect(api.defaults.timeout).toBe(5000);
  });

  it('should add the x-token header with the token from getToken', () => {
    const api = createAPI();

    // Ensure the request interceptor is set up
    expect(mockedAxios.create).toHaveBeenCalledTimes(1);

    // Mock an Axios response
    const response = { status: 200, data: {} };
    mockedAxios.create.mockResolvedValue(response);

    // Make a test request (it won't actually send the request)
    api.get('/test');

    // Verify that the 'x-token' header is added to the request
    expect(mockedAxios.create).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: {
          'x-token': TOKEN,
        },
      })
    );
  });

  it('should display a toast warning for specific error responses', async () => {
    const api = createAPI();

    // Mock an Axios error response with status 400
    const errorResponse = {
      response: {
        status: StatusCodes.BAD_REQUEST,
        data: {
          message: 'Bad Request',
        },
      },
    };
    mockedAxios.create.mockRejectedValue(errorResponse);

    // Make a test request that triggers the error response
    try {
      await api.get('/test');
    } catch (error) {
      // Verify that toast.warn was called with the error message
      expect(toast.warn).toHaveBeenCalledWith('Bad Request');
    }
  });

  it('should not display a toast warning for non-matching error responses', async () => {
    const api = createAPI();

    // Mock an Axios error response with status 401
    const errorResponse = {
      response: {
        status: StatusCodes.UNAUTHORIZED,
        data: {
          message: 'Unauthorized',
        },
      },
    };
    mockedAxios.create.mockRejectedValue(errorResponse);

    // Make a test request that triggers the error response
    try {
      await api.get('/test');
    } catch (error) {
      // Verify that toast.warn was not called
      expect(toast.warn).not.toHaveBeenCalled();
    }
  });
});
