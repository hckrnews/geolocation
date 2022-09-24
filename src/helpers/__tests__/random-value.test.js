import test from 'node:test'
import assert from 'node:assert'
import randomValue from '../random-value.js'

test('Test the random value', async (t) => {
  await t.test('It should return a random value between 2 values', () => {
    const result = randomValue(42, 64)
    assert.ok(result >= 42 && result <= 64, 'The value is between 42 and 64')
  })
})
