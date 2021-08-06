const commentCounter = require('./commentCounter');

it('commentCounter([0, 2, 4, 4]) should return number', () => {
  expect(typeof commentCounter([0, 2, 4, 4])).toBe('number');
});
it('commentCounter([0, 2, 4, 5]) should return 4', () => {
  expect(commentCounter([0, 2, 4, 5])).toEqual(4);
});
it('commentCounter([3, 4, 5, 6, 7, 7]) should return 6', () => {
  expect(commentCounter([3, 4, 5, 6, 7, 7])).toBe(6);
});
it('commentCounter([0, 2]) should return 2', () => {
  expect(commentCounter([0, 2])).toBe(2);
});
it('commentCounter([0]) should return 1', () => {
  expect(commentCounter([0])).toBe(1);
});