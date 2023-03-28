import test from 'node:test'
import assert from 'node:assert'
import allLocations from '../all-locations.js'

test('Test the location filter on distance', async (t) => {
  await t.test('It should return locations within the range', () => {
    const locations = allLocations({ amount: 2 })

    assert.strictEqual(locations.length, 5)
    locations.forEach((location) => {
      assert.ok(location.name !== undefined, 'Location should have a name')
      assert.ok(
        location.location.latitude !== undefined,
        'Location should have a latitude'
      )
      assert.ok(
        location.location.longitude !== undefined,
        'Location should have a longitude'
      )
    })
  })
})
