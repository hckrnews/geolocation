import locations from './__fixtures__/locations.js'
import makeRandomLocations from './random-location-factory.js'

/**
 * Get random locations
 *
 * @param {object} options
 * @param {number} options.amount
 *
 * @returns {object[]} locations
 */
export default ({ amount }) => [...locations, ...makeRandomLocations({ amount })]
