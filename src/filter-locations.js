/**
 * Filter locations by distance
 *
 * @param {object} options
 * @param {number} options.distance - Distance in meters
 * @param {object[]} options.locations - Location objects
 *
 * @returns {object[]} locations
 */
export default ({ distance, locations }) =>
  locations.filter((location) => location.distance < distance)
