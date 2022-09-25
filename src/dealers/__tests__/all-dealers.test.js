import test from 'node:test'
import assert from 'node:assert'
import allDealers from '../all-dealers.js'

test('Test the dealer filter on distance', async (t) => {
  await t.test('It should return locations within the range', () => {
    const dealers = allDealers({ amount: 2 })

    assert.strictEqual(dealers.length, 5)
    dealers.forEach(dealer => {
      assert.ok(dealer.name !== undefined, 'Dealer should have a name')
      assert.ok(dealer.location.latitude !== undefined, 'Dealer should have a latitude')
      assert.ok(dealer.location.longitude !== undefined, 'Dealer should have a longitude')
    })
  })
})
