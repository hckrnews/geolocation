import getLocationDistance from './get-location-distance.js'
import filterLocations from './filter-locations.js'
import getDistanceBetween from './helpers/distance-between.js'

/**
 * Filter locations by distance on coords
 *
 * @param {object} options
 * @param {object} options.coords - Position coords with latitude and longitude
 * @param {number} options.coords.latitude
 * @param {number} options.coords.longitude
 * @param {object[]} options.locations - Location objects
 * @param {number} options.distance - Distance in meters
 *
 * @returns {object[]} locations
 */
const filterLocationsOnDistance = ({ coords, locations, distance }) => {
  const locationsWithDistance = getLocationDistance({ coords, locations })
  return filterLocations({ distance, locations: locationsWithDistance })
}

export {
  filterLocationsOnDistance,
  getLocationDistance,
  filterLocations,
  getDistanceBetween
}
