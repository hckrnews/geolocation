import makeAllDealers from './dealers/all-dealers.js'
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

const dealers = makeAllDealers({ amount: 10000 })

// Get the dealers within 12km
console.time('getDealers')
const nearDealers = getDealers({
  position,
  distance,
  dealers
})
console.timeEnd('getDealers')

// Show the results
console.table(nearDealers)
