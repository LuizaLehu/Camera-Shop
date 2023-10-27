/*import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders without errors', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the Main Page')).toBeInTheDocument(); // Replace with the actual content of your Main Page
});

test('renders Spinner when products are loading', () => {
  // Mock the useSelector hooks to simulate loading state
  jest.mock('../../hooks', () => ({
    useAppSelector: () => true, // Simulate loading
  }));

  render(<App />);
  expect(screen.getByTestId('spinner')).toBeInTheDocument(); // Assuming you have a test id on the Spinner component
});

test('renders ErrorPage when an error occurs', () => {
  // Mock the useSelector hooks to simulate error state
  jest.mock('../../hooks', () => ({
    useAppSelector: (selector) => {
      if (selector === getErrorStatus) return true; // Simulate error
      return false;
    },
  }));

  render(<App />);
  expect(screen.getByText('An error occurred.')).toBeInTheDocument(); // Replace with the actual content of your ErrorPage
});
*/
