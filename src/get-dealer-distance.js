import getDistanceBetween from './helpers/distance-between.js'

/**
 * Get the distance between the user and the dealer
 *
 * @param {object} options
 * @param {object} options.position
 * @param {number} options.position.latitude
 * @param {number} options.position.longitude
 * @param {object[]} options.dealers
 *
 * @returns {object[]} dealers
 */
export default ({ position, dealers }) => dealers.map((dealer) => ({
  ...dealer,
  distance: getDistanceBetween({
    coords: position.coords,
    location: dealer.location
  })
}))
