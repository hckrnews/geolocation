import dealers from './__fixtures__/dealers.js'
import makeRandomDealers from './random-dealers-factory.js'

export default ({ amount }) => [...dealers, ...makeRandomDealers({ amount })]
