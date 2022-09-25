import test from 'node:test'
import assert from 'node:assert'
import getDealerDistance from '../get-dealer-distance.js'
import makeAllDealers from '../dealers/all-dealers.js'

test('Test the get dealer distance', async (t) => {
  await t.test('It should return dealers with distance', () => {
    const position = {
      coords: {
        latitude: 52.12265270227936,
        longitude: 5.575334785130014
      }
    }
    const dealers = [
      {
        name: 'Dealer Dieren',
        location: {
          latitude: 52.045934,
          longitude: 6.102895
        }
      },
      {
        name: 'Dealer Amersfoort',
        location: {
          latitude: 52.17306,
          longitude: 5.434552
        }
      },
      {
        name: 'Dealer Amersfoort',
        location: {
          latitude: 52.057043,
          longitude: 4.389277
        }
      }
    ]

    const startTime = process.hrtime()
    const result = getDealerDistance({ position, dealers })
    const executeTime = process.hrtime(startTime)

    const expected = [
      {
        name: 'Dealer Dieren',
        location: {
          latitude: 52.045934,
          longitude: 6.102895
        },
        distance: 37043.453823201824
      },
      {
        name: 'Dealer Amersfoort',
        location: {
          latitude: 52.17306,
          longitude: 5.434552
        },
        distance: 11121.588884360723
      },
      {
        name: 'Dealer Amersfoort',
        location: {
          latitude: 52.057043,
          longitude: 4.389277
        },
        distance: 81359.41099661689
      }
    ]

    assert.deepEqual(result, expected)
    assert.strictEqual(executeTime[0], 0)
    assert.ok(executeTime[1] < 500000, 'The function is executed in less than 0.5 milliseconds')
  })

  await t.test('It should return dealers with distance of 10000 dealers within 25 milliseconds', () => {
    const position = {
      coords: {
        latitude: 52.12265270227936,
        longitude: 5.575334785130014
      }
    }
    const dealers = makeAllDealers({ amount: 10000 })

    const startTime = process.hrtime()
    getDealerDistance({ position, dealers })
    const executeTime = process.hrtime(startTime)

    assert.strictEqual(executeTime[0], 0)
    assert.ok(executeTime[1] < 25000000, 'The function is executed in less than 25 milliseconds')
  })
})
