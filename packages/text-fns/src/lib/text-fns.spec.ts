import { Capitalize, Uppercase } from './text-fns';

describe('Capitalize', () => {
  it('should return a text with the first letter capitalized', () => {
    expect(Capitalize('hello')).toBe('Hello');
    expect(Capitalize('hello world')).toBe('Hello world');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(Capitalize('')).toBe('');
  });
});

describe('Uppercase', () => {
  it('should return a text with all letters capitalized ', () => {
    expect(Uppercase('hello')).toBe('HELLO');
    expect(Uppercase('hello world')).toBe('HELLO WORLD');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(Uppercase('')).toBe('');
  });
});
