import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner Component', () => {
  it('renders the spinner with the correct props', () => {
    render(<Spinner />);

    // Check if the spinner is rendered with the correct height, width, and ARIA label
    const spinner = screen.getByLabelText('blocks-loading');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('height', '100');
    expect(spinner).toHaveAttribute('width', '100');
  });


  afterEach(() => {
    // Clean up or reset any changes made during the tests
  });
});
