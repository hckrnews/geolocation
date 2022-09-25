const toRadians = (degrees) => (degrees * Math.PI) / 180

/**
 * Calculates the distance between two points on a sphere.
 * https://en.wikipedia.org/wiki/Haversine_formula
 *
 * @param {object} options
 * @param {object} options.coords
 * @param {number} options.coords.latitude
 * @param {number} options.coords.longitude
 * @param {object} options.location
 * @param {number} options.location.latitude
 * @param {number} options.location.longitude
 *
 * @returns {number}
 */
export default ({ coords, location }) => {
  const R = 6371e3 // metres
  const φ1 = toRadians(coords.latitude)
  const φ2 = toRadians(location.latitude)
  const Δφ = toRadians(location.latitude - coords.latitude)
  const Δλ = toRadians(location.longitude - coords.longitude)

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const distance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * distance
}
