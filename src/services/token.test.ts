import { getToken, saveToken, dropToken } from './token'; // Adjust the import path

describe('Token Functions', () => {
  beforeAll(() => {
    // Create a fake localStorage for the tests
    const localStorageMock = (function () {
      let store = {};

      return {
        getItem: function (key) {
          return store[key] || null;
        },
        setItem: function (key, value) {
          store[key] = value.toString();
        },
        removeItem: function (key) {
          delete store[key];
        },
        clear: function () {
          store = {};
        },
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should return an empty string if token is not set', () => {
    const token = getToken();
    expect(token).toBe('');
  });

  it('should save and retrieve a token correctly', () => {
    const token = 'your-auth-token';
    saveToken(token);
    const retrievedToken = getToken();
    expect(retrievedToken).toBe(token);
  });

  it('should drop the token correctly', () => {
    const token = 'your-auth-token';
    saveToken(token);
    dropToken();
    const retrievedToken = getToken();
    expect(retrievedToken).toBe('');
  });
});
