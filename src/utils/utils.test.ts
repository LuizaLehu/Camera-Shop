import { getPercent } from './utils';

describe('getPercent function', () => {
  it('should return the correct percentage for a given number', () => {
    const number1 = 1;
    const number2 = 5;
    const number3 = 10;

    expect(getPercent(number1)).toBe('20%');
    expect(getPercent(number2)).toBe('100%');
    expect(getPercent(number3)).toBe('200%');
  });

  it('should handle fractional numbers and round to the nearest integer', () => {
    const number1 = 2.5;
    const number2 = 4.8;

    expect(getPercent(number1)).toBe('40%');
    expect(getPercent(number2)).toBe('96%');
  });

  it('should return 0% for negative or zero numbers', () => {
    const number1 = 0;
    const number2 = -3.5;

    expect(getPercent(number1)).toBe('0%');
    expect(getPercent(number2)).toBe('0%');
  });
});
