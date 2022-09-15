import allDealers from './dealers.js'
import RandomDealer from './random-dealer.js'
import getDealers from './filter-dealers.js'

// Details about my position
const position = {
  coords: {
    latitude: 52.12265270227936,
    longitude: 5.575334785130014
  }
}
// Distance between me and a dealer
const distance = 12000 // 12km

// Seed 10.000 random dealers
console.time('seedDealers')
const dealerFactory = new RandomDealer({ amount: 10000 })
const randomDealers = []
for (const dealer of dealerFactory.generator()) {
  randomDealers.push(dealer)
}
console.timeEnd('seedDealers')

// Get the dealers within 12km
console.time('getDealers')
const nearDealers = getDealers({
  position,
  distance,
  dealers: [...allDealers, ...randomDealers]
})
console.timeEnd('getDealers')

// Show the results
console.table(nearDealers)
