import test from 'node:test'
import assert from 'node:assert'
import distanceBetween from '../distance-between.js'

test('Test the distance between', async (t) => {
  await t.test('It should return the distance between 2 locations', () => {
    const coords = {
      latitude: 51.5074,
      longitude: 0.1278
    }
    const location = {
      latitude: 51.5074,
      longitude: 1.1278
    }

    const result = distanceBetween({ coords, location })
    const expected = 69208.6913674116

    assert.strictEqual(result, expected)
  })
})
