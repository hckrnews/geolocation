import test from 'node:test'
import assert from 'node:assert'
import filterLocations from '../filter-locations.js'
import makeAllLocations from '../seeder/all-locations.js'

test('Test the location filter on distance', async (t) => {
  await t.test('It should return locations within the range', () => {
    const distance = 12000
    const locations = [
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
    const result = filterLocations({ distance, locations })
    const executeTime = process.hrtime(startTime)
    const expected = [
      {
        id: 1,
        distance: 10000
      }
    ]

    assert.deepEqual(result, expected)
    assert.strictEqual(executeTime[0], 0)
    assert.ok(
      executeTime[1] < 100000,
      'The function is executed in less than 0.1 milliseconds'
    )
  })

  await t.test(
    'It should return locations with distance of 10000 locations within 5 milliseconds',
    () => {
      const distance = 12000
      const locations = makeAllLocations({ amount: 10000 })

      const startTime = process.hrtime()
      filterLocations({ distance, locations })
      const executeTime = process.hrtime(startTime)

      assert.strictEqual(executeTime[0], 0)
      assert.ok(
        executeTime[1] < 5000000,
        'The function is executed in less than 5 milliseconds'
      )
    }
  )
})
