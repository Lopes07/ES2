import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  const pipe = new ReversePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string', () => {
    expect(pipe.transform('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(pipe.transform('')).toBe('');
  });
});
