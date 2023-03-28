import getLocationDistance from './get-location-distance.js'
import filterLocations from './filter-locations.js'
import getDistanceBetween from './helpers/distance-between.js'

/**
 * Filter locations by distance on coords
 *
 * @param {object} coords - Position coords with latitude and longitude
 * @param {number} coords.latitude
 * @param {number} coords.longitude
 * @param {object[]} locations - Location objects
 * @param {number} distance - Distance in meters
 *
 * @returns {object[]} locations
 */
const filterLocationsOnDistance = (coords = { latitude: 0, longitude: 0 }, locations = [], distance = 0) => {
  const locationsWithDistance = getLocationDistance({ coords, locations })
  return filterLocations({ distance, locations: locationsWithDistance })
}

export {
  filterLocationsOnDistance,
  getLocationDistance,
  filterLocations,
  getDistanceBetween
}
