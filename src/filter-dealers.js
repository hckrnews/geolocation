/**
 * Filter dealers by distance
 *
 * @param {object} options
 * @param {number} options.distance
 * @param {object[]} options.dealers
 *
 * @returns {object[]} dealers
 */
export default ({ distance, dealers }) => dealers.filter((dealer) => dealer.distance < distance)
