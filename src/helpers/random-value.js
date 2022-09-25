import { randomInt } from 'node:crypto'

/**
 * Get a random value between 2 values
 *
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
export default (min, max) => randomInt(min, max + 1)
