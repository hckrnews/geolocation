import dealers from './dealers.js'
import makeRandomDealers from './random-dealers.js'

export default ({ amount }) => [
  ...dealers,
  ...makeRandomDealers({ amount })
]
