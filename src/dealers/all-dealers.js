import dealers from './dealers.js'
import makeRandomDealers from './random-dealers.js'

export default ({ amount }) => {
  const randomDealers = makeRandomDealers({ amount })
  return [...dealers, ...randomDealers]
}
