const sumFunc = require('./sum');

/* eslint no-undef:0 */
test('adds 1 + 2 to equal 3', () => {
  expect(sumFunc(1, 2)).toBe(3);
});