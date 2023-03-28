import getLocationDistance from './get-location-distance.js'
import filterLocations from './filter-locations.js'
import getDistanceBetween from './helpers/distance-between.js'

/**
 * Filter locations by distance on coords
 *
 * @param {object[]} locations - Location objects
 * @param {object} coords - Position coords with latitude and longitude
 * @param {number} coords.latitude
 * @param {number} coords.longitude
 * @param {number} distance - Distance in meters
 *
 * @returns {object[]} locations
 */
const filterLocationsOnDistance = (locations = [], coords = { latitude: 0, longitude: 0 }, distance = 0) => {
  const locationsWithDistance = getLocationDistance({ coords, locations })
  return filterLocations({ distance, locations: locationsWithDistance })
}

export {
  filterLocationsOnDistance,
  getLocationDistance,
  filterLocations,
  getDistanceBetween
}
