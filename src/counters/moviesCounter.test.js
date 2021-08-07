const movieCounter = require('./movieCounter');

describe('movieCounter()', () => {
  test('it is expect to return a number', () => {
    expect(typeof (movieCounter(['movie1', 'movie2', 'movie3']))).toBe('number');
  });

  test('for [], it is returns 0 ', () => {
    expect(movieCounter([])).toBe(0);
  });

  test('for ["movie1", "movie2", "movie3"], should return 3', () => {
    expect(movieCounter(['movie1', 'movie2', 'movie3'])).toBe(3);
  });

  test('for ["movie1"], should return 1', () => {
    expect(movieCounter(['movie1'])).toBe(1);
  });
});
