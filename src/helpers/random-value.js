import { randomInt } from 'node:crypto'

export default (min, max) => randomInt(min, max + 1)
