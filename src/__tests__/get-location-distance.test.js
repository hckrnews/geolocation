import test from 'node:test'
import assert from 'node:assert'
import getLocationDistance from '../get-location-distance.js'
import makeAllLocations from '../seeder/all-locations.js'

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
    const result = getLocationDistance({ coords: position.coords, locations })
    const executeTime = process.hrtime(startTime)

    const expected = [
      {
        name: 'Location 1',
        location: {
          latitude: 52.045934,
          longitude: 6.102895
        },
        distance: 37043.453823201824
      },
      {
        name: 'Location 2',
        location: {
          latitude: 52.17306,
          longitude: 5.434552
        },
        distance: 11121.588884360723
      },
      {
        name: 'Location 3',
        location: {
          latitude: 52.057043,
          longitude: 4.389277
        },
        distance: 81359.41099661689
      }
    ]

    assert.deepEqual(result, expected)
    assert.strictEqual(executeTime[0], 0)
    assert.ok(
      executeTime[1] < 5000000,
      'The function is executed in less than 5 milliseconds'
    )
  })

  await t.test(
    'It should return locations with distance of 10000 locations within 25 milliseconds',
    () => {
      const position = {
        coords: {
          latitude: 52.12265270227936,
          longitude: 5.575334785130014
        }
      }
      const locations = makeAllLocations({ amount: 10000 })

      const startTime = process.hrtime()
      getLocationDistance({ coords: position.coords, locations })
      const executeTime = process.hrtime(startTime)

      assert.strictEqual(executeTime[0], 0)
      assert.ok(
        executeTime[1] < 25000000,
        'The function is executed in less than 25 milliseconds'
      )
    }
  )
})
