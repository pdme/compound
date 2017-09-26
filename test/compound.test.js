const compound = require('../src/compound')

const sum = (a, b) => a + b
const multiply = (a, b) => a * b

test('first adds 2 + 3, then multiplies 5 * 3', () => {
  expect(compound(multiply, sum)(2, 3)).toBe(15)
})
