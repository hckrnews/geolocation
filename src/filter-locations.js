/**
 * Filter locations by distance
 *
 * @param {object} options
 * @param {number} options.distance
 * @param {object[]} options.locations
 *
 * @returns {object[]} locations
 */
export default ({ distance, locations }) =>
  locations.filter((location) => location.distance < distance)
