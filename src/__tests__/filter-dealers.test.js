import test from 'node:test'
import assert from 'node:assert'
import filterDealers from '../filter-dealers.js'

test('Test the dealer filter on distance', async (t) => {
  await t.test('It should return locations within the range', () => {
    const distance = 12000
    const dealers = [
      {
        id: 1,
        distance: 10000
      },
      {
        id: 2,
        distance: 20000
      }
    ]

    const result = filterDealers({ distance, dealers })
    const expected = [
      {
        id: 1,
        distance: 10000
      }
    ]

    assert.deepEqual(result, expected)
  })
})
