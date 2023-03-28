import getDistanceBetween from './helpers/distance-between.js'

/**
 * Get the distance between the user and the location
 *
 * @param {object} options
 * @param {object} options.coords - Position coords with latitude and longitude
 * @param {number} options.coords.latitude
 * @param {number} options.coords.longitude
 * @param {object[]} options.locations - Location objects
 *
 * @returns {object[]} locations
 */
export default ({ coords, locations }) =>
  locations.map((location) => ({
    ...location,
    distance: getDistanceBetween({
      coords,
      location: location.location
    })
  }))
