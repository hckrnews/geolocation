import dealers from './__fixtures__/dealers.js'
import makeRandomDealers from './random-dealers-factory.js'

/**
 * Get random dealers
 *
 * @param {object} options
 * @param {number} options.amount
 *
 * @returns {object[]} dealers
 */
export default ({ amount }) => [...dealers, ...makeRandomDealers({ amount })]
