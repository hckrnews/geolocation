import test from 'node:test'
import assert from 'node:assert'
import { filterLocationsOnDistance } from '../index.js'

test('Test the get location distance', async (t) => {
  await t.test('It should return locations with distance', () => {
    const position = {
      coords: {
        latitude: 52.12265270227936,
        longitude: 5.575334785130014
      }
    }
    const locations = [
      {
        name: 'Location 1',
        location: {
          latitude: 52.045934,
          longitude: 6.102895
        }
      },
      {
        name: 'Location 2',
        location: {
          latitude: 52.17306,
          longitude: 5.434552
        }
      },
      {
        name: 'Location 3',
        location: {
          latitude: 52.057043,
          longitude: 4.389277
        }
      }
    ]

    const startTime = process.hrtime()
    const result = filterLocationsOnDistance(position.coords, locations, 12000)
    const executeTime = process.hrtime(startTime)

    const expected = [
      {
        name: 'Location 2',
        location: {
          latitude: 52.17306,
          longitude: 5.434552
        },
        distance: 11121.588884360723
      }
    ]

    assert.deepEqual(result, expected)
    assert.strictEqual(executeTime[0], 0)
    assert.ok(
      executeTime[1] < 500000,
      'The function is executed in less than 0.5 milliseconds'
    )
  })
})
