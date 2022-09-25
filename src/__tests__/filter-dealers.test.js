import test from 'node:test'
import assert from 'node:assert'
import filterDealers from '../filter-dealers.js'
import makeAllDealers from '../dealers/all-dealers.js'

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

    const startTime = process.hrtime()
    const result = filterDealers({ distance, dealers })
    const executeTime = process.hrtime(startTime)
    const expected = [
      {
        id: 1,
        distance: 10000
      }
    ]

    assert.deepEqual(result, expected)
    assert.strictEqual(executeTime[0], 0)
    assert.ok(executeTime[1] < 100000, 'The function is executed in less than 0.1 milliseconds')
  })

  await t.test('It should return dealers with distance of 10000 dealers within 1 milliseconds', () => {
    const distance = 12000
    const dealers = makeAllDealers({ amount: 10000 })

    const startTime = process.hrtime()
    filterDealers({ distance, dealers })
    const executeTime = process.hrtime(startTime)

    assert.strictEqual(executeTime[0], 0)
    assert.ok(executeTime[1] < 1000000, 'The function is executed in less than 1 milliseconds')
  })
})
